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

const { width } = Dimensions.get('window')

var radio_props = [
    { label: 'Hoàn toàn sai', value: 0 },
    { label: 'Sai', value: 1 },
    { label: 'Không đúng cũng không sai', value: 2 },
    { label: 'Đúng', value: 3 },
    { label: 'Hoàn toàn đúng', value: 4 },
];

export default class Screen4 extends Component {

    constructor(props) {
        super(props)
    }

    answerQuestion31 = (value) => {
        this.props.questions[30].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion32 = (value) => {
        this.props.questions[31].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion33 = (value) => {
        this.props.questions[32].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion34 = (value) => {
        this.props.questions[33].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion35 = (value) => {
        this.props.questions[34].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion36 = (value) => {
        this.props.questions[35].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion37 = (value) => {
        this.props.questions[36].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion38 = (value) => {
        this.props.questions[37].score = 4 - value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion39 = (value) => {
        this.props.questions[38].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion40 = (value) => {
        this.props.questions[39].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        return (
            <View style={{flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18}}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={{ width, justifyContent: 'center', alignItems: 'center', paddingTop: 12 }}>
                        <Text style={{ color: '#327032', fontWeight: '600' }}>Trang 4/6</Text>
                    </View>
                    <View style={{width: width-30, height: 4, backgroundColor: '#D0D0CF', margin: 15, marginBottom: 0}}>
                        <View style={{width: ((width-30)/6)*4, height: 4, backgroundColor: '#327032'}}></View>
                    </View>


                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 31. </Text>{this.props.questions[30].question}
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
                            <Text style={{ fontWeight: '900' }}>Question 32. </Text>{this.props.questions[31].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion32}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 33. </Text>{this.props.questions[32].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion33}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 34. </Text>{this.props.questions[33].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion34}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 35. </Text>{this.props.questions[34].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion35}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 36. </Text>{this.props.questions[35].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion36}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 37. </Text>{this.props.questions[36].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion37}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 38. </Text>{this.props.questions[37].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion38}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 39. </Text>{this.props.questions[38].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion39}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 40. </Text>{this.props.questions[39].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion40}
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
        Actions.screen5({
            questions: this.props.questions,
            scoreC: this.props.scoreC + questions[30].score + questions[35].score,
            scoreA: this.props.scoreA + questions[31].score + questions[36].score,
            scoreO: this.props.scoreO + questions[32].score + questions[37].score,
            scoreN: this.props.scoreN + questions[33].score + questions[38].score,
            scoreE: this.props.scoreE + questions[34].score + questions[39].score
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