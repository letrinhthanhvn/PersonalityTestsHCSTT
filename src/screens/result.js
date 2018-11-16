import React, { PureComponent } from 'react';
import {
   StyleSheet, View, Text,
   ScrollView,
   RefreshControl,
   ActivityIndicator,
   Dimensions,
   StatusBar,
   Alert,
   AsyncStorage
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Button } from 'react-native-material-kit/lib/mdl';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');

class Result extends PureComponent {

   constructor(props) {
      super(props)

      this.state = {
         loadding: true,
         desA: {
            typeA: null,
            describeA: null,
            jobA: null
         },
         desO: {
            typeO: null,
            describeO: null,
            jobO: null
         },
         desE: {
            typeE: null,
            describeE: null,
            jobE: null
         },
         desN: {
            typeN: null,
            describeN: null,
            jobN: null
         },
         desC: {
            typeC: null,
            describeC: null,
            jobC: null
         },
      }
   }

   componentDidMount() {
      setTimeout(() => this.setState({
         loadding: false
      }), 1200)
      if (this.props.gender == "Nam") {
         this.getResultMale()
      } else {
         this.getResultFemale()
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
            describeA: matA[0].describe,
            jobA: null
         }
      } else if (scoreA > 35.4) {
         desA = {
            typeA: matA[2].type,
            describeA: matA[2].describe,
            jobA: matA[2].job
         }
      } else {
         desA = {
            typeA: matA[1].type,
            describeA: matA[1].describe,
            jobA: null
         }
      }

      if (scoreN < 22.6) {
         desN = {
            typeN: matN[0].type,
            describeN: matN[0].describe,
            jobN: matN[0].job
         }
      } else if (scoreN > 38.2) {
         desN = {
            typeN: matN[2].type,
            describeN: matN[2].describe,
            jobN: matN[2].job
         }
      } else {
         desN = {
            typeN: matN[1].type,
            describeN: matN[1].describe,
            jobN: null
         }
      }

      if (scoreE < 25.7) {
         desE = {
            typeE: matE[0].type,
            describeE: matE[0].describe,
            jobE: null
         }
      } else if (scoreE > 39.8) {
         desE = {
            typeE: matE[2].type,
            describeE: matE[2].describe,
            jobE: matE[2].job
         }
      } else {
         desE = {
            typeE: matE[1].type,
            describeE: matE[1].describe,
            jobE: null
         }
      }

      if (scoreC < 22.4) {
         desC = {
            typeC: matC[0].type,
            describeC: matC[0].describe,
            jobC: null
         }
      } else if (scoreC > 32.5) {
         desC = {
            typeC: matC[2].type,
            describeC: matC[2].describe,
            jobC: matC[2].job
         }
      } else {
         desC = {
            typeC: matC[1].type,
            describeC: matC[1].describe,
            jobC: null
         }
      }

      if (scoreO < 22.4) {
         desO = {
            typeO: matO[0].type,
            describeO: matO[0].describe,
            jobO: matO[0].job,
         }
      } else if (scoreO > 33.8) {
         desO = {
            typeO: matO[2].type,
            describeO: matO[2].describe,
            jobO: matO[2].job,
         }
      } else {
         desO = {
            typeO: matO[1].type,
            describeO: matO[1].describe,
            jobO: null
         }
      }

