import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    title: {
        marginTop: 80,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: variables.black,
        marginBottom: 20
    },
    content: {
        fontSize: 14,
        marginLeft: 30,
        textAlign: 'center',
        lineHeight: 24,
        color: variables.gray,
        marginRight: 40
    },
    button: {
        width: '88%',
        height: 45,
        borderRadius: 5,
        backgroundColor: variables.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 50
    }
})