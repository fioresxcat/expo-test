import { StyleSheet } from "react-native";
import variables from "../Variables";

module.exports = StyleSheet.create({
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
    }
})