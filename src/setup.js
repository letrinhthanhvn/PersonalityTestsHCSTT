import React, { PureComponent } from 'react';

import {

} from 'react-native';

import { Provider } from 'react-redux';
import App from '../App';
import configureStore from './redux/configureStore';

export default class Setup extends PureComponent {
   constructor(props) {
      super(props);
   
      this.state = {
         // isLoading: true,
         store: configureStore(() => {

         })
      }
   }

   render() {
      let { isLoading, store } = this.state;

      // if (isLoading) {
      //    return <Loading backgroundColor={common().BACKGROUND_GRADIENT1} colorIndicator={common().COLOR_INDICATOR} />
      // }

      return (
         <Provider store={store}>
            <App />
         </Provider>
      );
   }
}