      if (Object.keys(desA).length != 0 && Object.keys(desN).length != 0 && Object.keys(desO).length != 0 && Object.keys(desE).length != 0 && Object.keys(desC).length != 0) {
         this.setState({
            desA: desA,
            desC: desC,
            desE: desE,
            desO: desO,
            desN: desN
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
            describeA: matA[0].describe,
            jobA: null
         }
      } else if (scoreA > 35.4) {
         desA = {
            typeA: matA[2].type,
            describeA: matA[2].describe,
            jobA: matA[2].job
         }
      } else {
         desA = {
            typeA: matA[1].type,
            describeA: matA[1].describe,
            jobA: null
         }
      }

      if (scoreN < 19.8) {
         desN = {
            typeN: matN[0].type,
            describeN: matN[0].describe,
            jobN: matN[0].job
         }
      } else if (scoreN > 34.8) {
         desN = {
            typeN: matN[2].type,
            describeN: matN[2].describe,
            jobN: matN[2].job
         }
      } else {
         desN = {
            typeN: matN[1].type,
            describeN: matN[1].describe,
            jobN: null
         }
      }

      if (scoreE < 23.5) {
         desE = {
            typeE: matE[0].type,
            describeE: matE[0].describe,
            jobE: null
         }
      } else if (scoreE > 37.8) {
         desE = {
            typeE: matE[2].type,
            describeE: matE[2].describe,
            jobE: matE[2].job
         }
      } else {
         desE = {
            typeE: matE[1].type,
            describeE: matE[1].describe,
            jobE: null
         }
      }

      if (scoreC < 20.3) {
         desC = {
            typeC: matC[0].type,
            describeC: matC[0].describe,
            jobC: null
         }
      } else if (scoreC > 33.7) {
         desC = {
            typeC: matC[2].type,
            describeC: matC[2].describe,
            jobC: matC[2].job
         }
      } else {
         desC = {
            typeC: matC[1].type,
            describeC: matC[1].describe,
            jobC: null
         }
      }

      if (scoreO < 23.5) {
         desO = {
            typeO: matO[0].type,
            describeO: matO[0].describe,
            jobO: matO[0].job,
         }
      } else if (scoreO > 33.7) {
         desO = {
            typeO: matO[2].type,
            describeO: matO[2].describe,
            jobO: matO[2].job,
         }
      } else {
         desO = {
            typeO: matO[1].type,
            describeO: matO[1].describe,
            jobO: null
         }
      }

      if (Object.keys(desA).length != 0 && Object.keys(desN).length != 0 && Object.keys(desO).length != 0 && Object.keys(desE).length != 0 && Object.keys(desC).length != 0) {
         this.setState({
            desA: desA,
            desC: desC,
            desE: desE,
            desO: desO,
            desN: desN
         })
      }
   }

   render() {
      console.log('propsdesdes::::', this.state)
      const { desA, desN, desO, desE, desC } = this.state
      return (
         <View style={styles.container}>
            {
               this.state.loadding ?
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                     <StatusBar barStyle='light-content' />
                     <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                     <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Result</Text>
                     </View>
                     <ActivityIndicator size="large" color='#327032' style={{ flex: 1 }} />
                  </View>
                  :
                  <View style={{ flex: 1 }}>
                     <StatusBar barStyle='light-content' />
                     <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                     <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Result</Text>
                     </View>
                     <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
                        <View style={{ marginTop: 15 }}>
                           <Text style={styles.headerText}>NHIỄU TÂM</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text>{ desN.typeN }</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desN.describeN}</Text>
                           {
                              // this.props.desN.jobN ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desN.jobN}</Text> : null
                           }
                        </View>

                        <View style={{ marginTop: 15 }}>
                           <Text style={styles.headerText}>HƯỚNG NGOẠI</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desE.typeE}</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desE.describeE}</Text>
                           {
                              // this.props.desE.jobE ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desE.jobE}</Text> : null
                           }
                        </View>
                        <View style={{ marginTop: 15 }}>
                           <Text style={styles.headerText}>CỞI MỞ, HAM HỌC HỎI</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desO.typeO}</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desO.describeO}</Text>
                           {
                              // this.props.desO.jobO ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desO.jobO}</Text> : null
                           }
                        </View>
                        <View style={{ marginTop: 15 }}>
                           <Text style={styles.headerText}>DỄ CHẤP NHẬN</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desA.typeA}</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desA.describeA}</Text>
                           {
                              // this.props.desA.jobA ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desA.jobA}</Text> : null
                           }
                        </View>
                        <View style={{ marginTop: 15 }}>
                           <Text style={styles.headerText}>TẬN TÂM</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desC.typeC}</Text>
                           <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desC.describeC}</Text>
                           {
                              // this.props.desC.jobC ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desC.jobC}</Text> : null
                           }
                        </View>
                        <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: "space-around", flexDirection: 'row' }}>
                           <Button style={{ width: 100, height: 50, alignItems: 'center', justifyContent: "center", backgroundColor: '#327032', borderRadius: 23 }}
                              onPress={this.tryAgain}
                           >
                              <Text style={{ color: 'white' }}>Try again</Text>
                           </Button>
                           <Button style={{ width: 100, height: 50, alignItems: 'center', justifyContent: "center", backgroundColor: '#327032', borderRadius: 23 }}
                              onPress={this.logout}
                           >
                              <Text style={{ color: 'white' }}>Log Out</Text>
                           </Button>
                        </View>
                     </ScrollView>
                  </View>
            }
         </View>
      );
   }

   tryAgain = () => {
      Alert.alert(
         'Notice!',
         'Do you want try it again?',
         [
            { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'YES', onPress: () => Actions.reset('screen1') },
         ],
         { cancelable: false }
      )
   }

   logout = async () => {
      try {
         await AsyncStorage.removeItem('username');
         Alert.alert('Logout Success!');
         Actions.login();
      } catch (error) {
         console.log('AsyncStorage error: ' + error.message);
      }
   }
}

