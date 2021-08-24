import styled from "styled-components";
import { device } from "../../responsive-sizes";

export const ProgressBarWrap = styled.div`
    width: 60rem;
    height: 3rem;
    background-color: #ccc;
    margin: 1.5rem auto;
    border-radius: .3rem;
    box-shadow: .2rem .2rem 1rem #555;
    position: relative;

    @media ${device.tablet_768px} {
        width: 40rem;
    }

    @media ${device.mobileL_425px} {
        width:30rem;
    }
`;

export const ProgressText = styled.p`
    position: absolute;
    left: 1rem;
    font-size: 1.5rem;
    color: #fff;
    
`;

export const ProgressSpan = styled.span`
    margin:0 .5rem;
    font-size: 1.8rem;
    font-weight: 700;
`;

export const ProgressPercent = styled.div`
    position: absolute;
    left: 0;
    top:0;
    width: ${({percent})=> `${percent}%`};
    height: 100%;
    background-color: #960955;
    border-radius: .3rem;
    transition: width .5s .5s ease-in-out;
`;

