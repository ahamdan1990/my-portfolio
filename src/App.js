import React from 'react';
import {connect} from 'react-redux';
import {GlobalStyle} from './global.styles';
import { setSticky,removeSticky } from './redux/header/header.actions';
import { Switch,Route } from 'react-router-dom';
import LandingPage from './pages/LandingPAge/landing.page';
import Header from './Components/header/header.component';
import { createStructuredSelector } from 'reselect';
import { selectHeaderSticky } from './redux/header/header.selector';
import { fetchSectionDataStart,setSection,setPercent } from './redux/section/section.actions';
import { selectSectionDataForPreview } from './redux/section/section.selector';
import Section from './Components/section/section.component';
import CV from './Components/cv/cv.component';

class App extends React.Component {

  componentDidMount() {
    const {fetchSectionDataStart} = this.props;
    fetchSectionDataStart();
    window.addEventListener("scroll", this.handleOnScroll);

  }
  componentWillUnmount() {
     window.removeEventListener('scroll');
   }

  handleOnScroll= () => {
    const {navbar} = this;
    const {setSticky,removeSticky,sectionData,setSection,setPercent} = this.props;
    
    if(window.pageYOffset >= navbar.offsetTop) {
      setSticky();
      
      sectionData.forEach((section,i) => {

        const currentSection = document.querySelector(`#${section.id}`);
        try {
          if (window.pageYOffset >= currentSection.offsetTop - 10) {
            setSection(i)
          } 
        }
        catch(e) {
         return false;
        }

    });

    } else {
      removeSticky();
    }
    console.log(navbar.offsetTop)
    if (window.pageYOffset > navbar.offsetTop - 10) {
      setPercent();
    }
  }

  render() {
    const {getSticky,sectionData} = this.props;
    
  return (
    <div className="App" >
      <GlobalStyle />
      <LandingPage />
      <div ref={navbar => this.navbar = navbar}/>
      <Header sticky={getSticky} />

      <Switch>
      
        <Route exact path="/cv" component={CV} />

        <Route path="/" render={ () => (
          sectionData.map(({...props},index) => (
            <Section key={index} {...props} />
          )))
        } />

      </Switch>
    </div>
  );
  }

}

const mapStateToProps = createStructuredSelector({
  getSticky: selectHeaderSticky,
  sectionData: selectSectionDataForPreview
});

const mapDispatchToProps = dispatch => ({
  setSticky: () => dispatch(setSticky()),
  removeSticky: ()=> dispatch(removeSticky()),
  fetchSectionDataStart: ()=> dispatch(fetchSectionDataStart()),
  setSection: (sectionNumber) => dispatch(setSection(sectionNumber)),
  setPercent: () => dispatch(setPercent())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
