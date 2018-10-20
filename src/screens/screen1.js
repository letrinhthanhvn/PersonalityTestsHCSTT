import React, { Component } from 'react';

import {
   View,
   Text,
   StyleSheet,
   FlatList,
   ScrollView
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-material-kit/lib/mdl';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
   { label: 'Hoàn toàn sai', value: 0 },
   { label: 'Sai', value: 1 },
   { label: 'Không đúng cũng không sai', value: 2 },
   { label: 'Đúng', value: 3 },
   { label: 'Hoàn toàn đúng', value: 4 },
];

var questions = [
   { id: 1, question: '1', score: 0 },
   { id: 2, question: '2', score: 4 },
   { id: 3, question: '3', score: 4 },
   { id: 4, question: '4', score: 4 },
   { id: 5, question: '5', score: 0 },
   { id: 6, question: '6', score: 0 },
   { id: 7, question: '7', score: 4 },
   { id: 8, question: '8', score: 4 },
   { id: 9, question: '9', score: 4 },
   { id: 10, question: '10', score: 0 },
   { id: 11, question: '11', score: 0 },
   { id: 12, question: '12', score: 0 },
   { id: 13, question: '13', score: 0 },
   { id: 14, question: '14', score: 0 },
   { id: 15, question: '15', score: 0 },
   { id: 16, question: '16', score: 0 },
   { id: 17, question: '17', score: 0 },
   { id: 18, question: '18', score: 0 },
   { id: 19, question: '19', score: 0 },
   { id: 20, question: '20', score: 0 },
   { id: 21, question: '21', score: 0 },
   { id: 22, question: '22', score: 0 },
   { id: 23, question: '23', score: 0 },
   { id: 24, question: '24', score: 0 },
   { id: 25, question: '25', score: 0 },
   { id: 26, question: '26', score: 0 },
   { id: 27, question: '27', score: 0 },
   { id: 28, question: '28', score: 0 },
   { id: 29, question: '29', score: 0 },
   { id: 30, question: '30', score: 0 },
   { id: 31, question: '31', score: 0 },
   { id: 32, question: '32', score: 0 },
   { id: 33, question: '33', score: 0 },
   { id: 34, question: '34', score: 0 },
   { id: 35, question: '35', score: 0 },
   { id: 36, question: '36', score: 0 },
   { id: 37, question: '37', score: 0 },
   { id: 38, question: '38', score: 0 },
   { id: 39, question: '39', score: 0 },
   { id: 40, question: '40', score: 0 },
   { id: 41, question: '41', score: 0 },
   { id: 42, question: '42', score: 0 },
   { id: 43, question: '43', score: 0 },
   { id: 44, question: '44', score: 0 },
   { id: 45, question: '45', score: 0 },
   { id: 46, question: '46', score: 0 },
   { id: 47, question: '47', score: 0 },
   { id: 48, question: '48', score: 0 },
   { id: 49, question: '49', score: 0 },
   { id: 50, question: '50', score: 0 },
   { id: 51, question: '51', score: 0 },
   { id: 52, question: '52', score: 0 },
   { id: 53, question: '53', score: 0 },
   { id: 54, question: '54', score: 0 },
   { id: 55, question: '55', score: 0 },
   { id: 56, question: '56', score: 0 },
   { id: 57, question: '57', score: 0 },
   { id: 58, question: '58', score: 0 },
   { id: 59, question: '59', score: 0 },
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
      questions[2].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion4 = (value) => {
      questions[3].score = value
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
      questions[6].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion8 = (value) => {
      questions[7].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion9 = (value) => {
      questions[8].score = value
      console.log('answerQuestion1:::', questions)
   }
   answerQuestion10 = (value) => {
      questions[9].score = value
      console.log('answerQuestion1:::', questions)
   }


   render() {
      return (
         <ScrollView style={styles.container}>
            {/* <FlatList
               data={questions}
               renderItem={this.renderPerQuestion}
               keyExtractor={(item, index) => String(index)}
            /> */}
            {
               // questions.map((obj, i) => {
               //    return (
               //       <View style={{ height: 200, width: '100%', }}>
               //          <Text>{obj.question}</Text>
               //          <RadioForm
               //             radio_props={radio_props}
               //             initial={0}
               //             onPress={this.answerQuestion1}
               //          // style={{ marginTop: 100 }}
               //          // formHorizontal={true}
               //          />
               //       </View>
               //    )
               // })
            }
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[0].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion1}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[1].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion2}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[2].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion3}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[3].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion4}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[4].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion5}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[5].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion6}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[6].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion7}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[7].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion8}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[8].question}</Text>
               <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={this.answerQuestion9}
               // style={{ marginTop: 100 }}
               // formHorizontal={true}
               />
            </View>
            <View style={{ height: 200, width: '100%', }}>
               <Text>{questions[9].question}</Text>
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
                  onPress={() => Actions.screen2({ questions: questions })}
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