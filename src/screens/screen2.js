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

import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';
import RadioForm from 'react-native-simple-radio-button';
import { getStatusBarHeight } from 'react-native-status-bar-height'


const { width, height } = Dimensions.get('window')

var radio_props = [
    { label: 'Hoàn toàn sai', value: 0 },
    { label: 'Sai', value: 1 },
    { label: 'Không đúng cũng không sai', value: 2 },
    { label: 'Đúng', value: 3 },
    { label: 'Hoàn toàn đúng', value: 4 },
];

export default class Screen2 extends Component {

    constructor(props) {
        super(props)

    }

    answerQuestion11 = (value) => {
        this.props.questions[10].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion12 = (value) => {
        this.props.questions[11].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion13 = (value) => {
        this.props.questions[12].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion14 = (value) => {
        this.props.questions[13].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion15 = (value) => {
        this.props.questions[14].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion16 = (value) => {
        this.props.questions[15].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion17 = (value) => {
        this.props.questions[16].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion18 = (value) => {
        this.props.questions[17].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion19 = (value) => {
        this.props.questions[18].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion20 = (value) => {
        this.props.questions[19].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        const { questions } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18}}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingTop: 12}}>
                        <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 2/6</Text>
                    </View>
                    <View style={{width: width-30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0}}>
                        <View style={{width: ((width-30)/6)*2, height: 4, backgroundColor: '#327032'}}></View>
                    </View>

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 11. </Text>{this.props.questions[10].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion11}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 12. </Text>{this.props.questions[11].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion12}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 13. </Text>{this.props.questions[12].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion13}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 14. </Text>{this.props.questions[13].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion14}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 15. </Text>{this.props.questions[14].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion15}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 16. </Text>{this.props.questions[15].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion16}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 17. </Text>{this.props.questions[16].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion17}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 18. </Text>{this.props.questions[17].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion18}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 19. </Text>{this.props.questions[18].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion19}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 20. </Text>{this.props.questions[19].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion20}
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

    switchScreen = () => {
        const { questions } = this.props
        Actions.screen3({
            questions: this.props.questions,
            scoreC: this.props.scoreC + questions[10].score + questions[15].score,
            scoreA: this.props.scoreA + questions[11].score + questions[16].score,
            scoreO: this.props.scoreO + questions[12].score + questions[17].score,
            scoreN: this.props.scoreN + questions[13].score + questions[18].score,
            scoreE: this.props.scoreE + questions[14].score + questions[19].score
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