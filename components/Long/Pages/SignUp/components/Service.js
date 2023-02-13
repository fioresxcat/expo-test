import { StyleSheet, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Service = ({ navigation }) => {

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Icon.Button color='black' name='arrow-left' size={25} onPress={() => navigation.navigate('TermsPrivacy')} style={styles.prevButton}></Icon.Button>
                <Text style={styles.title}>Điều khoản dịch vụ</Text>
            </View>
            <Text style={styles.content}>
                Các Điều khoản này điều chỉnh việc bạn sử dụng Facebook mà chúng tôi cung cấp rừ khi chúng tôi nêu rõ là áp dụng các điều
                khoản riêng (và không áp dụng các điều khoản này).
            </Text>
            <Text style={styles.content}>
                Bạn không mất phí sử dụng Facebook thuộc phạm vi điều chỉnh của những Điều khoản này, trừ khi chúng tôi có quy định khác.
            </Text>
            <Text style={styles.content}>
                Chúng tôi không bán dữ liệu cá nhân của bạn cho các nhà quảng cáo, cũng không chia sẻ thông tin
                trực tiếp nhận dạng bạn (chẳng hạn như tên, địa chỉ email hoặc thông tin liên hệ khác) với những đơn vị này trừ khi được bạn
                cho phép cụ thể.
            </Text>
            <Text style={styles.content}>
                Chính sách quyền riêng tư của chúng tôi giải thích cách chúng tôi thu thập và sử dụng dữ liệu cá nhân của bạn để quyết định
                hiển thị cho bạn quảng cáo nào, cũng như để cung cấp tất cả các dịch vụ khác được mô tả bên dưới. Bạn cũng có thể chuyển đến
                trang cài đặt trên Sản phẩm có liên quan bất cứ lúc nào để xem lại các lựa chọn quyền riêng tư mình có đối với cách chúng tôi
                sử dụng dữ liệu của bạn.
            </Text>

            <Text style={styles.itemTitle}>1. Dịch vụ chúng tôi cung cấp</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Mang lại trải nghiệm dành riêng cho bạn</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Kết nối bạn với những người và tổ chức mà bạn quan tâm</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Tạo điều kiện cho bạn thể hiện bản thân và chia sẻ về những gì quan trọng với mình</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Hỗ trợ bạn khám phá nội dung, sản phẩm và dịch vụ mà bạn có thể quan tâm</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Đảm bảo quyền truy cập vào dịch vụ</Text>

            <Text style={styles.itemTitle}>2. Cam kết của bạn với Facebook và cộng đồng của chúng tôi</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Những đối tượng có thể sử dụng Facebook:</Text>
            <Text style={styles.subContent}>Loại trừ những người chưa đủ 13 tuổi, là tội phạm tình dục bị kết án, từng bị chúng tôi vô hiệu hóa tài khoản do vi phạm các Điều khoản, Tiêu chuẩn cộng đồng hoặc các điều khoản và chính sách khác mà chúng tôi áp dụng cho việc sử dụng Facebook</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Những điều bạn có thể chia sẻ và thực hiện trên Facebook</Text>
            <Text style={styles.subContent}>Bạn không được sử dụng Sản phẩm của chúng tôi để tạo hoặc chia sẻ bất cứ nội dung nào vi phạm các Điều khoản này, Tiêu chuẩn cộng đồng , bất hợp pháp, gây hiểu nhầm, phân biệt đối xử hoặc lừa đảo (hay hỗ trợ người khác dùng các Sản phẩm của chúng tôi theo cách như vậy) và xâm phạm hoặc vi phạm quyền của người khác, bao gồm cả quyền sở hữu trí tuệ (chẳng hạn như xâm phạm bản quyền hoặc nhãn hiệu hàng hóa của người khác hay phân phối/bán hàng giả hoặc hàng nhái), trừ trường hợp ngoại lệ hoặc có áp dụng giới hạn theo luật hiện hành.</Text>
            <Text style={styles.itemContent}><Text style={{ width: 10, height: 20 }}>{'\u2022' + " "}</Text>Những quyền bạn cấp cho chúng tôi</Text>
            <Text style={styles.subContent}>Quyền sử dụng nội dung bạn tạo và chia sẻ, quyền sử dụng tên, ảnh đại diện và thông tin về hành động của bạn ở quảng cáo và nội dung thương mại hoặc được tài trợ và quyền cập nhật phần mềm bạn sử dụng hoặc tải xuống</Text>
        </ScrollView>
    )
}

const styles = require('../styles/service')

export default Service