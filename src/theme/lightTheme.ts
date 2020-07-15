import colors from './colors';

const lightTheme = {
    ...colors,

    background: colors.ultraLightGrey,

    primary: colors.blue,
    danger: colors.red,
    warning: colors.yellow,
    success: colors.green,

    textPrimary: colors.darkGrey,
    textContrast: colors.darkGrey,

    card: colors.white(1),
};

export default lightTheme;
