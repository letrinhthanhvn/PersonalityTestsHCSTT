import React, { PureComponent } from 'react';
import {
      StyleSheet, View, Text,
      ScrollView,
      RefreshControl,
      ActivityIndicator,
      Dimensions,
      StatusBar,
      Alert
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Button } from 'react-native-material-kit/lib/mdl';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');


class Result extends PureComponent {

      constructor(props) {
            super(props)

            this.state = {
                  loadding: true
            }
      }

      componentDidMount() {
            setTimeout(() => this.setState({
                  loadding: false
            }), 1200)
      }

      render() {
            console.log('propsdesdes::::',  this.props)
            const { desA, desN, desO, desE, desC } = this.props
            return (
                  <View style={styles.container}>
                        {
                              this.state.loadding ?
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                          <StatusBar barStyle='light-content' />
                                          <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                                          <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'white', fontSize: 18 }}>Result</Text>
                                          </View>
                                          <ActivityIndicator size="large" color='#327032' style={{ flex: 1 }} />
                                    </View>
                                    :
                                    <View style={{ flex: 1 }}>
                                          <StatusBar barStyle='light-content' />
                                          <View style={{ height: getStatusBarHeight(), width, backgroundColor: '#327032' }}></View>
                                          <View style={{ height: 50, width, backgroundColor: '#327032', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'white', fontSize: 18 }}>Result</Text>
                                          </View>
                                          <ScrollView style={{ paddingLeft: 15, paddingRight: 15 }}>
                                                <View style={{ marginTop: 15 }}>
                                                      <Text style={styles.headerText}>NHIỄU TÂM</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desN.typeN}</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desN.describeN}</Text>
                                                      {
                                                            this.props.desN.jobN ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desN.jobN}</Text> : null
                                                      }
                                                </View>

                                                <View style={{ marginTop: 15 }}>
                                                      <Text style={styles.headerText}>HƯỚNG NGOẠI</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desE.typeE}</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desE.describeE}</Text>
                                                      {
                                                            this.props.desE.jobE ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desE.jobE}</Text> : null
                                                      }
                                                </View>
                                                <View style={{ marginTop: 15 }}>
                                                      <Text style={styles.headerText}>CỞI MỞ, HAM HỌC HỎI</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desO.typeO}</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desO.describeO}</Text>
                                                      {
                                                            this.props.desO.jobO ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desO.jobO}</Text> : null
                                                      }
                                                </View>
                                                <View style={{ marginTop: 15 }}>
                                                      <Text style={styles.headerText}>DỄ CHẤP NHẬN</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desA.typeA}</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desA.describeA}</Text>
                                                      {
                                                            this.props.desA.jobA ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desA.jobA}</Text> : null
                                                      }
                                                </View>
                                                <View style={{ marginTop: 15 }}>
                                                      <Text style={styles.headerText}>TẬN TÂM</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mức độ:</Text> {desC.typeC}</Text>
                                                      <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Mô tả:</Text> {desC.describeC}</Text>
                                                      {
                                                            this.props.desC.jobC ? <Text style={styles.textBlock}><Text style={{ fontWeight: '600' }}>Nghề nghiệp:</Text> {desC.jobC}</Text> : null
                                                      }
                                                </View>
                                                <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: "center" }}>
                                                      <Button style={{ width: 100, height: 50, alignItems: 'center', justifyContent: "center", backgroundColor: '#327032', borderRadius: 23 }}
                                                            onPress={this.tryAgain}
                                                      >
                                                            <Text style={{ color: 'white' }}>Try again</Text>
                                                      </Button>
                                                </View>
                                          </ScrollView>
                                    </View>
                        }
                  </View>
            );
      }

      tryAgain = () => {
            Alert.alert(
                  'Notice!',
                  'Do you want try it again?',
                  [
                        { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'YES', onPress: () => Actions.reset('screen1') },
                  ],
                  { cancelable: false }
            )
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white',
      },
      textBlock: { textAlign: 'justify', lineHeight: 25 },
      headerText: { color: '#327032', fontWeight: '600', lineHeight: 36 }
});

export default Result;
