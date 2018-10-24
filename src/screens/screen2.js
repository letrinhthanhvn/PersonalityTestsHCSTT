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

    answerQuestion1 = (value) => {
        this.props.questions[10].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion2 = (value) => {
        this.props.questions[11].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion3 = (value) => {
        this.props.questions[12].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion4 = (value) => {
        this.props.questions[13].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion5 = (value) => {
        this.props.questions[14].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion6 = (value) => {
        this.props.questions[15].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion7 = (value) => {
        this.props.questions[16].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion8 = (value) => {
        this.props.questions[17].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion9 = (value) => {
        this.props.questions[18].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }
    answerQuestion10 = (value) => {
        this.props.questions[19].score = value
        console.log('answerQuestion1:::', this.props.questions)
    }


    render() {
        console.log('questions:::::-----', this.props.questions)
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content' />
                <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Personality Test</Text>
                </View>
                <ScrollView style={styles.questionList}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 11. </Text>{this.props.questions[10].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
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
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 13. </Text>{this.props.questions[12].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 14. </Text>{this.props.questions[13].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 15. </Text>{this.props.questions[14].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 16. </Text>{this.props.questions[15].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 17. </Text>{this.props.questions[16].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 18. </Text>{this.props.questions[17].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 19. </Text>{this.props.questions[18].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View><View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            <Text style={{ fontWeight: '900' }}>Question 20. </Text>{this.props.questions[19].question}
                        </Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={this.answerQuestion1}
                        />
                        <View style={styles.line}></View>
                    </View>
                    

                    <View style={{ height: 100, width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15 }}>
                        <Button style={{ height: 45, width: 100, borderRadius: 23, alignItems: 'center', justifyContent: 'center', backgroundColor: '#327032'}}
                            onPress={() => Actions.screen2({ questions: questions })}
                        >
                            <Text style={{color: 'white'}}>Go next</Text>
                        </Button>
                    </View>

                </ScrollView>
            </View>
        )
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
        borderBottomColor: '#909395', borderBottomWidth: 0.6
    }
})