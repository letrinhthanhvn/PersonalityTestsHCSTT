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
import { getStatusBarHeight } from 'react-native-status-bar-height'


const { width, height } = Dimensions.get('window')

var radio_props = [
    { label: 'Hoàn toàn sai', value: 0 },
    { label: 'Sai', value: 1 },
    { label: 'Không đúng cũng không sai', value: 2 },
    { label: 'Đúng', value: 3 },
    { label: 'Hoàn toàn đúng', value: 4 },
];

export default class Screen3 extends Component {

    constructor(props) {
        super(props)
    }

    answerQuestion21 = (value) => {
        this.props.questions[20].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion22 = (value) => {
        this.props.questions[21].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion23 = (value) => {
        this.props.questions[22].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion24 = (value) => {
        this.props.questions[23].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion25 = (value) => {
        this.props.questions[24].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion26 = (value) => {
        this.props.questions[25].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion27 = (value) => {
        this.props.questions[26].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion28 = (value) => {
        this.props.questions[27].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion29 = (value) => {
        this.props.questions[28].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion30 = (value) => {
        this.props.questions[29].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        const { questions } = this.props
        return (
            <View style={{flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18}}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingTop: 12 }}>
                        <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 3/6</Text>
                    </View>
                    <View style={{width: width-30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0}}>
                        <View style={{width: ((width-30)/6)*3, height: 4, backgroundColor: '#327032'}}></View>
                    </View>


                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 21. </Text>{this.props.questions[20].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion21}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 22. </Text>{this.props.questions[21].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion22}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 23. </Text>{this.props.questions[22].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion23}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 24. </Text>{this.props.questions[23].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion24}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 25. </Text>{this.props.questions[24].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion25}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 26. </Text>{this.props.questions[25].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion26}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 27. </Text>{this.props.questions[26].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion27}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 28. </Text>{this.props.questions[27].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion28}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 29. </Text>{this.props.questions[28].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion29}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 30. </Text>{this.props.questions[29].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion30}
                        />
                        <View style={styles.line}></View>
                    </View>

                    <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15 }}>
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
        Actions.screen4({
            questions: this.props.questions,
            scoreC: this.props.scoreC + questions[20].score + questions[25].score,
            scoreA: this.props.scoreA + questions[21].score + questions[26].score,
            scoreO: this.props.scoreO + questions[22].score + questions[27].score,
            scoreN: this.props.scoreN + questions[23].score + questions[28].score,
            scoreE: this.props.scoreE + questions[24].score + questions[29].score
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