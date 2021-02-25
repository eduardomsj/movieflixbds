import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Home } from '../pages';
import { colors, nav } from '../styles';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.textTitle}>MovieFlix</Text>

const Routes: React.FC = () => {
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.orange,
                }, 
                headerLeft: () => <HeaderText />               
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Routes;