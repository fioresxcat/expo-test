import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '25%',
        marginBottom: '15%'
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: '10%',
        marginBottom: '10%'
    },
    input: {
        borderColor: 'gray',
        borderWidth: 2,
        width: '84%',
        color: variables.black,
        marginBottom: 20,
        height: 54,
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10
    },
    inputFocus: {
        borderColor: variables.blue,
        borderWidth: 2,
        width: '84%',
        color: variables.black,
        marginBottom: 20,
        height: 54,
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 10
    },
    signIn: {
        width: '88%', 
        height: 45,
        backgroundColor: variables.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    newAccount: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.green,
        marginTop: '12%',
        paddingLeft: 20,
        paddingRight: 20
    }
}) 