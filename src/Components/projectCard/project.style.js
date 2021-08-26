import styled, {css} from "styled-components";
import { device } from "../../responsive-sizes";

const FrontSide = css`
    background-color: transparent;
    transform: rotateY(0);
`;

const BackSide = css`
    background-color: transparent;
    transform: rotateY(180deg);
`;

const displayNone = css`
    display: none;
`;

function addSideStyle(props) {
    if(props.front) {
        return FrontSide
    }
    return BackSide;
}

export const CardWrapper = styled.div`
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52rem;
    width: 35rem;
    margin:2rem auto;
    
    &:hover > div {
        transform: rotateY(-180deg);
    };

    &:hover :last-child {
        transform: rotateY(0deg);
        opacity: 1;
    }

    @media ${device.mobileL_425px} {
        width:30rem;
    }
`;


export const CardSide = styled.div`
    height: 52rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .15);
    overflow: hidden;
    ${addSideStyle};
`;

export const CardFrontWrapper = styled.div`
    width: 100%;
    height:100%;
    position: relative;
`;
export const CardHeading = styled.h1`
    margin-top: 1rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .3rem;
    color:#960955;
    font-size: 2rem;
    width:100%;
    text-shadow:.1rem .2rem .2rem rgba(158,82,152,.7);
`;

export const CardFrontGifWrapper = styled.iframe`
    position: absolute;
    top:50%;
    left: 0;
    width:100%;
    height: 36rem;
    margin: 1rem;
    z-index:10000;
    transform: translateY(-50%);
`;

export const CardDescriptionWrapper = styled.div`
    position: absolute;
    bottom: 2rem;
    width: 100%;
`;
export const CardFrontDescription = styled.h4`
    font-size: 2.5rem;
    color:#960955;
    text-shadow:.1rem .1rem .2rem rgba(0,0,0,.2);
`;


export const CardBackWrapper = styled.div`
    width:100%;
    height: 100%;
    position: relative;
    
`;

export const CardBackButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width:100%;
    align-items: flex-end;
    padding-bottom: 2rem;
    transition: all .3s .6s;
    opacity: 0;
`;

export const CardBackButtons = styled.a`
    
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    background-color: #fff;
    color: #960955;

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
        background-color: #fff;
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

`;

export const CardBackHeading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .3rem;
    color:#960955;
    font-size: 2rem;
    width:100%;
    position: absolute;
    top:1rem;
    text-shadow:.1rem .2rem .2rem rgba(158,82,152,.7);
`;

export const CardLangIcon = styled.i`
    font-size:4rem;
    position: absolute;
    top:50%;
    left: 5rem ;
    transform: translateY(-50%);
`;