import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Home, Login, Catalog, MovieDetails } from '../pages';
import { BackButton, NavBar } from '../components';
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
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />,             
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    )
}

export default Routes;