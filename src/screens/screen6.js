import React, { Component } from 'react';

import {
   View,
   Text,
   StyleSheet,
   FlatList,
   ScrollView
} from 'react-native';

import RadioForm from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';

var radio_props = [
   { label: 'Hoàn toàn sai', value: 0 },
   { label: 'Sai', value: 1 },
   { label: 'Không đúng cũng không sai', value: 2 },
   { label: 'Đúng', value: 3 },
   { label: 'Hoàn toàn đúng', value: 4 },
];

export default class Screen6 extends Component {

   constructor(props) {
      super(props)
   }

   answerQuestion1 = (value) => {
      this.props.questions[50].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion2 = (value) => {
      this.props.questions[51].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion3 = (value) => {
      this.props.questions[52].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion4 = (value) => {
      this.props.questions[53].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion5 = (value) => {
      this.props.questions[54].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion6 = (value) => {
      this.props.questions[55].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion7 = (value) => {
      this.props.questions[56].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion8 = (value) => {
      this.props.questions[57].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion9 = (value) => {
      this.props.questions[58].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }
   answerQuestion10 = (value) => {
      this.props.questions[59].score = value
      console.log('answerQuestion1:::', this.props.questions)
   }


   render() {
      console.log('questions:::::-----', this.props.questions)
      return (
         <ScrollView style={styles.container}>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[50].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion1}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[51].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion2}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[52].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion3}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[53].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion4}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[54].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion5}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[55].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion6}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[56].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion7}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[57].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion8}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[58].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion9}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{this.props.questions[59].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion10}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>

            <View style={{ height: 60, width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 15 }}>
               <Button style={{ height: 45, width: 100, borderRadius: 23, alignItems: 'center', justifyContent: 'center', }}
                  // onPress={() => Actions.screen({ questions: this.props.questions })}
               >
                  <Text>Go next</Text>
               </Button>
            </View>

         </ScrollView>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 50
   }
})