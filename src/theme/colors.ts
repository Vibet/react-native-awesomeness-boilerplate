import { darken, lighten } from 'polished';

const colors = {
    black: '#262833',
    ultraLightGrey: '#f5f5f5',
    lightGrey: darken(0.2, '#f5f5f5'),
    grey: darken(0.4, '#f5f5f5'),
    darkGrey: lighten(0.2, '#262833'),

    lightRed: lighten(0.2, '#FF3333'),
    red: '#FF3333',
    darkRed: darken(0.2, '#FF3333'),

    lightYellow: lighten(0.2, '#FFC400'),
    yellow: '#FFC400',
    darkYellow: darken(0.2, '#FFC400'),

    lightGreen: lighten(0.2, '#74D143'),
    green: '#74D143',
    darkGreen: darken(0.2, '#74D143'),

    lightBlue: lighten(0.2, '#00C4FF'),
    blue: '#00C4FF',
    darkBlue: darken(0.2, '#00C4FF'),

    white: (alpha: number) => `rgba(255,255,255, ${alpha})`,
};

export default colors;
