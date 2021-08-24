import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({children,...props})=> (
    <div>
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    </div>
);

export default CustomButton;