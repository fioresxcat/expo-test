import { StyleSheet } from "react-native";
import variables from "../../../BaseStyles/Variables";

module.exports = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.backGround,
        height: '100%',
        alignItems: 'center',
    },
    wrapperTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginTop: '50%',
        marginBottom: '5%'
    },
    accountWrapper: {
        flexDirection: 'row',
        width: '100%',
    },
    accountAvatar: {
        width: 90,
        height: 90,
        marginLeft: '5%'
    },
    accountName: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '13%'
    },
    moreOption: {
        marginTop: '9.6%',
        position: 'absolute',
        right: '6%',
        width: 15,
        height: 0,
        paddingLeft: 5
    },
    moreOptionModal: {
        backgroundColor: 'white',
        position: 'absolute',
        height: 85,
        top: '48%',
        width: '50%',
        right: 0,
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    removeAccountModal: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        height: 175,
        top: '38%',
        width: '90%',
        marginLeft: '5%',
        paddingLeft: 20,
        paddingTop: 20,
        zIndex: 999
    },
    modalTitle: {
        fontSize: 20,
        color: variables.black,
        marginBottom: 20
    },
    modalContent: {
        fontSize: 16,
        color: variables.gray,
        marginBottom: 20,
        marginRight: 20
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: '30%'
    },
    largeButton: {
        marginTop: '80%',
        backgroundColor: variables.lightBlue,
        width: '88%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})