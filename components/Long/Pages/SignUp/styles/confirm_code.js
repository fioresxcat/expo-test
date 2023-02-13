import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    header: {
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1,
        height: 60
    },
    headerTitle: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
        paddingLeft: '6%'
    },
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    content: {
        marginTop: 30,
        marginLeft: '6%',
        marginRight: '6%',
        fontSize: 16,
        lineHeight: 24,
        color: variables.gray,
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: variables.lightGray,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },
    next: {
        width: '88%',
        height: 45,
        borderRadius: 5,
        backgroundColor: variables.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 40
    },
    sendAgain: {
        width: '88%',
        height: 45,
        borderRadius: 5,
        backgroundColor: variables.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 40
    },
    codeModal: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 175,
        top: '38%',
        width: '60%',
        marginLeft: '20%',
        paddingTop: 20,
    },
    codeModalError: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 250,
        top: '32%',
        width: '90%',
        marginLeft: '5%',
        paddingTop: 20,
    },
    modalTitle: {
        fontSize: 20,
        color: variables.black,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 24,

    },
    modalTitleError: {
        fontSize: 20,
        color: variables.black,
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 24
    },
    modalContent: {
        fontSize: 32,
        color: variables.gray,
        marginBottom: 20,
        textAlign: 'center'
    },
    modalContentError: {
        fontSize: 32,
        color: variables.gray,
        marginBottom: 20,
        textAlign: 'center'
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5
    },
    closeButtonError: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})