const matA = [
   { type: 'Thấp', describe: 'Những người có điểm thấp ở mặt này tương đối ít quan tâm đến người khác. Họ thường có thể vô tâm hoặc không suy nghĩ trong tương tác của họ. Họ có xu hướng xem những người khác và ý tưởng từ quan điểm phê bình. Thái độ của họ thường có khuynh hướng cứng rắn trong hầu hết các tình huống. Họ có khả năng cạnh tranh và có thể khá thể hiện cảm xúc thù địch một cách trực tiếp. Mọi người có thể mô tả họ như là một người cứng đầu hoặc ích kỷ. Mặc dù những người này thường không được yêu thích bởi những người khác, họ thường được tôn trọng vì sự độc lập của họ. Sự dẻo dai về mặt cảm xúc và khả năng cạnh tranh của họ có thể là cơ sở trong nhiều vai trò xã hội và kinh doanh.' },
   { type: 'Trung Bình', describe: 'Người có điểm trung bình có thể thông cảm nhưng cũng có thể hợp tác. Họ tin tưởng nhưng không cả tin, và đã sẵn sàng cạnh tranh cũng như hợp tác với những người khác.' },
   {
      type: 'Cao',
      describe: 'Người dễ đồng ý về cơ bản là vị tha. Đó là thông cảm cho những người khác và sẵn sàng  giúp đỡ họ, và tin rằng những người khác sẽ được những người khác đối xử công bằng lại với mình khi cần thiết.',
      job: 'Một số nghiên cứu cho thấy những người có tính dễ chấp nhận và có sự ổn định về cảm xúc cao thích làm việc theo nhóm (Mount, 2005). Những người có đặc điểm này dễ chịu và thân thiện (Peng, 1996). Những đặc điểm này giúp họ đàm phán để duy trì sự cân bằng, ổn định (Chuenyane, ZN, 1983). Tri thức và giáo viên'
   },
]

const matC = [
   { type: 'Thấp', describe: 'Người có điểm mặt C thấp không nhất thiết là người thiếu nguyên tắc đạo đức, nhưng họ không có nhiều đòi hỏi trong việc áp dụng chúng, cũng như họ không có nhiều động lực trong việc hướng tới mục tiêu của mình. Có một số bằng chứng cho thấy họ thích hưởng thụ và quan tâm đến tình dục.' },
   { type: 'Trung Bình', describe: 'Người có điểm số trung bình ở mặt C có thể chuyển công việc sang một bên để theo đuổi việc giải trí vui chơi. Họ tổ chức khá tốt và khá đáng tin cậy, có mức độ tự giác kỷ luật ở mức trung bình.' },
   {
      type: 'Cao',
      describe: 'Người có điểm số cao C là những người tỉ mỉ, đúng giờ, và đáng tin cậy. Họ có một nhu cầu tương đối cao đối với việc đạt thành tích. Họ tổ chức tốt và đáng tin cậy và thực hiện các cam kết họ đã làm. Họ có ý thức tự giác, có trách nhiệm một cách nghiêm túc. Họ là người cẩn thận, đáng tin cậy, chăm chỉ, và kiên trì. Về mặt tích cực, điểm mặt C cao có liên quan đến thành tích học tập và nghề nghiệp, về mặt tiêu cực, nó có thể dẫn đến sự kén chọn, kỹ tính, sự ra tay ép buộc, hoặc hành vi tham công tiếc việc.',
      job: 'Những người có mặt tận tâm cao thường là những người chăm chỉ và coi trọng thành tích. Những người có điểm cao ở mặt này phù hợp nhất với những nghề yêu cầu sự chủ động, kiên trì và có tổ chức. Những người có điểm thấp ở mặt này thường ít tham vọng (mặc dù họ cũng có thể là người có tài năng) nhưng cần cân nhắc một cách cẩn trọng mức độ động cơ của mình khi lựa chọn nghề nghiệp (Costa và cộng sự, 1995). Trí thức và giáo viên'
   },
]

