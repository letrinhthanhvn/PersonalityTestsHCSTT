import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Dimensions,
    StatusBar,
    Alert
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
import { sendData } from '../redux/actions/jobSolutions';
import { update60question } from '../redux/actions/jobSolutions';

const { width } = Dimensions.get('window')

var radio_props = [
    { label: 'Hoàn toàn sai', value: 0 },
    { label: 'Sai', value: 1 },
    { label: 'Không đúng cũng không sai', value: 2 },
    { label: 'Đúng', value: 3 },
    { label: 'Hoàn toàn đúng', value: 4 },
];

class Screen6 extends Component {

    constructor(props) {
        super(props)
    }

    answerQuestion51 = (value) => {
        this.props.questions[50].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion52 = (value) => {
        this.props.questions[51].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion53 = (value) => {
        this.props.questions[52].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion54 = (value) => {
        this.props.questions[53].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion55 = (value) => {
        this.props.questions[54].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion56 = (value) => {
        this.props.questions[55].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion57 = (value) => {
        this.props.questions[56].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion58 = (value) => {
        this.props.questions[57].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion59 = (value) => {
        this.props.questions[58].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion60 = (value) => {
        this.props.questions[59].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingTop: 12 }}>
                        <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 6/6</Text>
                    </View>
                    <View style={{ width: width - 30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0 }}>
                        <View style={{ width: ((width - 30) / 6) * 6, height: 4, backgroundColor: '#327032' }}></View>
                    </View>


                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 51. </Text>{this.props.questions[50].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion51}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 52. </Text>{this.props.questions[51].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion52}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 53. </Text>{this.props.questions[52].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion53}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 54. </Text>{this.props.questions[53].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion54}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 55. </Text>{this.props.questions[54].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion55}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 56. </Text>{this.props.questions[55].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion56}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 57. </Text>{this.props.questions[56].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion57}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 58. </Text>{this.props.questions[57].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion58}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 59. </Text>{this.props.questions[58].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion59}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 60. </Text>{this.props.questions[59].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion60}
                        />
                        <View style={styles.line}></View>
                    </View>

                    <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                        <Button style={{ height: 45, width: 100, borderRadius: 23, alignItems: 'center', justifyContent: 'center', backgroundColor: '#327032' }}
                            onPress={this.switchScreen}
                        >
                            <Text style={{ color: 'white' }}>Next Screen</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }

    sendData = () => {
        const { questions } = this.props
        Alert.alert(
            'Notice!',
            'Do you want to send data?',
            [
               { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
               { text: 'YES', onPress: () => this.props.sendData({
                user_name: this.props.username,
                scoreC: this.props.scoreC + questions[50].score + questions[55].score,
                scoreA: this.props.scoreA + questions[51].score + questions[56].score,
                scoreO: this.props.scoreO + questions[52].score + questions[57].score,
                scoreN: this.props.scoreN + questions[53].score + questions[58].score,
                scoreE: this.props.scoreE + questions[54].score + questions[59].score,
                check_send: 0
            }) },
            ],
            { cancelable: false }
         )
        
    }

    switchScreen = () => {
        const { questions } = this.props
        // let scoreA = 0;
        // let scoreC = 0;
        // let scoreO = 0;
        // let scoreN = 0;
        // let scoreE = 0;

        // Actions.gender({
        //     questions: this.props.questions,
        // scoreC: this.props.scoreC + questions[50].score + questions[55].score,
        // scoreA: this.props.scoreA + questions[51].score + questions[56].score,
        // scoreO: this.props.scoreO + questions[52].score + questions[57].score,
        // scoreN: this.props.scoreN + questions[53].score + questions[58].score,
        // scoreE: this.props.scoreE + questions[54].score + questions[59].score
        // })
        this.props.update60question({
            user_name: this.props.username,
            question1: questions[50].score,
            question2: questions[51].score,
            question3: questions[52].score,
            question4: questions[53].score,
            question5: questions[54].score,
            question6: questions[55].score,
            question7: questions[56].score,
            question8: questions[57].score,
            question9: questions[58].score,
            question10: questions[59].score,
      })

        this.props.sendData({
            user_name: this.props.username,
            scoreC: this.props.scoreC + questions[50].score + questions[55].score,
            scoreA: this.props.scoreA + questions[51].score + questions[56].score,
            scoreO: this.props.scoreO + questions[52].score + questions[57].score,
            scoreN: this.props.scoreN + questions[53].score + questions[58].score,
            scoreE: this.props.scoreE + questions[54].score + questions[59].score,
            check_send: 1
        })
        // if (!this.props.isSendData) {
        Actions.result({
            gender: this.props.gender, 
            scoreC: this.props.scoreC + questions[50].score + questions[55].score,
            scoreA: this.props.scoreA + questions[51].score + questions[56].score,
            scoreO: this.props.scoreO + questions[52].score + questions[57].score,
            scoreN: this.props.scoreN + questions[53].score + questions[58].score,
            scoreE: this.props.scoreE + questions[54].score + questions[59].score,
        })
        // }
    }
}

const styles = StyleSheet.create({
    questionList: {
        flex: 1,
        //marginLeft: 12,
        //padding: 10
    },
    questionContainer: {
        height: 230,
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

const mapDispatchToProps = {
    sendData,
    update60question
}

const mapStateToProps = (state) => {
    return {
        username: state.jobSolutions.username,
        gender: state.jobSolutions.result.gender
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen6)