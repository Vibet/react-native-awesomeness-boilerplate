import colors from './colors';

const lightTheme = {
    ...colors,

    background: colors.ultraLightGrey,
    bottomTabs: colors.lightGrey,

    primary: colors.blue,
    danger: colors.red,
    warning: colors.yellow,
    success: colors.green,

    textPrimary: colors.darkGrey,
    textContrast: colors.darkGrey,

    card: colors.white(1),
    shadow: {
        elevation: 5,
        shadowColor: colors.darkGrey,
        shadowOpacity: 0.3,
    },

    // React Navigation Theme
    dark: false,
    colors: {
        primary: colors.blue,
        background: colors.lightGrey,
        card: colors.white(1),
        text: colors.darkGrey,
        border: 'transparent',
    },
};

export default lightTheme;
