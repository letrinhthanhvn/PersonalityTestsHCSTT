import React, { Component } from 'react';

import {
   View,
   Text,
   StyleSheet,
   FlatList,
   ScrollView,
   Dimensions,
   StatusBar,
   TouchableOpacity
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height'

import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';
import RadioForm from 'react-native-simple-radio-button';

const { width, height } = Dimensions.get('window');

var radio_props = [
   { label: 'Hoàn toàn sai', value: 0 },
   { label: 'Sai', value: 1 },
   { label: 'Không đúng cũng không sai', value: 2 },
   { label: 'Đúng', value: 3 },
   { label: 'Hoàn toàn đúng', value: 4 },
];

var questions = [
   { id: 1, question: 'Tôi là người làm việc năng suất và luôn hoàn thành công việc.', score: 0 },
   { id: 2, question: 'Đôi khi tôi có thể đe dọa hoặc nịnh bợ người khác để họ làm những gì tôi muốn. ', score: 4 },
   { id: 3, question: 'Tôi không quan tâm tới thẩm mỹ và nghệ thuật.', score: 4 },
   { id: 4, question: 'Hiếm khi tôi có cảm giác sợ hãi hay lo lắng. ', score: 4 },
   { id: 5, question: 'Tôi thấy mình dễ đồng cảm với người khác.', score: 0 },
   { id: 6, question: 'Tôi làm việc đều đặn để hoàn thành công việc đúng thời hạn.', score: 0 },
   { id: 7, question: 'Khi cần tôi có thể mỉa mai và trở nên cay độc.', score: 4 },
   { id: 8, question: 'Tôi ít quan tâm đến việc tìm hiểu bản chất vũ trụ hay loài người.', score: 4 },
   { id: 9, question: 'Hiếm khi tôi buồn hay chán nản.', score: 4 },
   { id: 10, question: 'Tôi là người cởi mở và dễ chấp nhận cách sống của người khác.', score: 0 },
   { id: 11, question: 'Khi bắt tay vào một công việc, hầu như tôi luôn luôn hoàn thành nó.', score: 0 },
   { id: 12, question: 'Đôi khi tôi lừa mọi người làm những gì tôi muốn.', score: 0 },
   { id: 13, question: 'Một số thể loại nhạc có sức cuốn hút rất lớn đối với tôi.', score: 0 },
   { id: 14, question: 'Hiếm khi tôi lo sợ về tương lai. ', score: 0 },
   { id: 15, question: 'Tôi thực sự thích trò chuyện với mọi người.', score: 0 },
   { id: 16, question: '16', score: 0 },
   { id: 17, question: '17', score: 4 },
   { id: 18, question: '18', score: 0 },
   { id: 19, question: '19', score: 0 },
   { id: 20, question: '20', score: 0 },
   { id: 21, question: '21', score: 0 },
   { id: 22, question: '22', score: 4 },
   { id: 23, question: '23', score: 4 },
   { id: 24, question: '24', score: 0 },
   { id: 25, question: '25', score: 0 },
   { id: 26, question: '26', score: 0 },
   { id: 27, question: '27', score: 4 },
   { id: 28, question: '28', score: 0 },
   { id: 29, question: '29', score: 0 },
   { id: 30, question: '30', score: 0 },
   { id: 31, question: '31', score: 0 },
   { id: 32, question: '32', score: 4 },
   { id: 33, question: '33', score: 0 },
   { id: 34, question: '34', score: 0 },
   { id: 35, question: '35', score: 0 },
   { id: 36, question: '36', score: 0 },
   { id: 37, question: '37', score: 4 },
   { id: 38, question: '38', score: 4 },
   { id: 39, question: '39', score: 0 },
   { id: 40, question: '40', score: 0 },
   { id: 41, question: '41', score: 0 },
   { id: 42, question: '42', score: 4 },
   { id: 43, question: '43', score: 4 },
   { id: 44, question: '44', score: 0 },
   { id: 45, question: '45', score: 0 },
   { id: 46, question: '46', score: 0 },
   { id: 47, question: '47', score: 4 },
   { id: 48, question: '48', score: 4 },
   { id: 49, question: '49', score: 4 },
   { id: 50, question: '50', score: 4 },
   { id: 51, question: '51', score: 0 },
   { id: 52, question: '52', score: 4 },
   { id: 53, question: '53', score: 4 },
   { id: 54, question: '54', score: 4 },
   { id: 55, question: '55', score: 0 },
   { id: 56, question: '56', score: 0 },
   { id: 57, question: '57', score: 4 },
   { id: 58, question: '58', score: 0 },
   { id: 59, question: '59', score: 4 },
   { id: 60, question: '60', score: 0 }
]
export default class Screen1 extends Component {

   constructor(props) {
      super(props)

   }

   renderPerQuestion = ({ item, index }) => {
      return (
         <View style={{ height: 200, width: '100%', }}>
            <Text>{item.question}</Text>
            <RadioForm
               radio_props={radio_props}
               initial={0}
               onPress={this.answerQuestion1}
            // style={{ marginTop: 100 }}
            // formHorizontal={true}
            />
         </View>
      )
   }

   answerQuestion1 = (value) => {
      questions[0].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion2 = (value) => {
      questions[1].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion3 = (value) => {
      questions[2].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion4 = (value) => {
      questions[3].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion5 = (value) => {
      questions[4].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion6 = (value) => {
      questions[5].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion7 = (value) => {
      questions[6].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion8 = (value) => {
      questions[7].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion9 = (value) => {
      questions[8].score = 4 - value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion10 = (value) => {
      questions[9].score = value
      console.log('answerQuestion1:::', questions)
   }


   render() {
      return (
         <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
            <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
               <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Personality Test</Text>
            </View>

            <ScrollView style={styles.questionList}>
               <View style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 8, paddingRight: 5 }}>
                  <Text style={{ fontSize: 15.5 }}>
                     Dưới đây là các câu hỏi và các phương án trả lời bên dưới. Hãy chọn 1 phương án phù hợp với bạn nhất.
                        </Text>
                  <Text style={{ fontSize: 15 }}>
                     <Text style={{ color: '#891304', fontWeight: '600' }}>Lưu ý: </Text>
                     <Text style={{}}>Đừng mất quá nhiều thời gian vào một câu hỏi, hãy chọn đáp án xuất hiện đầu tiên trong đầu.</Text>
                  </Text>
               </View>

               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}>
                     <Text style={{ fontWeight: '900' }}>Question 1. </Text>{questions[0].question}
                  </Text>

                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion1}

                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 2. </Text>{questions[1].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion2}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 3. </Text>{questions[2].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion3}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}

                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 4. </Text>{questions[3].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion4}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 5. </Text>{questions[4].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion5}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 6. </Text>{questions[5].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion6}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 7. </Text>{questions[6].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion7}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 8. </Text>{questions[7].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion8}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 9. </Text>{questions[8].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion9}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />
                  <View style={styles.line}></View>
               </View>
               <View style={styles.questionContainer}>
                  <Text style={styles.questionText}><Text style={{ fontWeight: '900' }}>Question 10. </Text>{questions[9].question}</Text>
                  <RadioForm
                     radio_props={radio_props}
                     initial={0}
                     onPress={this.answerQuestion10}
                  // style={{ marginTop: 100 }}
                  // formHorizontal={true}
                  />

               </View>

               <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15 }}>
                  <Button style={{ height: 45, width: 100, borderRadius: 23, alignItems: 'center', justifyContent: 'center', backgroundColor: '#327032' }}
                     onPress={this.switchScreen}
                  >
                     <Text style={{ color: 'white' }}>Go next</Text>
                  </Button>
               </View>

            </ScrollView>
         </View>
      )
   }

   switchScreen = () => 
      Actions.screen2({ 
         questions: questions,
         scoreC: questions[0].score + questions[5].score,
         scoreA: questions[1].score + questions[6].score,
         scoreO: questions[2].score + questions[7].score,
         scoreN: questions[3].score + questions[8].score,
         scoreE: questions[4].score + questions[9].score 
      })
}

const styles = StyleSheet.create({
   questionList: {
      flex: 1,
      //marginLeft: 12,
      //padding: 10
   },
   questionContainer: {
      height: 220,
      width,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 5,
      //backgroundColor: 'blue',
      justifyContent: 'space-between',

   },
   questionText: {
      fontFamily: 'Avenir',
      fontSize: 15,
      //backgroundColor: 'yellow'
   },
   line: {
      borderBottomColor: '#909395', borderBottomWidth: 0.6
   }
})