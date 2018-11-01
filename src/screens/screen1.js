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
      { id: 16, question: 'Tôi thấy tự hào về khả năng đánh giá đúng đắn của mình.', score: 0 },
      { id: 17, question: 'Nếu cần thiết, tôi sẵn sàng thao túng mọi người để có thứ mình muốn. ', score: 4 },
      { id: 18, question: 'Tôi thích giải những câu đố hóc búa.', score: 0 },
      { id: 19, question: 'Tôi thường lo về những việc có thể trở nên tồi tệ.', score: 0 },
      { id: 20, question: 'Tôi thích những buổi liên hoan đông người.', score: 0 },
      { id: 21, question: 'Tôi suy nghĩ kỹ lưỡng mọi việc trước khi ra quyết định.', score: 0 },
      { id: 22, question: 'Tôi tin rằng hầu hết mọi người sẽ lợi dụng bạn nếu họ có dịp.', score: 4 },
      { id: 23, question: 'Tôi ít khi quan tâm đến cảm xúc hiện tại của mình.', score: 4 },
      { id: 24, question: 'Đôi khi tôi cảm thấy cay đắng và uất ức.', score: 0 },
      { id: 25, question: 'Tôi thích có nhiều người xung quanh mình.', score: 0 },
      { id: 26, question: 'Tôi thiết lập các mục tiêu một cách rõ ràng và từng bước thực hiện chúng.', score: 0 },
      { id: 27, question: 'Một số người nghĩ rằng tôi là người lạnh lùng và tính toán.', score: 4 },
      { id: 28, question: 'Thi thoảng tôi hoàn toàn đắm chìm trong bản nhạc mà tôi đang nghe.', score: 0 },
      { id: 29, question: 'Đôi khi những ý nghĩ đáng sợ xuất hiện trong đầu tôi.', score: 0 },
      { id: 30, question: 'Tôi thích những nơi náo nhiệt, có nhiều hoạt động đang diễn ra.', score: 0 },
      { id: 31, question: 'Tôi giữ gìn đồ dùng cá nhân gọn gàng và sạch sẽ.', score: 0 },
      { id: 32, question: 'Tôi hay cãi nhau với người nhà và đồng nghiệp. ', score: 4 },
      { id: 33, question: 'Tôi thích giải các câu đố.', score: 0 },
      { id: 34, question: 'Nhiều lần, khi sự việc trở nên tồi tệ, tôi thấy chán nản và muốn từ bỏ.', score: 0 },
      { id: 35, question: 'Tôi dễ cười.', score: 0 },
      { id: 36, question: 'Tôi là người có ý thức tự giác cao.', score: 0 },
      { id: 37, question: 'Nếu ai đó bắt đầu cuộc chiến, tôi sẽ sẵn sàng đấu lại.', score: 4 },
      { id: 38, question: 'Khi còn nhỏ, hiếm khi tôi chơi trò chơi tưởng tượng.', score: 4 },
      { id: 39, question: 'Tôi dễ hoảng sợ.', score: 0 },
      { id: 40, question: 'Tôi thích đi chơi ở chỗ đông đúc hơn là nơi vắng người.', score: 0 },
      { id: 41, question: 'Tôi thích cất giữ mọi thứ ngăn nắp nên tôi biết chính xác chúng ở đâu.', score: 0 },
      { id: 42, question: 'Tôi là người cứng đầu và bướng bỉnh.', score: 4 },
      { id: 43, question: 'Theo tôi việc giữ đúng các nguyên tắc sống đã có quan trọng hơn là sẵn sàng tiếp thu cái mới. ', score: 4 },
      { id: 44, question: 'Khi có quá nhiều căng thẳng, tôi thấy như mình không thể chịu đựng thêm nữa.', score: 0 },
      { id: 45, question: 'Tôi là người vui vẻ và luôn phấn khích.', score: 0 },
      { id: 46, question: 'Mọi người cho rằng tôi là người cẩn thận và biết điều.', score: 0 },
      { id: 47, question: 'Tôi có khả năng đạt được những điều tôi muốn từ người khác với bất cứ giá nào.', score: 4 },
      { id: 48, question: 'Thơ ca thường không có tác động gì đối với tôi.', score: 4 },
      { id: 49, question: 'Cảm xúc của tôi khá ổn định.', score: 4 },
      { id: 50, question: 'Nhiều người cho rằng tôi là người hơi lạnh lùng và khó gần.', score: 4 },
      { id: 51, question: 'Khi đã cam kết thực hiện điều gì, mọi người có thể tin là tôi sẽ hoàn thành.', score: 0 },
      { id: 52, question: 'Một số người cho rằng tôi là người ích kỷ và tự cao tự đại.', score: 4 },
      { id: 53, question: 'Tôi thích ở những nơi quen thuộc.', score: 4 },
      { id: 54, question: 'Tôi ít khi cảm thấy cô đơn hay buồn bã.', score: 4 },
      { id: 55, question: 'Tôi thấy dễ dàng tươi cười và thoải mái với người lạ.', score: 0 },
      { id: 56, question: 'Tôi lên kế hoạch cẩn thận trước khi bắt đầu một chuyến đi.', score: 0 },
      { id: 57, question: 'Tôi hay nghi ngờ ý định của người khác.', score: 4 },
      { id: 58, question: 'Tôi có trí tưởng tượng rất phong phú.', score: 0 },
      { id: 59, question: 'Rất khó làm tôi tức giận.', score: 4 },
      { id: 60, question: 'Nếu tôi ở một mình quá lâu, tôi cảm thấy thực sự cần ai đó ở bên.', score: 0 }
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
                        <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                              <Text style={{ color: 'white', fontSize: 18 }}>Personality Test</Text>
                        </View>

                        <ScrollView style={styles.questionList}>
                              <View style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 15, paddingRight: 5 }}>
                                    <Text style={{ fontSize: 15.5 }}>
                                          Dưới đây là các câu hỏi và các phương án trả lời bên dưới. Hãy chọn 1 phương án phù hợp với bạn nhất.
                                    </Text>
                                    <Text style={{ fontSize: 15 }}>
                                          <Text style={{ color: '#891304', fontWeight: '600' }}>Lưu ý: </Text>
                                          <Text style={{}}>Đừng mất quá nhiều thời gian vào một câu hỏi, hãy chọn đáp án xuất hiện đầu tiên trong đầu.</Text>
                                    </Text>

                              </View>


                              <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 1/6</Text>
                              </View>
                              <View style={{ width: width - 30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0 }}>
                                    <View style={{ width: (width - 30) / 6, height: 4, backgroundColor: '#327032' }}></View>
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
                                    <View style={styles.line}></View>
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
            borderBottomColor: '#909395', borderBottomWidth: 0.6,
            width: width - 30
      }
})