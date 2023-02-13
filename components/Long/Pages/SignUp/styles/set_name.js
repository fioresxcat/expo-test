import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%'
    },
    title: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: variables.black,
        textAlign: 'center'
    },
    content: {
        marginBottom: 40,
        marginTop: 10,
        fontSize: 14,
        color: variables.gray,
        textAlign: 'center'
    },
    inputWrapper: {
        width: '88%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
    },
    input: {
        height: 60,
        width: 175,
        borderWidth: 1,
        borderColor: variables.lightGray,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    inputError: {
        height: 60,
        width: 175,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    inputErrorFocus: {
        height: 60,
        width: 175,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: variables.black
    },
    inputFocus: {
        height: 60,
        width: 175,
        borderWidth: 2,
        borderColor: variables.blue,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        color: variables.black
    },
    error: {
        marginBottom: 40,
        marginTop: 10,
        fontSize: 14,
        color: 'red',
        textAlign: 'center'
    }
})