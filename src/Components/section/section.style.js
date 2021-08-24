import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import {device} from '../../responsive-sizes';

export const WrapSection = styled.div`
    width:100%;
    font-family: 'Roboto Slab', serif;
`;

export const SectionHeading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    color:#960955;
    padding-top: 10vh;
    font-size:5rem;
    letter-spacing: 1rem;
    text-shadow:.1rem .1rem .2rem rgba(0,0,0,.6);

    @media ${device.tablet_768px} {
        font-size: 4rem;
        padding-top:5vh;
    }

    @media ${device.mobileL_425px} {
        font-size: 3rem;
    }
`;

export const ProgressBarsWrapper = styled.div`
    margin-top: 5rem;
`;

export const ServicesWrapper = styled.div`
    width:100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:5rem;

    @media ${device.tablet_768px} {
        padding-top:5rem;
        flex-wrap: wrap;
        margin-bottom: 0;
        height: unset;
    }

    @media ${device.mobileL_425px} {
        padding-top: 0;
        margin: 5rem 0;
    }
`;

export const ContactSectionWrapper = styled.div`
    width: 100%;
    height:calc(100vh - 15rem);
    margin-top:8rem;
    background:linear-gradient(to left bottom,rgba(255,255,255,.8),rgba(0,0,0,.8));
    clip-path: polygon(0 15vh,50% 0, 100% 15vh,100% 100%,0 100%);
    position: relative;

    @media ${device.laptop_1024px} {
        clip-path: polygon(0 5vh,50% 0, 100% 5vh,100% 100%,0 100%); 
    }

`;

export const ContactSectionSocial = styled.div`
    position: absolute;
    left: 0;
    bottom: 5rem;
    text-align: center;
    width:100%;
    height:10vh;
    background:transparent;
`;

export const ProjectWrapper = styled.div`
    width:100%;
    height:100%;
    position:relative;
    margin-top:10rem;

    @media ${device.tablet_768px} {
        margin: 0;
    }
`;

export const CarouselWrap = styled(Carousel)`
    
    li.slide {
        transition: transform .5s ;
        transform: scale(.6);

        @media ${device.tablet_768px} {
            transform: scale(.45);
        }

        @media ${device.mobileL_425px} {
            /* transform: scale(.2); */
        }

        &.selected{
            transform: scale(.8);

            @media ${device.tablet_768px} {
                transform: scale(.6);
            }

            @media ${device.mobileL_425px} {
                /* transform: scale(.4); */
            }

        }
    }


`;

export const SocialLink = styled.a`
    cursor: pointer;
`;

export const SocialIcons = styled.i`
    font-size: 3rem;
    color: #fff;
    margin: 0 2rem;
    padding: .7rem;
    background-color: #960955;
    border-radius: .5rem;
    display: inline-block;
    box-shadow:.1rem .2rem .2rem rgba(0,0,0,.4);

    @media ${device.mobileS_320px} {
        font-size: 2rem;
    }
`;

export const Copyright = styled.p`
    color: #960955;
    font-size: 2rem;
    letter-spacing: .2rem;
    font-weight: 300;
    text-align: center;
    margin-top: 1rem;
    text-shadow: .1rem .2rem .2rem rgba(0,0,0,.5);

    @media ${device.tablet_768px} {
        font-size: 1.5rem;
    }

    @media ${device.mobileS_320px} {
        font-size: 1.2rem;
    }
`;

export const ContactFormWrapper = styled.form`
    display: block;
    text-align: center;
    width: 40rem;
    padding-top: 5rem;
    margin: 0 auto;

    @media ${device.mobileS_320px} {
        width: 30rem;
        padding-top: 5rem;
    }
`;

export const ContactFormInput = styled.input`
    width: 80%;
    padding: .5rem;
    margin: .5rem auto;
    background-color: #fff;
    font-size: 1.5rem;
    border: .2rem solid #960955;
    color: #960955;
`;

export const ContactFormText = styled.textarea`
    width: 80%;
    padding: .5rem;
    margin: .5rem auto;
    background-color: #fff;
    font-size: 1.5rem;
    border: .2rem solid #960955;
    color: #960955;
    min-width: 50%;
    min-height: 10rem;
    max-height: 15rem;
    max-width: 100%;
`;