import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity, Image, View, Text, Modal } from 'react-native';
import { getMovies, getGenres } from '../services';
import { MovieCard } from '../components';
import arrowDown from '../assets/arrow-down.png';
import { theme, text } from '../styles';

const Catalog: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [showGenres, setShowGenres] = useState(false);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({
        id: Number,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        genre: null,
    }); 

    const [genres, setGenres] = useState([
        {
            id: null,
            name: null,
        }
    ]);

    async function fillMovies() {
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
    }

    async function loadGenres() {
        const res = await getGenres();        
        setGenres(res.data);
    };

    useEffect(() => {
        loadGenres();
    }, []);    

    useEffect(() => {
        fillMovies();
    }, []);  
    
    return (        
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            <Modal
                visible={showGenres}
                animationType="fade"
                transparent={true}
                presentationStyle="overFullScreen"
            >
                <View style={theme.containerModal}>
                    <View style={theme.contentModal}>
                        <ScrollView >
                            {
                                genres.map(
                                    gen => (
                                        <TouchableOpacity
                                            key={gen.id}
                                            onPress={() => {
                                                setMovie({ ...movie, genre: gen.name })
                                                setShowGenres(!showGenres);
                                            }}
                                            style={theme.itemModal}
                                        >
                                            <Text style={text.modalText}>{gen.name}</Text>
                                        </TouchableOpacity>
                                    )
                                )
                            }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <View style={theme.contentSelect}>
                <TouchableOpacity
                    onPress={() => setShowGenres(!showGenres)}
                    style={theme.cardSelect}
                >
                    <Text style={text.selectText}>
                        {
                            movie.genre === null 
                                ? "Escolha um Gênero" 
                                : movie.genre
                        }
                    </Text>
                    <Image style={theme.arrowDownCatalog} source={arrowDown} />
                </TouchableOpacity>
            </View> 
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (                
                movies.map((mov) => <MovieCard {...mov} key={mov.id} />)
            )}
        </ScrollView>        
    )
}

export default Catalog;