const matO = [
   { type: 'Thấp', describe: 'Người có điểm thấp ở mặt O có xu hướng giữ nguyên hành vi ứng xử và bảo thủ trong quan điểm. Họ thích những gì quen thuộc hơn là những thứ mới mẻ, và không thích những trải nghiệm về mặt cảm xúc.', job: 'Nghề giáo viên, sư phạm.' },
   { type: 'Trung Bình', describe: 'Những người có điểm số mặt O ở mức trung bình thường khá tò mò về cả những điều bên trong họ và những gì bên ngoài thế giới, và họ có khá nhiều trải nghiệm phong phú. Họ tương đối sẵn sang đón nhận những ý tưởng mới và giá trị độc đáo. Họ tương đối nhạy cảm với cảm xúc của bản thân và của người khác.' },
   {
      type: 'Cao',
      describe: 'Những người cởi mở ham học hỏi mạnh mẽ (có điểm số mặt O cao) thường tò mò về cả những điều bên trong họ và những gì bên ngoài thế giới, và họ có nhiều trải nghiệm phong phú hơn những người khác. Họ sẵn sang đón nhận những ý tưởng mới và giá trị độc đáo, và họ trải nghiệm cả những cảm xúc tích cực và tiêu cực nhiều hơn những người ít cởi mở hơn. Họ rất nhạy cảm với cảm xúc của riêng mình và có một khả năng lớn hơn mức trung bình để nhận ra những cảm xúc của người khác. Họ đánh giá cao về cái đẹp trong nghệ thuật và tự nhiên. Họ sẵn sàng xem xét những ý tưởng mới và các giá trị và có thể hơi độc đáo theo quan điểm của họ. Những người như vậy là người tưởng tượng, táo bạo, độc lập và sáng tạo.',
      job: 'Nam giới là người cởi mở, ham học hỏi thường quan tâm đặc biệt trong các nghề như nhà văn, nhà nhân học, nhà văn tự do, nhà báo và nhà viết kịch. Nữ giới là người cởi mở, ham học hỏi thường lựa chọn trở thành nhà văn tự do, nhà văn, nhà khoa học nghiên cứu độc lập, nhà báo và nhà nhân chủng học. Việc lựa chọn nhân chủng học đặc biệt phù hợp, bởi vì nghề này đòi hỏi sự tìm hiểu mang tính trí tuệ vào một nền văn hoá mới, văn hóa nước ngoài (Costa và cộng sự, 1984). Nghề trí óc/trí thức/nghiên cứu'
   },
]

const matN = [
   {
      type: 'Thấp',
      describe: 'Người có điểm của mặt Nhiễu tâm thấp thì cảm xúc của họ tương đối ổn định. Họ thường bình tĩnh, điềm đạm, và thoải mái, và họ có thể phải đối mặt với tình huống căng thẳng mà không trở lên khó chịu hoặc lo lắng.',
      job: 'Những công việc có tính căng thẳng cao, chẳng hạn như cảnh sát, công an, thường đòi hỏi những người có mức độ điều chỉnh cảm xúc ở mức tương đối tốt (Costa và cộng sự, 1995).'
   },
   {
      type: 'Trung Bình',
      describe: 'Người có điểm mặt nhiễu tâm ở mức trung bình cho thấy sự ổn định cảm xúc của họ. Họ trải qua một số lượng bình thường của cảm xúc đau khổ và có một sự cân bằng giữa sự hài lòng và sự không hài lòng với cuộc sống. Họ không cao hoặc thấp trong sự tự đánh giá về bản thân. Khả năng đối phó với stress của họ tốt như người bình thường.'
   },
   {
      type: 'Cao',
      describe: 'Có thể do nhiều những cảm xúc tiêu cực, người có điểm N cao cũng dễ có những mẫu nhận thức khộng phù hợp, ít có khả năng để kiểm soát sự xung động của họ, và ứng phó với stress kém hơn những người khác. Người có điểm cao ở mặt C ủ rũ, quá nhạy cảm, và không hài lòng với khía cạnh cuộc sống của họ. Nói chung họ có lòng tự tin thấp, và có thể có những ý tưởng và kỳ vọng không thực tế. Họ được lo lắng, thường là người cảm thấy không an toàn về bản thân và kế hoạch của họ. Bạn bè và người quen của họ có thể mô tả đặc điểm chúng như thần kinh, tự ý thức, căng thẳng và dễ bị tổn thương so với người bình thường. (Điều quan trọng là Nhiễu tâm là một chiều kích của tính cách thông thường, và các điểm nhạy cảm thần kinh cao không bao hàm việc người đó bị bất kỳ rối loạn tâm lý nào).',
      job: 'Những người không ổn định về mặt cảm xúc, tình cảm có nhiều khả năng lựa chọn các ngành kỹ thuật, kinh doanh, toán, kinh tế và luật hơn so với các ngành khoa học xã hội và nhân văn bởi vì họ thích các quy tắc và tình huống có cấu trúc hơn (Peng, 1996). Nhìn chung, những người có điểm số cao ở mặt nhiễu tâm thường phù hợp nhất với những vị trí công việc ít căng thẳng và ít đòi hỏi sự kiểm soát về mặt cảm xúc. '
   },
]

