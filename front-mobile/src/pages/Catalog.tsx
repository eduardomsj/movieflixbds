import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../styles';

const Catalog: React.FC = () => {

    return (
        <View style={theme.container}>
            <Text>Catálogo de Filmes (tela temporária)</Text>
        </View>
    )
}

export default Catalog;