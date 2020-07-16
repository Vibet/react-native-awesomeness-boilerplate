import 'react-native-gesture-handler';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themeStyles from './theme';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './config/store';
import { TabsNavigation } from './navigation';

declare const global: { HermesInternal: null | {} };

const App: React.FC = () => {
    const colorScheme = useColorScheme();
    let theme =
        colorScheme === 'dark' ? themeStyles.lightTheme : themeStyles.darkTheme;

    theme = Object.assign(DefaultTheme, theme);

    return (
        <Provider store={Store}>
            <ThemeProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    <TabsNavigation />
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
