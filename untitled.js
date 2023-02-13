<View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 380, borderWidth: 0, borderColor: 'red'}}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderWidth: 0, width: '49.6%', paddingHorizontal: 0}}>
                        <Image source={pickedImages ? (pickedImages[0] ? {uri: pickedImages[0].uri} : require('../assets/fb1.png')) : require('../assets/fb1.png')} style={{ width: '100%', height: '49.5%', resizeMode: 'cover' }} />
                        <Image source={pickedImages ? (pickedImages[1] ? {uri: pickedImages[1].uri} : require('../assets/fb1.png')) : require('../assets/fb1.png')} style={{width: '100%', height: '49.5%', resizeMode: 'cover' }} />
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%', borderWidth: 0, width: '49.6%' }}>
                        <Image source={pickedImages ? (pickedImages[2] ? {uri: pickedImages[2].uri} : require('../assets/fb1.png')) : require('../assets/fb1.png')} style={{ width: '100%', height: '49.5%', resizeMode: 'cover'  }} />
                        <Image source={pickedImages ? (pickedImages[3] ? {uri: pickedImages[3].uri} : require('../assets/fb1.png')) : require('../assets/fb1.png')} style={{ width: '100%', height: '49.5%', resizeMode: 'cover' }} />
                    </View>
                </View>

const formData = new FormData();
for (let i = 0; i < images.length; i++) {
    formData.append('image', {
        uri: images[i].uri,
        type: 'image/jpeg',
        name: `image${i}.jpg`
    });
}