import React from 'react';
import {
    createBottomTabNavigator,
    BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';

// Screens
import { screens } from '../screens';
const { Home, Details, Auth } = screens;
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import darkTheme from '../theme/darkTheme';

const Tab = createBottomTabNavigator();

const tabBarOptions: BottomTabBarOptions = {
    style: {
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
    },
};

const TabsNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Contador',
                    tabBarIcon: ({ color, size }) => (
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
                    tabBarIcon: (options) => {
                        const { size, color } = options;

                        return (
                            <FontAwesome5
                                name={'leaf'}
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Login"
                component={Auth.Login}
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name={'user'} solid size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabsNavigation;
