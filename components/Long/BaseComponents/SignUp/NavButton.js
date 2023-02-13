import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import variables from '../../BaseStyles/Variables'

const NavButton = ({ navigation, title, handleSubmit }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => handleSubmit(navigation)}>
            <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default NavButton