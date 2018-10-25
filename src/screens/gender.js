import React, { PureComponent } from 'react';

import {
   View,
   StyleSheet,
   Text
} from 'react-native';

import { Button } from 'react-native-material-kit/lib/mdl';
import RadioForm from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';

const matA = [
   { type: 'Thấp', describe: 'Những người có điểm thấp ở mặt này tương đối ít quan tâm đến người khác. Họ thường có thể vô tâm hoặc không suy nghĩ trong tương tác của họ. Họ có xu hướng xem những người khác và ý tưởng từ quan điểm phê bình. Thái độ của họ thường có khuynh hướng cứng rắn trong hầu hết các tình huống. Họ có khả năng cạnh tranh và có thể khá thể hiện cảm xúc thù địch một cách trực tiếp. Mọi người có thể mô tả họ như là một người cứng đầu hoặc ích kỷ. Mặc dù những người này thường không được yêu thích bởi những người khác, họ thường được tôn trọng vì sự độc lập của họ. Sự dẻo dai về mặt cảm xúc và khả năng cạnh tranh của họ có thể là cơ sở trong nhiều vai trò xã hội và kinh doanh.' },
   { type: 'Trung Bình', describe: 'Người có điểm trung bình có thể thông cảm nhưng cũng có thể hợp tác. Họ tin tưởng nhưng không cả tin, và đã sẵn sàng cạnh tranh cũng như hợp tác với những người khác.' },
   { type: 'Cao', describe: 'Người dễ đồng ý về cơ bản là vị tha. Đó là thông cảm cho những người khác và sẵn sàng  giúp đỡ họ, và tin rằng những người khác sẽ được những người khác đối xử công bằng lại với mình khi cần thiết.' },
]

const matC = [
   { type: 'Thấp', describe: 'Người có điểm mặt C thấp không nhất thiết là người thiếu nguyên tắc đạo đức, nhưng họ không có nhiều đòi hỏi trong việc áp dụng chúng, cũng như họ không có nhiều động lực trong việc hướng tới mục tiêu của mình. Có một số bằng chứng cho thấy họ thích hưởng thụ và quan tâm đến tình dục.' },
   { type: 'Trung Bình', describe: 'Người có điểm số trung bình ở mặt C có thể chuyển công việc sang một bên để theo đuổi việc giải trí vui chơi. Họ tổ chức khá tốt và khá đáng tin cậy, có mức độ tự giác kỷ luật ở mức trung bình.' },
   { type: 'Cao', describe: 'Người có điểm số cao C là những người tỉ mỉ, đúng giờ, và đáng tin cậy. Họ có một nhu cầu tương đối cao đối với việc đạt thành tích. Họ tổ chức tốt và đáng tin cậy và thực hiện các cam kết họ đã làm. Họ có ý thức tự giác, có trách nhiệm một cách nghiêm túc. Họ là người cẩn thận, đáng tin cậy, chăm chỉ, và kiên trì. Về mặt tích cực, điểm mặt C cao có liên quan đến thành tích học tập và nghề nghiệp, về mặt tiêu cực, nó có thể dẫn đến sự kén chọn, kỹ tính, sự ra tay ép buộc, hoặc hành vi tham công tiếc việc.' },
]

const matO = [
   { type: 'Thấp', describe: 'Người có điểm thấp ở mặt O có xu hướng giữ nguyên hành vi ứng xử và bảo thủ trong quan điểm. Họ thích những gì quen thuộc hơn là những thứ mới mẻ, và không thích những trải nghiệm về mặt cảm xúc.' },
   { type: 'Trung Bình', describe: 'Những người có điểm số mặt O ở mức trung bình thường khá tò mò về cả những điều bên trong họ và những gì bên ngoài thế giới, và họ có khá nhiều trải nghiệm phong phú. Họ tương đối sẵn sang đón nhận những ý tưởng mới và giá trị độc đáo. Họ tương đối nhạy cảm với cảm xúc của bản thân và của người khác.' },
   { type: 'Cao', describe: 'Những người cởi mở ham học hỏi mạnh mẽ (có điểm số mặt O cao) thường tò mò về cả những điều bên trong họ và những gì bên ngoài thế giới, và họ có nhiều trải nghiệm phong phú hơn những người khác. Họ sẵn sang đón nhận những ý tưởng mới và giá trị độc đáo, và họ trải nghiệm cả những cảm xúc tích cực và tiêu cực nhiều hơn những người ít cởi mở hơn. Họ rất nhạy cảm với cảm xúc của riêng mình và có một khả năng lớn hơn mức trung bình để nhận ra những cảm xúc của người khác. Họ đánh giá cao về cái đẹp trong nghệ thuật và tự nhiên. Họ sẵn sàng xem xét những ý tưởng mới và các giá trị và có thể hơi độc đáo theo quan điểm của họ. Những người như vậy là người tưởng tượng, táo bạo, độc lập và sáng tạo.' },
]

