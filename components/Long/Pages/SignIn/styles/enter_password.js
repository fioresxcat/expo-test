import { StyleSheet } from "react-native";
import variables from '../../../BaseStyles/Variables'

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    accountWrapper: {
        marginLeft: '50%',
        transform: [{
            translateX: -60
        }],
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
        paddingLeft: 10,
        marginTop: 30,
        marginLeft: '8%'
    },
    signIn: {
        width: '84%', 
        height: 45,
        backgroundColor: variables.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 45,
        marginLeft: '8%'
    },
})
