import React from 'react';
import {
    WrapSection,
    SectionHeading,
    ProgressBarsWrapper,
    ServicesWrapper,
    ContactSectionWrapper,
    ContactSectionSocial,
    ProjectWrapper,
    CarouselWrap,
    SocialIcons,
    SocialLink,
    Copyright,
    ContactFormInput,
    ContactFormWrapper,
    ContactFormText
} from './section.style';
import ProgressBar from '../progressBar/progress-bar.component';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ServiceComponent from '../servicesIcons/service.component';
import ProjectCart from '../projectCard/projectCard.component';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Section = ({id,title,progressBarData,serviceData,contactData}) => {

    const getConfigurableProps = () => ({
        showArrows: true,
        showStatus: false,
        showIndicators: false,
        infiniteLoop: true,
        showThumbs: false,
        autoPlay: false,
        stopOnHover: true,
        swipeable: true,
        dynamicHeight:true,
        autoFocus:false
    });

    return (
        <WrapSection id={id}>
            
            <SectionHeading>
                {title}
            </SectionHeading>

            {
                id === 'projects' ? 
                (
                    <ProjectWrapper>
                        <CarouselWrap centerMode centerSlidePercentage={50} {...getConfigurableProps()}>
                            <ProjectCart />
                            <ProjectCart />
                            <ProjectCart />
                            <ProjectCart />
                            <ProjectCart />
                        </CarouselWrap>
                    </ProjectWrapper>   
                ) 
                : id === 'about' ? 
                (
                    <Fade right>
                        <ProgressBarsWrapper>
                            {
                                progressBarData.text.map((text,i)=> <ProgressBar key={i} text={text} percent={progressBarData.percent[i]}/>)
                            }
                        </ProgressBarsWrapper>

                        <Zoom left>
                            <ServicesWrapper>
                                {
                                    serviceData.text.map((text,i)=> <ServiceComponent key={i} text={text} icon={serviceData.icons[i]} />)
                                }
                            </ServicesWrapper>
                        </Zoom>
                    </Fade>
                ) 
                : 
                (
                    <ContactSectionWrapper>

                        <ContactFormWrapper>
                            <ContactFormInput type='text' placeholder="Name" />
                            <ContactFormInput type='email' placeholder="Email" />
                            <ContactFormText placeholder="Message" />
                            <ContactFormInput type="submit" value="Submit" />
                        </ContactFormWrapper>
                        
                        <ContactSectionSocial>
                            {
                                contactData.links.map((link,i)=> <SocialLink href={link} target="_blank">
                                    <SocialIcons className={contactData.icons[i]}/>
                                </SocialLink>)
                            }
                            <Copyright>
                                Copyright &copy; Ali Hamdan. All Rights Reserved
                            </Copyright>
                        </ContactSectionSocial>

                    </ContactSectionWrapper>
                )
            }
        </WrapSection>
    )
};

export default Section;