import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = {
    darkGrey: "#525252",
    orange: "#FFC700",
    white: "#FEFEFE",
    black: "#000",
    darkOrange: 'rgba(38,50,56,0.5)',
    grey: "#BFBFBF",
    lightGrey: "#6C6C6C",
    veryLightGrey: "#CDCDCD",
    ice: "#E1E1E1",
    whiteIce: "#F2F2F2",
    gray: "#9E9E9E",
}

const text = StyleSheet.create({
    title: {
        fontWeight: "700",
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 40,
        color: colors.black,
    },
})

const theme = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})

const nav = StyleSheet.create({
    textTitle: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.black,
        lineHeight: 25,
        marginLeft: 50,
    },
})

export { colors, theme, text, nav };