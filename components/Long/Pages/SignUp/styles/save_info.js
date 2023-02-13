import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports =  StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: variables.black,
        marginTop: 20,
        marginBottom: 5
    },
    content: {
        color: variables.gray,
        fontSize: 16,
        textAlign: 'center'
    },
    buttonWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 50
    },
    buttonNo: {
        width: '50%',
        backgroundColor: variables.lightGray,
    },
    buttonYes: {
        width: '50%',
        backgroundColor: variables.blue,
    },
    buttonTitle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 12
    }
})