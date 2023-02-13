import { StyleSheet, ScrollView, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Feather';

const Cookie = ({ navigation }) => {
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Icon.Button color='black' name='arrow-left' size={25} onPress={() => navigation.navigate('TermsPrivacy')} style={styles.prevButton}></Icon.Button>
                <Text style={styles.title}>Chính sách cookie</Text>
            </View>
            <Text style={styles.itemTitle}>1. Cookie là gì và chính sách này bao gồm những gì?</Text>
            <Text style={styles.content}>Cookie là những đoạn văn bản nhỏ được sử dụng để lưu trữ thông tin trong trình duyệt web. Cookie được sử dụng để lưu trữ và nhận số nhận dạng và thông tin khác trên máy tính, điện thoại và các thiết bị khác. Các công nghệ khác, bao gồm dữ liệu mà chúng tôi lưu trữ trên trình duyệt web hoặc thiết bị của bạn, số nhận dạng được liên kết với thiết bị của bạn và phần mềm khác, được sử dụng cho các mục đích tương tự. Trong chính sách này, chúng tôi gọi tất cả các công nghệ này là "cookie".</Text>
        
            <Text style={styles.itemTitle}>2. Tại sao chúng tôi sử dụng cookie?</Text>
            <Text style={styles.content}>Cookie giúp chúng tôi cung cấp, bảo vệ và cải thiện Sản phẩm của Facebook, chẳng hạn như bằng cách cá nhân hóa nội dung, điều chỉnh và đo lường quảng cáo, đồng thời cung cấp trải nghiệm an toàn hơn. Các cookie mà chúng tôi sử dụng bao gồm cookie phiên, sẽ bị xóa khi bạn đóng trình duyệt và cookie liên tục, vẫn ở trong trình duyệt của bạn cho đến khi chúng hết hạn hoặc bạn xóa chúng. Mặc dù đôi khi, cookie mà chúng tôi sử dụng có thể thay đổi khi chúng tôi cải thiện và cập nhật Sản phẩm của Facebook, nhưng chúng tôi sử dụng chúng cho các mục đích sau:</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Xác thực</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Bảo mật, tính toàn vẹn của trang web và sản phẩm</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Các tính năng và dịch vụ của trang web</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Hiệu năng</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Phân tích và nghiên cứu</Text>
            <Text style={styles.itemContent}><Text style={{width: 10, height: 20}}>{'\u2022' + " "}</Text>Trang web và ứng dụng của bên thứ ba</Text>

            <Text style={styles.itemTitle}>3. Chúng tôi sử dụng cookie ở đâu</Text>
            <Text style={styles.content}>Chúng tôi có thể đặt cookie trên máy tính hoặc thiết bị của bạn và nhận thông tin được lưu trữ trong cookie khi bạn sử dụng hoặc truy cập</Text>
        </ScrollView>
    )
}

const styles = require('../styles/cookie')

export default Cookie