import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    title: {
        marginTop: 10,
        marginLeft: '6%',
        lineHeight: 48,
        fontSize: 20,
        fontWeight: 'bold',
        color: variables.black,
        marginBottom: 10
    },
    modal: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 460,
        top: '20%',
        width: '84%',
        left: '8%'
    },
    modalTitle: {
        color: variables.black,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20
    },
    modalContent: {
        color: variables.gray,
        fontSize: 18,
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        marginBottom: 15
    },
    info: {
        width: '88%',
        marginLeft: '6%',
        marginTop: 10,
        backgroundColor: variables.lightGray,
        paddingTop: 12,
        paddingBottom: 10,
        height: 50
    },
    button: {
        width: '88%', 
        height: 50,
        borderWidth: 2,
        borderColor: variables.blue,
        backgroundColor: variables.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 35
    }
})