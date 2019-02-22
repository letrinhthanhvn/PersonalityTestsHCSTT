import React, { PureComponent } from 'react';
import {
   StyleSheet, View, Text,
   Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width;

class TestSwiper extends PureComponent {

   constructor(props) {
      super(props)

      this.state = {
         entries: [1, 2, 3, 4, 5]
      }
   }

   _renderItem({ item, index }) {
      return (
         <View style={styles.slide}>
            <Text style={styles.title}>Hello {index}</Text>
         </View>
      );
   }

   render() {
      return (
         <View style={styles.container}>
            <Carousel
               ref={(c) => { this._carousel = c; }}
               data={this.state.entries}
               renderItem={this._renderItem}
               sliderWidth={SCREEN_WIDTH}
               itemWidth={SCREEN_WIDTH}
               layout={'default'}
            />
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'steelblue',
      justifyContent: 'center',
      alignItems: 'center'
   },
   slide: {
      width: SCREEN_WIDTH,
      height: 200,
      backgroundColor: 'red'
   }
});

export default TestSwiper;
