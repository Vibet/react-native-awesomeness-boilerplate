import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './config/store';

// Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';

declare const global: { HermesInternal: null | {} };

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Overview' }}
                    />

                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
