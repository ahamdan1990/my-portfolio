import React from 'react';
import Typed from 'react-typed';
import CustomButton from '../../Components/customButton/custom-button.component';
import { 
    WelcomeSection,
    WelcomeHeading, 
    WelcomeLogoContainer, 
    WelcomeLogo, 
    WelcomeLogoImgWrapper,
    WelcomeDownArrow,
    ButtonContainer,
    
} from './landing.page.styles';

import { useHistory } from 'react-router';

const LandingPage = () => {
    let history = useHistory();
    const handleOnClick = (e) => {
        const screenY = window.innerHeight;
        const {scrollY} = e.view;
        
        window.scrollTo(0,scrollY+screenY);
    }

    return(
        <WelcomeSection  id="home" >

            <WelcomeLogoContainer>

                <WelcomeLogoImgWrapper />

                <WelcomeLogo>
                    A&N
                </WelcomeLogo>

            </WelcomeLogoContainer>

            <WelcomeHeading>
                <Typed
                    strings={['Welcome to my portfolio.','I\'m Ali Hamdan.','I\'m passionate about Web Development....!!!!']}
                    typeSpeed={70}
                    backSpeed={50}
                    startDelay={500}
                />
            </WelcomeHeading>
            
            <ButtonContainer>
                <CustomButton href="#projects" onClick={()=>history.push("/projects")} whiteAnimated>
                    Projects
                </CustomButton>
            </ButtonContainer>


            <WelcomeDownArrow onClick={handleOnClick} />

        </WelcomeSection>
    )
};

export default LandingPage;
