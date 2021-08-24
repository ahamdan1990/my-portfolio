import styled, {css} from "styled-components";
import { device } from "../../responsive-sizes";
import {ReactComponent as CheckMenu} from '../../assets/HamburgerMenu.svg';

const headerSticky = css`
    position: fixed;
    top: 0;
    margin:0;
`;

const headerNonSticky = css`
    position: relative;
    margin: unset;
`;

const headerToggled = css`
    .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -430;
        stroke-width: 6;
        }
    .line2 {
        stroke-dasharray: 0 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
        }
    .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -430;
        stroke-width: 6;
        }
`;

const buttonContainerToggled = css`
    opacity: 1;
    min-height:25rem;
    transition: min-height .5s;
`;

const checkToggled = ({toggled}) => {
    if(toggled) {
        return headerToggled;
    }
    return false;
}

const checkHeader = (props) => {
    if (props.sticky) {
        return headerSticky;
    }
    return headerNonSticky
}

export const HeaderContainer = styled.nav`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color:#eee;
    text-shadow: .1rem .1rem .2rem rgba(0,0,0,.5);
    width: 100%;
    height: 7vh;
    margin-top: 5rem;
    background: linear-gradient(to right bottom, rgba(255,255,255,.5) , rgba(0,0,0,.5)) ;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    z-index: 100;
    position: relative;
    ${checkHeader}

`;

export const ButtonsContainer = styled.div`
    height: 100%;
    width:100%;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media ${device.tablet_768px} {
        display: block;
        position: absolute;
        text-align: center;
        opacity: 0;
        transition: all .3s ;
        top:100%;
        background: linear-gradient(to right bottom, rgba(255,255,255,.9) , rgba(0,0,0,.9)) ;
        box-shadow: .1rem .1rem .2rem rgba(0,0,0,.4);
        min-height: 0;

        ${({toggled}) => {
            if (toggled) {
                return buttonContainerToggled;
            }
        }}
    }
`;

export const CheckMenuBtn = styled.button`
    background-color: transparent;
    border:none;
`;

export const CheckMenuIcon = styled(CheckMenu) `
    display: none;

    @media ${device.tablet_768px} {

        display: block;
        position: absolute;
        top:-.5rem;
        left: -2rem;
        height: 4.5rem;
        cursor: pointer;

        .line {
            fill: none;
            stroke: #960955;
            stroke-width: 6;
            transition: stroke-dasharray 600ms cubic-bezier(0.5, 0, 0.2, 1),
            stroke-dashoffset 1000ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line1 {
            stroke-dasharray: 60 207;
            stroke-width: 6;
        }
        .line2 {
            stroke-dasharray: 50 60;
            stroke-width: 6;
        }
        .line3 {
            stroke-dasharray: 40 207;
            stroke-width: 6;
        }

        ${checkToggled}
    }
`;

