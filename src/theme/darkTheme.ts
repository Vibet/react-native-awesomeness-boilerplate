import colors from './colors';

const darkTheme = {
    ...colors,

    background: colors.black,
    bottomTabs: colors.darkGrey,

    primary: colors.lightYellow,
    danger: colors.red,
    warning: colors.yellow,
    success: colors.green,

    textPrimary: colors.white(0.9),
    textContrast: colors.darkGrey,

    card: colors.white(0.1),
    shadow: {
        elevation: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0,
    },

    // React Navigation Theme
    dark: false,
    colors: {
        primary: colors.lightYellow,
        background: colors.darkGrey,
        card: colors.darkGrey,
        text: colors.white(0.9),
        border: 'transparent',
    },
};

export default darkTheme;
