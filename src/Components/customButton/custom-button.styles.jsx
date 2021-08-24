import styled, {css} from 'styled-components';
import { device } from '../../responsive-sizes';

const btnWhiteStyle = css `
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    background-color: transparent;
    color: #960955;

    &::after {
        background-color: transparent;
    }
`;

const btnAnimated = css`
    animation: moveInBottom .5s ease-out 3s;
    animation-fill-mode: forwards;

        
    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }


`;

const toggleButton = css`

    transform: translateX(0);
    opacity:1;
`;

const navBtn = css`
    box-shadow: unset;
    transform: none;
    position: relative;
    color:#eee;

    &::after {
        content: "";
        height: .3rem;
        width: 0;
        background-color: rgba(255,255,255,.4);
        position: absolute;
        top: 80%;
        left: 0;
        border-radius: 0;
        transition: width .6s ;
    }

    &::before {
        content: "";
        height: .3rem;
        width: 0;
        background-color: rgba(150,9,85,.4);
        position: absolute;
        top: 80%;
        right: 0;
        border-radius: 0;
        transition: width .3s .3s;
    }

    &:hover {
        
        box-shadow:unset;
        color: rgba(150,9,85,.8);
        &::after {
            transform: unset;
            opacity: unset;
            width: 100%;
        }

        &::before {
            width: 100%;

        }
    }

    &:active {
        transform: none;
        box-shadow: unset;
    }


    &:focus {
        outline: none;
    }

    &,&:link,&:visited {
        box-shadow: none;
    }
`;

const drawLine = css`
        

        color: rgba(150,9,85,.8);
        &::after {
            transform: unset;
            opacity: unset;
            width: 100%;
        }

        &::before {
            width: 100%;
        }

`;

const getBtnStyle = props => {

    if (props.white) {
        return btnWhiteStyle;
    } else if (props.animated) {
        return btnAnimated;
    } else if (props.whiteAnimated) {
        return btnAnimated + btnWhiteStyle;
    } else if (props.NavBtn && props.drawLine) {
        return navBtn + drawLine
    } else if (props.NavBtn) {
        return navBtn;
    } 
}

export const CustomButtonContainer = styled.a`
    &,&:link,&:visited { 
        
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: .5rem;
        transition: all .2s ;
        position: relative;
        letter-spacing: .5rem;
        box-shadow: 0 .5rem 2rem rgba(0,0,0,.2);
        

        border: none;
        cursor: pointer;

        
    }

    &::after {
        /*this pseudo-element ::after will create another element which will be the same as the first element which is the button here*/
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2); /*box-shadow: x y blur color */

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }

    &:active {
        transform: translateY(-.1rem);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
    }


    &:focus {
        outline: none;
    }

    ${getBtnStyle};

    @media ${device.tablet_768px} {
        transform: translateX(-100vh);

        opacity: 0;
        ${({toggled})=> {
            if (toggled) {
                return toggleButton;
            }
        }}

    }

`;

