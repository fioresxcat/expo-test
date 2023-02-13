import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.backGround,
        borderBottomColor: variables.lightGray,
        borderBottomWidth: 1
    },
    prevButton: {
        backgroundColor: variables.backGround,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        color: variables.black,
        paddingTop: 18,
    },
    image: {
        width: '80%',
        height: '30%',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 50,
        marginBottom: 20
    },
    content: {
        width: '84%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 14,
        color: variables.gray,
        textAlign: 'center',
        marginBottom: 30
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
        marginTop: 15
    }
})