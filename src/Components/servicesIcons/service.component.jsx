import React from 'react';
import { Service,ServiceIcon,ServiceHeading } from './service.style';

const ServiceComponent = ({text,icon}) => (
    <Service>
        <ServiceIcon className={icon} />
        <ServiceHeading>
            {text}
        </ServiceHeading>
    </Service>
);

export default ServiceComponent;