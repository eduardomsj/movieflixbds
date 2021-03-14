import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, card } from '../styles';

interface MovieCardProps{
    id: Number;
    title: String;
    subTitle: String;
    year: Number;
    imgUrl: string;    
}

const MovieCard: React.FC<MovieCardProps> = ({id, title, subTitle, year, imgUrl}) => {

    const navigation = useNavigation();

    return (
        <View style={card.movieCard}>
            <Image source={{uri: imgUrl}} style={card.movieImg} />
            <Text style={text.cardTitle}>{title}</Text>
            <Text style={text.cardYear}>{year}</Text>
            <Text style={text.cardSubTitle}>{subTitle}</Text>
            <TouchableOpacity
                style={card.formBtn}
                activeOpacity={0.8}
                onPress={() => { navigation.navigate("MovieDetails", { id }) }}
            >
                <Text style={text.cardBtn}>VER DETALHES</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MovieCard;