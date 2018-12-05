import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    Dimensions,
    StatusBar
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { update50question } from '../redux/actions/jobSolutions';
import { connect } from 'react-redux'; 

const { width } = Dimensions.get('window')

var radio_props = [
    { label: 'Hoàn toàn sai', value: 0 },
    { label: 'Sai', value: 1 },
    { label: 'Không đúng cũng không sai', value: 2 },
    { label: 'Đúng', value: 3 },
    { label: 'Hoàn toàn đúng', value: 4 },
];

class Screen5 extends Component {

    constructor(props) {
        super(props)
    }

    answerQuestion41 = (value) => {
        this.props.questions[40].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion42 = (value) => {
        this.props.questions[41].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion43 = (value) => {
        this.props.questions[42].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion44 = (value) => {
        this.props.questions[43].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion45 = (value) => {
        this.props.questions[44].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion46 = (value) => {
        this.props.questions[45].score = value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion47 = (value) => {
        this.props.questions[46].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion48 = (value) => {
        this.props.questions[47].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion49 = (value) => {
        this.props.questions[48].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion50 = (value) => {
        this.props.questions[49].score = 4 - value
        // console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        return (
            <View style={{flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingTop: 12 }}>
                        <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 5/6</Text>
                    </View>
                    <View style={{width: width-30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0}}>
                        <View style={{width: ((width-30)/6)*5, height: 4, backgroundColor: '#327032'}}></View>
                    </View>


                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 41. </Text>{this.props.questions[40].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion41}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 42. </Text>{this.props.questions[41].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion42}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 43. </Text>{this.props.questions[42].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion43}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 44. </Text>{this.props.questions[43].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion44}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 45. </Text>{this.props.questions[44].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion45}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 46. </Text>{this.props.questions[45].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion46}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 47. </Text>{this.props.questions[46].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion47}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 48. </Text>{this.props.questions[47].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion48}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 49. </Text>{this.props.questions[48].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion49}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 50. </Text>{this.props.questions[49].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion50}
                        />
                        <View style={styles.line}></View>
                    </View>

                    <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                        <Button style={{ height: 45, width: 100, borderRadius: 23, alignItems: 'center', justifyContent: 'center', backgroundColor: '#327032'}}
                            onPress={this.switchScreen}
                        >
                            <Text style={{color: 'white'}}>Go next</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }

    switchScreen = () => {
        const { questions } = this.props
        this.props.update50question({
            user_name: this.props.result.user_name,
            question1: questions[40].score,
            question2: questions[41].score,
            question3: questions[42].score,
            question4: questions[43].score,
            question5: questions[44].score,
            question6: questions[45].score,
            question7: questions[46].score,
            question8: questions[47].score,
            question9: questions[48].score,
            question10: questions[49].score,
      })
        Actions.screen6({
            questions: this.props.questions,
            scoreC: this.props.scoreC + questions[40].score + questions[45].score,
            scoreA: this.props.scoreA + questions[41].score + questions[46].score,
            scoreO: this.props.scoreO + questions[42].score + questions[47].score,
            scoreN: this.props.scoreN + questions[43].score + questions[48].score,
            scoreE: this.props.scoreE + questions[44].score + questions[49].score
        })
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
    update50question
}

const mapStateToProps = (state) => {
    return {
          result: state.jobSolutions.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen5) 