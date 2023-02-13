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
        marginBottom: 10,
        textAlign: 'center'
    },
    content: {
        marginLeft: 30,
        fontSize: 14,
        lineHeight: 20,
        color: variables.gray,
        marginRight: 30,
        textAlign: 'center'
    },
    contentError: {
        marginLeft: 30,
        fontSize: 14,
        lineHeight: 20,
        color: 'red',
        marginRight: 30,
        textAlign: 'center'
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
    },
    result: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 2,
        borderColor: variables.gray,
        height: 70,
        marginTop: 50,
        marginBottom: 50,
        paddingLeft: 20, 
        paddingTop: 10
    },
    error: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 2,
        borderColor: 'red',
        height: 70,
        marginTop: 50,
        marginBottom: 50,
        paddingLeft: 20, 
        paddingTop: 10
    },
    age: {
        color: variables.gray,
        marginBottom: 5,
        fontSize: 14
    },
    ageError: {
        color: 'red',
        marginBottom: 5,
        fontSize: 14
    }
})