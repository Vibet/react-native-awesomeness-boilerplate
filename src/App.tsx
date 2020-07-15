import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Store } from './config/store';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Screens
import { screens } from './screens';
const { Home, Details } = screens;

declare const global: { HermesInternal: null | {} };

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Contador',
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5
                            name={'stopwatch'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Details"
                component={Details}
                options={{
                    title: 'Trocar Tema',
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome5 name={'leaf'} size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
