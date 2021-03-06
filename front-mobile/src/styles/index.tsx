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
        textAlign: "center",
        marginBottom: 40,
        color: colors.white,
    },
    subTitle: {
        marginTop: 40,
        fontWeight: "400",
        fontSize: 16,
        color: colors.whiteIce,
        textAlign: "center",
        marginLeft: 60,
        width: 243,
        paddingBottom: 20,
    },
    titleButtonHome: {
        textTransform: "uppercase",
        fontWeight: '700',
        fontSize: 20,
        color: colors.black,
        marginLeft: 60,
    },    
    titleLogin: {
        marginTop: 100,
        fontWeight: "normal",
        fontSize: 30,
        textAlign: "center",
        color: colors.white,
    },
    titleButtonLogin: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 20,
        color: colors.black,
        marginLeft: 100,
    },
    logoutText: {
        color: colors.black,
    },    
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 25,
        color: colors.white,
        marginTop: 20,
        marginLeft: 15,
    },
    cardYear: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19,
        color: colors.orange,
        marginTop: 5,
        marginLeft: 15,
    },
    cardSubTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        color: colors.grey,
        marginTop: 5,
        marginLeft: 15,
    },
    cardBtn: {
        textTransform: 'uppercase',
        color: colors.white,
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
    },
})

const theme = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    card: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: colors.darkGrey,
        paddingBottom: 100
    },
    draw: {
        width: 340,        
        height: 250,
        marginTop: 80,
        marginLeft: 40,
        alignItems: "center",
    },
    contentText: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    homeButton: {
        width: 300,
        height: 49,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.orange,
        borderRadius: 10,
        justifyContent: "space-between",
        marginLeft: 60,
        marginTop: 30,
    },
    arrowContent: {
        height: 51,
        width: 56,
        backgroundColor: colors.darkOrange,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },        
    loginCard: {
        width: deviceWidth,
        height: deviceWidth,
        backgroundColor: colors.darkGrey,
        justifyContent: "space-around",
        display: "flex",
    },
    loginButton: {
        width: 340,
        height: 50,
        marginTop: 80,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.orange,
        borderRadius: 10,
        justifyContent: "space-between",
        marginLeft: 35,
    },
    contenInput: {
        marginTop: 50,
    },
    textInput: {
        width: 340,
        height: 50,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 35,
        borderWidth: 1,
        paddingLeft: 20,
        borderColor: colors.ice,
    },
    inputPassword: {
        flexDirection: "row",
        marginTop: 32,
        alignContent: "center",
    },
    toggle: {
        width: 80,
        height: 30,
        justifyContent: "center",
        marginTop: 40,
        paddingRight: 20,
        marginLeft: -50,
    },
    eyes: {

    },
    arrowLogin: {
        height: 50,
        width: 50,
        backgroundColor: colors.darkOrange,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    scrollContainer: {
        paddingTop: 50,
        paddingBottom: 10,        
        backgroundColor: colors.darkGrey,
    }
})

const card = StyleSheet.create({
    movieCard: {
        width: 350,
        height: 410,
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 20,
    },
    movieImg: {
        width: 350,
        height: 228,
        marginTop: 20,
    },
    formBtn: {
        width: 320,
        height: 40,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: "center",
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
    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
})

export { colors, theme, text, card, nav };