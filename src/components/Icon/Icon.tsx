
import iconsSprite from '../../assets/images/sprite.svg'

import React from 'react';


type iconProps = {
    iconsId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = (props:iconProps) => {
    return (
        <svg width={props.width || "120" } height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120" } fill="none" xmlns="http://www.w3.org/2000/svg">

            <use xlinkHref={`${iconsSprite}#${props.iconsId}`}/>

        </svg>

            );
            };

            export default Icon;











