const matN = [
   { type: 'Thấp', describe: 'Người có điểm của mặt Nhiễu tâm thấp thì cảm xúc của họ tương đối ổn định. Họ thường bình tĩnh, điềm đạm, và thoải mái, và họ có thể phải đối mặt với tình huống căng thẳng mà không trở lên khó chịu hoặc lo lắng.' },
   { type: 'Trung Bình', describe: 'Người có điểm mặt nhiễu tâm ở mức trung bình cho thấy sự ổn định cảm xúc của họ. Họ trải qua một số lượng bình thường của cảm xúc đau khổ và có một sự cân bằng giữa sự hài lòng và sự không hài lòng với cuộc sống. Họ không cao hoặc thấp trong sự tự đánh giá về bản thân. Khả năng đối phó với stress của họ tốt như người bình thường.' },
   { type: 'Cao', describe: 'Có thể do nhiều những cảm xúc tiêu cực, người có điểm N cao cũng dễ có những mẫu nhận thức khộng phù hợp, ít có khả năng để kiểm soát sự xung động của họ, và ứng phó với stress kém hơn những người khác. Người có điểm cao ở mặt C ủ rũ, quá nhạy cảm, và không hài lòng với khía cạnh cuộc sống của họ. Nói chung họ có lòng tự tin thấp, và có thể có những ý tưởng và kỳ vọng không thực tế. Họ được lo lắng, thường là người cảm thấy không an toàn về bản thân và kế hoạch của họ. Bạn bè và người quen của họ có thể mô tả đặc điểm chúng như thần kinh, tự ý thức, căng thẳng và dễ bị tổn thương so với người bình thường. (Điều quan trọng là Nhiễu tâm là một chiều kích của tính cách thông thường, và các điểm nhạy cảm thần kinh cao không bao hàm việc người đó bị bất kỳ rối loạn tâm lý nào).' },
]

const matE = [
   { type: 'Thấp', describe: 'Người có điểm hướng ngoại thấp có xu hướng hướng nội, hướng nội không phải không thân thiện, họ độc lập chứ không phải là chậm chạp. Người hướng nội trông có thể nhút nhát nhưng không có nghĩa là họ thích ở một mình: họ không nhất thiết bị ám sợ xã hội. Mặc dù họ không có tính cởi mở của sự hướng ngoại, nhưng hướng nội không có nghĩa là không hài lòng hoặc bi quan. Tò mò là một trong những đặc điểm của người hướng nội, họ thường thích tìm tòi nghiên cứu. Họ thích làm hầu hết mọi thứ một mình hoặc với nhóm nhỏ. Họ tránh các bên lớn và lớn, và không thích gặp gỡ những người mới. Họ thường yên lặng và không tự tin trong tương tác nhóm. Họ hiếm khi trải nghiệm cảm xúc tích cực mạnh mẽ như niềm vui hay sự phấn khích. Thực tế thấy rằng những người sống nội tâm không nhất thiết có nghĩa là họ thiếu kỹ năng xã hội-hướng nội nhiều chức năng rất tốt trong các tình huống xã hội, mặc dù họ có thể thích để tránh chúng.' },
   { type: 'Trung Bình', describe: 'Những người có tính hướng ngoại ở mức trung bình thường tương đối thích sự phấn khích và những kích thích, và có xu hướng khá hướng đến sự vui vẻ trong những hoàn cảnh khác nhau. Họ tương đối lạc quan và có khá nhiều năng lượng.' },
   { type: 'Cao', describe: 'Sự hướng ngoại là hòa đồng, nhưng hướng ngoại chỉ là một trong những đặc điểm của đời sống xã hội, ngoài ra còn có những mối quan hệ và các nhóm xã hội khác. Sự hướng ngoại thể hiện ở tính quyết đoán, năng động, và hoạt ngôn. Những người có tính hướng ngoại cao thường thích sự phấn khích và những kích thích, và có xu hướng hướng đến sự vui vẻ trong những hoàn cảnh khác nhau. Họ lạc quan, tràn đầy năng lượng. Nhân viên bán hàng thường là những người có tính hướng ngoại rất cao, điểm cao ở mặt E và các thang đo trong mặt E liên quan chặt chẽ với tới nghề làm kinh doanh, doanh nghiệp.' },
]

const result = [
   { nameType: 'De chap nhan(A)', level: '', describe: '' },
   { nameType: 'Tan tam(C)', level: '', describe: '' },
   { nameType: 'Coi mo(O)', level: '', describe: '' },
   { nameType: 'Nhieu tam(N)', level: '', describe: '' },
   { nameType: 'Huong ngoai(E)', level: '', describe: '' },
]

const gender = [
   { label: 'Nam', value: 0 },
   { label: 'Nữ', value: 1 }
]

export default class Result extends PureComponent {

   constructor(props) {
      super(props)

      this.state = {
         desA: {},
         desC: {},
         desO: {},
         desN: {},
         desE: {},
         gender: 0
      }
   }

