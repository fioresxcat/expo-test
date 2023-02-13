import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    title: {
        marginTop: 50,
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
    contentError: {
        marginLeft: 30,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 24,
        color: 'red',
        marginRight: 40,
    },
    input: {
        width: '88%',
        borderBottomWidth: 2,
        borderBottomColor: variables.blue,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 50,
        color: variables.black
    },
    inputError: {
        width: '88%',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 50,
        color: variables.black
    },
    next: {
        width: '90%',
        height: 60,
        borderWidth: 2,
        borderColor: variables.blue,
        backgroundColor: variables.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 15
    }
})