import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme, text } from '../styles';

const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={theme.container}>
            <Text style={text.title}>HOME</Text>
        </View>
    )
}

export default Home;