   getResultFemale = () => {
      const { questions, scoreA, scoreN, scoreE, scoreC, scoreO } = this.props
      let desA = {}, desC = {},
         desO = {},
         desN = {},
         desE = {}
      if (scoreA < 19.1) {
         desA = {
            typeA: matA[0].type,
            describeA: matA[0].describe
         }
      } else if (scoreA > 35.4) {
         desA = {
            typeA: matA[2].type,
            describeA: matA[2].describe
         }
      } else {
         desA = {
            typeA: matA[1].type,
            describeA: matA[1].describe
         }
      }

      if (scoreN < 22.6) {
         desN = {
            typeN: matN[0].type,
            describeN: matN[0].describe
         }
      } else if (scoreN > 38.2) {
         desN = {
            typeN: matN[2].type,
            describeN: matN[2].describe
         }
      } else {
         desN = {
            typeN: matN[1].type,
            describeN: matN[1].describe
         }
      }

      if (scoreE < 25.7) {
         desE = {
            typeE: matE[0].type,
            describeE: matE[0].describe
         }
      } else if (scoreE > 39.8) {
         desE = {
            typeE: matE[2].type,
            describeE: matE[2].describe
         }
      } else {
         desE = {
            typeE: matE[1].type,
            describeE: matE[1].describe
         }
      }

      if (scoreC < 22.4) {
         desC = {
            typeC: matC[0].type,
            describeC: matC[0].describe
         }
      } else if (scoreC > 32.5) {
         desC = {
            typeC: matC[2].type,
            describeC: matC[2].describe
         }
      } else {
         desC = {
            typeC: matC[1].type,
            describeC: matC[1].describe
         }
      }

      if (scoreO < 22.4) {
         desO = {
            typeO: matO[0].type,
            describeO: matO[0].describe
         }
      } else if (scoreO > 33.8) {
         desO = {
            typeO: matO[2].type,
            describeO: matO[2].describe
         }
      } else {
         desO = {
            typeO: matO[1].type,
            describeO: matO[1].describe
         }
      }

      if ( Object.keys(desA).length != 0 && Object.keys(desN).length != 0 && Object.keys(desO).length != 0 && Object.keys(desE).length != 0 && Object.keys(desC).length != 0) {
         Actions.result({
            desA: desA,
            desN: desN,
            desO: desO,
            desE: desE,
            desC: desC
         })
      }
   }

   getResultMale = () => {
      // console.log('this.score)', this.)
      const { questions, scoreA, scoreN, scoreE, scoreC, scoreO } = this.props
      let desA = {}, desC = {},
         desO = {},
         desN = {},
         desE = {}
      if (scoreA < 18.1) {
         desA = {
            typeA: matA[0].type,
            describeA: matA[0].describe
         }
      } else if (scoreA > 35.4) {
         desA = {
            typeA: matA[2].type,
            describeA: matA[2].describe
         }
      } else {
         desA = {
            typeA: matA[1].type,
            describeA: matA[1].describe
         }
      }

      if (scoreN < 19.8) {
         desN = {
            typeN: matN[0].type,
            describeN: matN[0].describe
         }
      } else if (scoreN > 34.8) {
         desN = {
            typeN: matN[2].type,
            describeN: matN[2].describe
         }
      } else {
         desN = {
            typeN: matN[1].type,
            describeN: matN[1].describe
         }
      }

      if (scoreE < 23.5) {
         desE = {
            typeE: matE[0].type,
            describeE: matE[0].describe
         }
      } else if (scoreE > 37.8) {
         desE = {
            typeE: matE[2].type,
            describeE: matE[2].describe
         }
      } else {
         desE = {
            typeE: matE[1].type,
            describeE: matE[1].describe
         }
      }

      if (scoreC < 20.3) {
         desC = {
            typeC: matC[0].type,
            describeC: matC[0].describe
         }
      } else if (scoreC > 33.7) {
         desC = {
            typeC: matC[2].type,
            describeC: matC[2].describe
         }
      } else {
         desC = {
            typeC: matC[1].type,
            describeC: matC[1].describe
         }
      }

      if (scoreO < 23.5) {
         desO = {
            typeO: matO[0].type,
            describeO: matO[0].describe
         }
      } else if (scoreO > 33.7) {
         desO = {
            typeO: matO[2].type,
            describeO: matO[2].describe
         }
      } else {
         desO = {
            typeO: matO[1].type,
            describeO: matO[1].describe
         }
      }

      if ( Object.keys(desA).length != 0 && Object.keys(desN).length != 0 && Object.keys(desO).length != 0 && Object.keys(desE).length != 0 && Object.keys(desC).length != 0) {
         Actions.result({
            desA: desA,
            desN: desN,
            desO: desO,
            desE: desE,
            desC: desC
         })
      }
   }

   chooseGender = (value) => {
      this.setState({
         gender: value
      })
   }

   render() {
      console.log('score', this.props)
      return (
         <View style={styles.container}>
            <RadioForm
               radio_props={gender}
               initial={0}
               onPress={this.chooseGender}
            />
            <Button
               style={styles.btn}
               onPress={this.state.gender == 0 ? this.getResultMale : this.getResultFemale}
            >
               <Text>Result</Text>
            </Button>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 50
   },
   btn: {
      width: 100,
      height: 50,
      backgroundColor: 'green',
      borderRadius: 23,
      marginTop: 100,
      alignItems: 'center',
      justifyContent: 'center'
   }
})

