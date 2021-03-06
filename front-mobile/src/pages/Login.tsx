import React, { useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { isAuthenticated, login } from '../services/auth';
import eyesOpened from '../assets/eyes-opened.png';
import eyesClosed from '../assets/eyes-closed.png';
import arrow from '../assets/arrow.png';
import { text, theme } from '../styles';

const Login: React.FC = () => {

    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    async function handleLogin() {       
        const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("Catalog");
    }

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Text style={text.titleLogin}>LOGIN</Text>
                <View style={theme.contenInput}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <View style={theme.inputPassword}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            style={theme.textInput}
                            value={userInfo.password}
                            secureTextEntry={hidePassword}
                            onChangeText={(e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setHidePassword(!hidePassword)}
                            style={theme.toggle}
                        >
                            <Image 
                                source={hidePassword ? eyesOpened : eyesClosed}
                                style={theme.eyes} 
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={theme.loginButton}
                        activeOpacity={0.8}
                        onPress={() => handleLogin()}
                    >
                        <Text style={text.titleButtonLogin}>Fazer Login</Text>
                        <View style={theme.arrowLogin}>
                            <Image source={arrow} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;