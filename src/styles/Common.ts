import {theme} from "./Theme";


type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,
}


export const font = ({family, weight, color, lineHeight,  Fmin, Fmax}: FontPropsType ) => `
font-tamily: ${family || 'Montserrat'};
font-weight: ${weight || 400};
color: ${color || theme.colors.textBg};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 414px)/(1150 - 414) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
