import { StyleSheet} from "react-native";
import variables from "../Variables";

module.exports = StyleSheet.create({
    modal: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 192,
        top: '38%',
        width: '84%',
        left: '8%',
    },
    modalTitle: {
        color: variables.black,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
    }
})