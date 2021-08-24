import React from 'react';

import  {
    ProgressBarWrap,
    ProgressText,
    ProgressSpan,
    ProgressPercent
} from './progress-bar.style';

const ProgressBar = ({text,percent}) => (
    <ProgressBarWrap>
    
            <ProgressPercent percent={percent}/>
            <ProgressText>

                {text}

                <ProgressSpan>{percent}</ProgressSpan>%

            </ProgressText>

            

    </ProgressBarWrap>
);

export default ProgressBar;