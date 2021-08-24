import styled from "styled-components";
import { device } from "../../responsive-sizes";
import {ReactComponent as downArrow} from '../../assets/down-arrow.svg';

export const WelcomeSection = styled.section`
    width:100%;
    height:100vh;
    background-image:linear-gradient(to left bottom,rgba(255,255,255,.8),rgba(0,0,0,.1)), url('./images/landing-image-large.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: relative;
    clip-path: polygon(0 0,100% 0, 100% 85vh,50% 95vh,0 85vh);
    user-select: none;
    
    @media ${device.laptop_1024px} {
        background-image: url('./images/landing-image-medium.jpg');
    }

    
    @media ${device.laptop_1024px} and (max-height: 450px) {
        background-image: url('./images/landing-image-small.jpg');
        background-position: top;
        overflow: hidden;
    }

    @media ${device.tablet_768px} {
        background-image: url('./images/landing-image-medium.jpg');
        background-position: right;
    }

    @media ${device.tablet_768px} and (max-height: 450px) {
        background-image: url('./images/landing-image-small.jpg');
    }

    /* @media ${device.mobileL_425px} {
        background-image: url('./images/landing-image-small.jpg');
        background-position-x: -45rem;
    } */
`;

export const WelcomeDownArrow = styled(downArrow)`
    width:5rem;
    height:5rem;
    position: absolute;
    left:50%;
    bottom:7vh;
    transform: translateX(-50%);
    fill:#960955;
    cursor: pointer;
    animation: animateDown infinite 1.5s;

    @keyframes animateDown {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform:translate(-50%,0);
        }
 
        40% {
            transform:translate(-50%,.5rem);
        }

        60% {
            transform:translate(-50%,.3rem);
        }
    }

    @media ${device.tablet_768px} {
        width: 3rem;
        height: 3rem;
    }
`;

export const WelcomeHeading = styled.h1`
    color: #960955;
    text-shadow:.1rem .1rem .2rem black;
    font-size:8rem;
    font-weight: unset;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:50%;
    text-align:center;

    @media ${device.laptopL_1440px} {
        font-size: 6rem;
        top:60%;
        width:70%;
    }

    @media ${device.laptop_1024px} {
        font-size: 5rem;
    }

    @media ${device.laptop_1024px} and (max-height: 450px) {
        font-size: 2rem;
    }
    
    @media ${device.tablet_768px} and (max-height: 450px) {
        font-size: 2rem;
        top: 48%;
    }
    
    @media ${device.tablet_768px} {
        top:48%;
    }

    @media ${device.mobileL_425px} {
        top:48%;
        left:46%;
    }

    @media ${device.mobileS_320px} {
        font-size: 3rem;
        top:55%
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top:75%;
    left:50%;
    transform: translate(-50%,-50%);
`;

export const WelcomeLogoContainer = styled.div`
    position: relative;
    width:40rem;
    height:40rem;

    @media ${device.laptopL_1440px} {
        width: 30rem;
        height: 30rem;
    }

    @media ${device.laptop_1024px} {
        width:20rem;
        height:20rem;
    }

    @media ${device.laptop_1024px} and (max-height: 450px) {
        width:15rem;
        height:15rem;
    }

    @media ${device.tablet_768px} and (max-height: 450px) {
        width:15rem;
        height:15rem;
    }

    @media ${device.tablet_768px} {
        left:50%;
        transform: translateX(-50%);
    }
`;

export const WelcomeLogo = styled.h4`
    color: #960955;
    font-size:4rem;
    text-transform: uppercase;
    letter-spacing:1rem;
    text-shadow:.1rem .1rem .2rem #eee;
    position:absolute;
    bottom:1rem;
    left:50%;
    transform: translateX(-50%);
    text-align:center;

    @media ${device.laptopL_1440px} {
        font-size: 3rem;
        bottom: -1rem;
    }

    @media ${device.laptop_1024px} {
        font-size:2rem;
        bottom: -3.5rem;
    }

    @media ${device.laptop_1024px} and (max-height: 450px) {
        font-size:1.8rem;
        bottom: -3.5rem;
    }

    @media ${device.tablet_768px} and (max-height: 450px) {
        font-size:1.8rem;
        bottom: -3.5rem;
    }
    
`;

export const WelcomeLogoImgWrapper = styled.a`
    width:25rem;
    height:25rem;
    border-radius:50%;
    background-color: #fff;
    position: absolute;
    top:4rem;
    left:50%;
    transform: translateX(-50%);
    box-shadow: .6rem .3rem 3rem #999;

    @media ${device.laptopL_1440px} {
        width:20rem;
        height:20rem;
    }

    @media ${device.laptop_1024px} {
            width:15rem;
            height:15rem;
    }

    @media ${device.laptop_1024px} and (max-height: 450px) {
        width:10rem;
        height:10rem;
    }

    @media ${device.tablet_768px} and (max-height: 450px) {
        width:10rem;
        height:10rem;
    }

    @media ${device.tablet_768px} {
        box-shadow: .3rem .3rem 3rem #000;
    }
      

    &::before {
        content: '';
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width:24rem;
        height:24rem;
        border-radius:50%;
        background-color: ##fff;
        background-image: url(https://media-exp1.licdn.com/dms/image/C4D03AQHYdBGItB-6vQ/profile-displayphoto-shrink_400_400/0/1619884743442?e=1632960000&v=beta&t=b1_trgGyQi4K69gA3kQvDgkHKABMd_K5RBnZ35ux4TI);
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;

        @media ${device.laptopL_1440px} {
            width:19rem;
            height:19rem;
        }

        @media ${device.laptop_1024px} {
            width:14rem;
            height:14rem;
        }

        @media ${device.laptop_1024px} and (max-height: 450px) {
            width:9rem;
            height:9rem;
        }

        @media ${device.tablet_768px} and (max-height: 450px) {
        width:9rem;
        height:9rem;
    }
    }
`;





