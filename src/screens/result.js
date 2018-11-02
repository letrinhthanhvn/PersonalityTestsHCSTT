import React, { PureComponent } from 'react';
import {
      StyleSheet, View, Text,
      ScrollView,
      RefreshControl,
      ActivityIndicator,
      Dimensions,
      StatusBar
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
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
                                          <ScrollView style={{paddingLeft: 15, paddingRight: 15}}> 
                                                <View style={{marginTop: 15}}>
                                                      
                                                            <Text style={styles.headerText}>NHIỄU TÂM</Text>
                                                            <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mức độ:</Text> {desN.typeN}</Text>
                                                            <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mô tả:</Text> {desN.describeN}</Text>
                                                      
                                                </View>
                                                
                                                <View style={{marginTop: 15}}>
                                                      <Text style={styles.headerText}>HƯỚNG NGOẠI</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mức độ:</Text> {desE.typeE}</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mô tả:</Text> {desE.describeE}</Text>
                                                </View>
                                                <View style={{marginTop: 15}}>
                                                      <Text style={styles.headerText}>CỞI MỞ, HAM HỌC HỎI</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mức độ:</Text> {desO.typeO}</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mô tả:</Text> {desO.describeO}</Text>
                                                </View>
                                                <View style={{marginTop: 15}}>
                                                      <Text style={styles.headerText}>DỄ CHẤP NHẬN</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mức độ:</Text> {desA.typeA}</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mô tả:</Text> {desA.describeA}</Text>
                                                </View>
                                                <View style={{marginTop: 15}}>
                                                      <Text style={styles.headerText}>TẬN TÂM</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mức độ:</Text> {desC.typeC}</Text>
                                                      <Text style={styles.textBlock}><Text style={{fontWeight: '600'}}>Mô tả:</Text> {desC.describeC}</Text>
                                                </View>
                                                
                                          </ScrollView>
                                    </View>
                        }

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white',
      },
      textBlock: {textAlign: 'justify', lineHeight: 25},
      headerText: {color: '#327032', fontWeight: '600', lineHeight: 36}
});

export default Result;
