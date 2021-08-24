import styled from "styled-components";
import { device } from "../../responsive-sizes";

export const Service = styled.div`
    text-align: center;

    &:first-child,
    &:last-child {
        align-self:flex-start;
    }

    @media ${device.tablet_768px} {
        margin: 1rem;
    }

    @media ${device.mobileL_425px} {
        &:first-child,
        &:last-child {
            align-self:unset;
        }

        margin: 1rem;
    }
`;

export const ServiceIcon = styled.i`
    font-size: 10rem;
    color: rgba(150,9,85,.8);
    margin-bottom: 2rem;
    text-shadow: .1rem .1rem .5rem #555;

    @media ${device.laptop_1024px} {
        font-size: 8rem;
    }

    @media ${device.mobileL_425px} {
        font-size: 5rem;
    }
`;

export const ServiceHeading = styled.h2`
    font-size: 2rem;
    color: rgba(150,9,85,.8);
    background: linear-gradient(to right bottom, rgba(255,255,255,.5) , rgba(0,0,0,.5)) ;
    width: 25rem;
    letter-spacing: .3rem;
    transform: skew(-10deg);
    box-shadow: .2rem .2rem .5rem #555;

    @media ${device.laptop_1024px} {
        font-size: 1.8rem;
        width:20rem;
    }

    @media ${device.tablet_768px} {
        font-size: 1.5rem;
        width:15rem;
    }


`;