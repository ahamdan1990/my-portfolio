import styled, {css} from "styled-components";
import { device } from "../../responsive-sizes";

const FrontSide = css`
    background-color: transparent;
`;

const BackSide = css`
    background-color: transparent;
    transform: rotateY(180deg);
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
    
    &:hover :first-child {
        transform: rotateY(-180deg);
    };

    &:hover :last-child {
        transform: rotateY(0deg);
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

