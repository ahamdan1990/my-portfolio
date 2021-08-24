import React from 'react';
import { HeaderContainer,ButtonsContainer,CheckMenuIcon,CheckMenuBtn } from './header.styles';
import CustomButton from '../customButton/custom-button.component';
import { createStructuredSelector } from 'reselect';
import { selectSectionNumber } from '../../redux/section/section.selector';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { selectHeaderToggle } from '../../redux/header/header.selector';
import {toggleMenu} from '../../redux/header/header.actions';

const Header = ({sectionNumber,toggled,dispatch,...props}) => {
    let history = useHistory();

    return(

        <HeaderContainer {...props} id="navbar">

            
            <ButtonsContainer toggled={toggled}>
        
                <CustomButton href="#home" onClick={()=>history.push("/home")} NavBtn toggled={toggled}>
                    Home
                </CustomButton>

                <CustomButton href="#about" onClick={()=>history.push("/about")}  NavBtn drawLine={ sectionNumber === 0 ? true:false} toggled={toggled}>
                    About
                </CustomButton>

                <CustomButton href="#projects" onClick={()=>history.push("/projects")} NavBtn drawLine={ sectionNumber === 1 ? true:false} toggled={toggled}>
                    Projects
                </CustomButton>

                <CustomButton href="#contact" onClick={()=>history.push("/contact")} NavBtn drawLine={ sectionNumber === 2 ? true:false} toggled={toggled}>
                    Contact
                </CustomButton>

                <CustomButton href="#cv" onClick={()=>history.push("/cv")} NavBtn toggled={toggled}>
                    CV
                </CustomButton>

            </ButtonsContainer>

            <CheckMenuBtn onClick={()=>dispatch(toggleMenu())}>
                <CheckMenuIcon toggled={toggled} />
            </CheckMenuBtn>

        </HeaderContainer>
    );
}
const mapStateToProps = createStructuredSelector({
    sectionNumber: selectSectionNumber,
    toggled: selectHeaderToggle
})

export default connect(mapStateToProps)(Header);