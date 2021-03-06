import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme, text } from '../styles';
import image from '../assets/image_home.png';
import arrow from '../assets/arrow.png';

const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Image style={theme.draw} source={image} />
                <View style={theme.contentText}>
                    <Text style={text.title}>Avalie filmes</Text>
                    <Text style={text.subTitle}>Diga o que você achou do seu filme favorito</Text>
                </View>
                <TouchableOpacity                
                    style={theme.homeButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={text.titleButtonHome}>FAZER LOGIN</Text>
                    <View style={theme.arrowContent}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;