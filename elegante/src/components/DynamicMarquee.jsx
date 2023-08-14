import React from 'react';
import { Marquee } from 'dynamic-marquee-react';
import './DynamicMarquee.css';

const DynamicMarquee = (props) => {
    return (
        <React.Fragment>
            <div id='marquee'>
                <Marquee rate={props.rate} startOnScreen={props.startOnScreen} >
                    <div className='marqueeInner'>{props.children}</div>
                </Marquee>
            </div>
        </React.Fragment>
    )
}

export default DynamicMarquee
