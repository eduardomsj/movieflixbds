import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { isAuthenticated, doLogout } from "../services/auth";
import { nav, text } from "../styles";

const NavBar: React.FC = () => {
    
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Home");
    }

    useEffect(() => {
        logged();
    }, []);

  return (
    <>
      {
        authenticated ? (
            <TouchableOpacity 
                style={nav.logoutBtn} 
                onPress={() => logout()}>
                <Text style={text.logoutText}>Sair</Text>
            </TouchableOpacity>
        ) : null
      } 
    </>
  )
}

export default NavBar;