import React from 'react';
import { 
    CardWrapper,
    CardSide,
    CardHeading,
    CardFrontGifWrapper,
    CardFrontDescription,
    CardDescriptionWrapper,
    CardBackWrapper,
    CardFrontWrapper,
    CardBackButtonWrapper,
    CardBackButtons,
    CardBackHeading,
    CardLangIcon
 } from './project.style';

const ProjectCart = ({link,headingTitle,lang}) => (
    <CardWrapper>
        <CardSide front>

            <CardFrontWrapper>

                <CardHeading>
                    {headingTitle}
                </CardHeading>


                <CardDescriptionWrapper>
                    <CardFrontDescription>
                        <CardLangIcon className="fab fa-react" />{lang}
                    </CardFrontDescription>
                </CardDescriptionWrapper>

            </CardFrontWrapper>

        </CardSide>
        <CardSide>
            <CardBackWrapper>

                <CardBackHeading>
                    {headingTitle}
                </CardBackHeading>

                <CardFrontGifWrapper src={link} />
    
                <CardBackButtonWrapper>
                    
                    <CardBackButtons>
                        DEMO
                    </CardBackButtons>


                    <CardBackButtons>
                        Code
                    </CardBackButtons>

                </CardBackButtonWrapper>

            </CardBackWrapper>
        </CardSide>
    </CardWrapper>
);

export default ProjectCart;