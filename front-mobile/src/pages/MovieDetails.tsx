import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';
import { getMoviesById, createReview } from '../services';
import star from '../assets/star.png';
import { theme, text } from '../styles';

interface MovieDetailsProps {
    route: Object;
    params: Object;
    id: Number;
    role?: string;  
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ 
    route: { 
        params: { id }, 
    },  
    role   
}) => {
    
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: " ",
        synopsis: null,
        reviews: [{ id: null, text: null, user: [{ id: null, name: ""}] }],
    });

    const [userReview, setUserReview] = useState({
        movieId: null,
        text: '',
    });

    function checkText() {
        if (!userReview.text.trim()) {
            alert('Favor inserir algum texto!');
            return;
        }
    }

    async function loadMovieData() {
        setLoading(true);
        const res = await getMoviesById(id);
        setMovie(res.data);        
        setLoading(false);
    } 
    
    async function handlerReview() { 
        setLoading(true);
        checkText();
        try {             
            const data = { movieId: movie.id, text: userReview.text };        
            await createReview(data);            
            Toast.showSuccess("Avaliação salva com sucesso!");
            setUserReview({ movieId: null, text: '' });
            loadMovieData();
        } catch {
            Toast.show("Não foi possível salvar");
        }
        setLoading(false);
    }

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <ScrollView>
                    {loading ? (
                        <ActivityIndicator size="large" /> 
                    ) : (
                        <View style={theme.detailsContentMovie}>
                            <Text style={text.detailsTitle}>{movie.title}</Text>
                            <Image source={{ uri: movie.imgUrl }} style={theme.detailsImage} />
                            <Text style={text.detailsYear}>{movie.year}</Text>
                            <Text style={text.detailsSubTitle}>{movie.subTitle}</Text>
                            <Text style={text.detailsSynopsisTitle}>Sinopse</Text>
                            <ScrollView style={theme.detailsSynopsis}>
                                <Text style={text.detailsSynopsisText}>
                                    {movie.synopsis}
                                </Text>
                            </ScrollView>
                        </View>
                    )}
                    {role != "ROLE_MEMBER" && ( 
                        <View style={theme.reviewContent}>
                            <TextInput
                                style={theme.reviewTextInput}
                                placeholder="Deixe sua avaliação aqui"
                                multiline={true}
                                value={userReview.text}
                                onChangeText={
                                    (e) => {
                                        const newUserReview = { ...userReview, text: e };                                        
                                        setUserReview(newUserReview);
                                    }
                                }
                            />                            
                            <TouchableOpacity style={theme.reviewBtn} onPress={handlerReview}>
                                <Text style={text.reviewBtnText}>SALVAR AVALIAÇÃO</Text>
                            </TouchableOpacity>
                        </View>
                    )} 
                    <ScrollView style={theme.detailsContentComment}>
                        <Text style={text.detailsTitleComment}>Avaliações</Text>
                        {
                            movie.reviews.map((review) => (
                                <TouchableOpacity key={review.id}>
                                    <View style={theme.detailsContentName} key={review.id}>
                                        <Image style={theme.detailsStar} source={star} />
                                        <Text style={text.detailsNameComment}>{review.user.name}</Text>
                                    </View>
                                    <View style={theme.detailsInputComment}>
                                        <Text style={text.detailsComment}>{review.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>                         
                </ScrollView>
            </View>
        </View>
    )
}

export default MovieDetails;