const matE = [
   { type: 'Thấp', describe: 'Người có điểm hướng ngoại thấp có xu hướng hướng nội, hướng nội không phải không thân thiện, họ độc lập chứ không phải là chậm chạp. Người hướng nội trông có thể nhút nhát nhưng không có nghĩa là họ thích ở một mình: họ không nhất thiết bị ám sợ xã hội. Mặc dù họ không có tính cởi mở của sự hướng ngoại, nhưng hướng nội không có nghĩa là không hài lòng hoặc bi quan. Tò mò là một trong những đặc điểm của người hướng nội, họ thường thích tìm tòi nghiên cứu. Họ thích làm hầu hết mọi thứ một mình hoặc với nhóm nhỏ. Họ tránh các bên lớn và lớn, và không thích gặp gỡ những người mới. Họ thường yên lặng và không tự tin trong tương tác nhóm. Họ hiếm khi trải nghiệm cảm xúc tích cực mạnh mẽ như niềm vui hay sự phấn khích. Thực tế thấy rằng những người sống nội tâm không nhất thiết có nghĩa là họ thiếu kỹ năng xã hội-hướng nội nhiều chức năng rất tốt trong các tình huống xã hội, mặc dù họ có thể thích để tránh chúng.' },
   { type: 'Trung Bình', describe: 'Những người có tính hướng ngoại ở mức trung bình thường tương đối thích sự phấn khích và những kích thích, và có xu hướng khá hướng đến sự vui vẻ trong những hoàn cảnh khác nhau. Họ tương đối lạc quan và có khá nhiều năng lượng.' },
   {
      type: 'Cao',
      describe: 'Sự hướng ngoại là hòa đồng, nhưng hướng ngoại chỉ là một trong những đặc điểm của đời sống xã hội, ngoài ra còn có những mối quan hệ và các nhóm xã hội khác. Sự hướng ngoại thể hiện ở tính quyết đoán, năng động, và hoạt ngôn. Những người có tính hướng ngoại cao thường thích sự phấn khích và những kích thích, và có xu hướng hướng đến sự vui vẻ trong những hoàn cảnh khác nhau. Họ lạc quan, tràn đầy năng lượng. Nhân viên bán hàng thường là những người có tính hướng ngoại rất cao, điểm cao ở mặt E và các thang đo trong mặt E liên quan chặt chẽ với tới nghề làm kinh doanh, doanh nghiệp.',
      job: 'Một người cao về mặt hướng ngoại có xu hướng hòa đồng (Besser & Shackelford 2007). Điều này có thể được khẳng định qua các nghiên cứu, kết quả chỉ ra rằng những người có xu hướng hướng ngoại lựa chọn những công việc có cơ hội tiếp xúc, tương tác xã hội cao (Bryant, et al 2005). Do đó, những người hướng ngoại có khuynh hướng làm tốt các công việc liên quan đến các nghề bán hàng và quản lý (Barrick & Mount, 1991). Cụ thể, nam giới là người hướng ngoại có xu hướng thích các nghề như MC, Giám đốc Quảng cáo, Đại diện Nhà sản xuất, Tư vấn Hôn nhân, và Quản lý Bán hàng. Nữ giới là người hướng ngoại có xu hướng thích các nghề như ca sĩ, quảng cáo, cổ động viên/quản lý thể thao, nhạc trưởng, và cây viết tự do. Tất cả các ngành nghề này chứng minh xu hướng quyết đoán và mạo hiểm của người hướng ngoại.'
   },
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

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   textBlock: { textAlign: 'justify', lineHeight: 25 },
   headerText: { color: '#327032', fontWeight: '600', lineHeight: 36 }
});

export default Result;
