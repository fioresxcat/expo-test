import { ScrollView, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Feather';

const Data = ({navigation}) => {
    return (
        <ScrollView style={styles.wrapper}>
             <View style={styles.header}>
                <Icon.Button color='black' name='arrow-left' size={25} onPress={() => navigation.navigate('TermsPrivacy')} style={styles.prevButton}></Icon.Button>
                <Text style={styles.title}>Chính sách quyền riêng tư</Text>
            </View>
            <Text style={styles.itemTitle}>1. Chúng tôi thu thập thông tin gì?</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Hoạt động và thông tin mà bạn cung cấp</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Bạn bè, người theo dõi và các kết nối khác</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Thông tin ứng dụng, trình duyệt và thiết bị</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Thông tin từ các đối tác, nhà cung cấp và bên thứ ba</Text>
        
            <Text style={styles.itemTitle}>2. Chúng tôi sử dụng thông tin của bạn như thế nào?</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Để cung cấp, cá nhân hóa và cải thiện sản phẩm của chúng tôi</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Để thúc đẩy sự an toàn, bảo mật và tính toàn vẹn</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Để liên lạc với bạn</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Nghiên cứu và đổi mới vì lợi ích xã hội</Text>
        
            <Text style={styles.itemTitle}>3. Làm thế nào bạn có thể quản lý hoặc xóa thông tin của bạn và thực hiện các quyền của bạn?</Text>
            <Text style={styles.content}>Chúng tôi cung cấp cho bạn nhiều công cụ khác nhau để xem, quản lý, tải xuống và xóa thông tin của bạn. Bạn cũng có thể quản lý thông tin của mình bằng cách truy cập cài đặt của Sản phẩm bạn sử dụng. Bạn cũng có thể có các quyền riêng tư khác theo luật hiện hành.</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Thực hiện kiểm tra quyền riêng tư</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Xem và quản lý thông tin của bạn</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Chuyển, tải xuống hoặc xóa thông tin của bạn</Text>

        </ScrollView>
    )
}

const styles = require('../styles/data')

export default Data