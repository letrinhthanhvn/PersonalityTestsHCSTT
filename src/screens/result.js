import React, { PureComponent } from 'react';
import {
   StyleSheet, View, Text,
   ScrollView,
   RefreshControl,
   ActivityIndicator
} from 'react-native';

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
                     <ActivityIndicator size="large" color="white" style={{ flex: 1 }} />
                  </View>
                  :
                  <ScrollView style={{ flex: 1 }}>
                     <View>
                        <Text>Nhiễu tâm: mức độ {desN.typeN}</Text>
                        <Text>Mô tả: {desN.describeN}</Text>
                     </View>
                     <View>
                        <Text>Hướng ngoại: mức độ {desE.typeE}</Text>
                        <Text>Mô tả: {desE.describeE}</Text>
                     </View>
                     <View>
                        <Text>Cởi mở, ham học hỏi: mức độ{desO.typeO}</Text>
                        <Text>Mô tả: {desO.describeO}</Text>
                     </View>
                     <View>
                        <Text>Dễ chấp nhận: mức độ {desA.typeA}</Text>
                        <Text>Mô tả: {desA.describeA}</Text>
                     </View>
                     <View>
                        <Text>Tận tâm: mức độ {desC.typeC}</Text>
                        <Text>Mô tả: {desC.describeC}</Text>
                     </View>
                  </ScrollView>
            }

         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
   }
});

export default Result;
