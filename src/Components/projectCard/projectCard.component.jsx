import React from 'react';
import { CardWrapper,CardSide } from './project.style';

const ProjectCart = () => (
    <CardWrapper>
        <CardSide front>
            Front
        </CardSide>
        <CardSide>
            Back
        </CardSide>
    </CardWrapper>
);

export default ProjectCart;