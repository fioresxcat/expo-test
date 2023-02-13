import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
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
    content: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        color: variables.black,
        fontSize: 20
    },
    itemTitle: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: variables.blue
    },
    itemContent: {
        marginLeft: 20,
        marginRight: 20,
        color: variables.green,
        fontSize: 20,
        fontWeight: 'bold'
    }
})