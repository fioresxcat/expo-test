import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import variables from '../Long/BaseStyles/Variables'
import logOutIcon from '../Long/assets/data/logOutIcon'

const ListFriends = ({ name, url }) => {
    return (
        <View style={styles.menuItem}>
            <Image source={url} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}></Image>
                <Text style={{ marginTop: 24, fontWeight: 'bold', fontSize: 18}}>{name}</Text>
                <Icon color={variables.black} name='more-horizontal' size={25} style={styles.moreButton}></Icon>
        </View>
    )
}

const FriendsList = ({navigation}) => {
    return (
        <>
        <View style={{backgroundColor: 'white'}}>

            <View style={styles.header}>
                <Icon.Button color={variables.black} name='arrow-left' size={25} onPress={() => navigation.navigate('FriendsRequestList')} style={styles.prevButton}></Icon.Button>
                <Text style={styles.title}>Tất cả bạn bè</Text>
                <Icon color={variables.black} name='search' size={25} style={styles.searchButton}></Icon>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>53 bạn bè</Text>
                <Text style={{fontSize: 14, color: variables.blue, marginTop: 3}}>Sắp xếp</Text>
            </View>
            <View style={styles.menuItemWrapper}>
                        {logOutIcon.map((item) => {
                            return <ListFriends key={item.url} url={item.url} name={item.name}></ListFriends>
                        })}
                    </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
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
    searchButton: {
        backgroundColor: variables.backGround,
        marginLeft: '40%',
        marginTop: 20
    },
    moreButton: {
        backgroundColor: variables.backGround,
        position: 'absolute',
        right: 55,
        top: 45
    },
    menuItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 90,
        backgroundColor: 'white',
        marginRight: '2%',
        marginBottom: '2%',
        paddingTop: 20,
        marginLeft: 20
    },
})

export default FriendsList