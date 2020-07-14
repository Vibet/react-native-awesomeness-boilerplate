import { darken, lighten } from 'polished';

const colors = {
    black: '#262833',

    lightRed: lighten(0.2, '#FF3333'),
    red: '#FF3333',
    darkRed: darken(0.2, '#FF3333'),

    lightYellow: '',
    yellow: '#FFC400',
    darkYellow: '',

    lightGreen: '',
    green: '#74D143',
    darkGreen: '',

    lightBlue: '',
    blue: '',
    darkBlue: '',

    white: (alpha: number) => `rgba(255,255,255, ${alpha})`,

    ultraLightGrey: '',
    lightGrey: '',
    grey: '',
    darkGrey: '',
};

export default colors;
