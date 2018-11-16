/**
* Created by thanhlt on Tue Oct 09 2018
* Copyright (c) 2018 github.com/letrinhthanhvn
*/

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
   View,
   Text,
   Image,
   StyleSheet,
   TextInput,
   ScrollView,
   TouchableOpacity,
   Dimensions,
   ActivityIndicator
} from 'react-native';
// import LoginComponent from '../../screens/Login';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-material-kit/lib/mdl';
import Modal from 'react-native-modal';
// import Register from './register';
// import { createLoginSelector } from '../container/jobSolutions/selector';
import { login } from '../redux/actions/jobSolutions';
// import KeyboardScroll from '../components/KeyboardScroll';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class Login extends PureComponent {

   constructor(props) {
      super(props);
      this.state = {
         isShowModal: false,
         isPassword: false,
         userName: '',
         passWord: '',
         isLoading: false
      }
   }

   renderUserName = () => {
      return (
         <View style={[styles.viewTxtInput]}>
            <Icon name='smartphone' size={24} color='white' />
            <TextInput
               style={{ height: 45, width: '80%', paddingLeft: 10, color: 'white' }}
               placeholder='Username'
               placeholderTextColor='rgba(255, 255, 255, 0.5)'
               onChangeText={(text) => this.setState({ userName: text })}
               // value={this.state.text}
               // style={styles.typeMusicText}
               returnKeyType='done'
               autoCorrect={false}
               selectionColor='white'
               autoCapitalize='none'
               // onSubmitEditing={() => {
               //    if (this.state.text === '') {
               //       //  alert('Vui lòng nhập tên thiết bị!')
               //    }
               //    else {
               //       WifiAudio.rename(this.props.ip, this.state.text)
               //       this.props.onBack(this.state.text)
               //       Actions.pop()
               //    }
               // }}
               maxLength={20}
            />
         </View>
      )
   }

   renderPassword = () => {
      return (
         <View style={[styles.viewTxtInput, { marginTop: 20 }]}>
            <Icon name='lock' size={24} color='white' />
            <TextInput
               style={{ height: 45, width: '75%', paddingLeft: 10, color: 'white' }}
               placeholder='Password'
               placeholderTextColor='rgba(255, 255, 255, 0.5)'
               onChangeText={(text) => this.setState({ passWord: text })}
               // value={this.state.text}
               // style={styles.typeMusicText}
               returnKeyType='done'
               autoCorrect={false}
               secureTextEntry={this.state.isPassword}
               selectionColor='white'
               underlineColorAndroid='transparent'
               autoCapitalize='none'
               // onSubmitEditing={() => {
               //    if (this.state.text === '') {
               //       //  alert('Vui lòng nhập tên thiết bị!')
               //    }
               //    else {
               //       WifiAudio.rename(this.props.ip, this.state.text)
               //       this.props.onBack(this.state.text)
               //       Actions.pop()
               //    }
               // }}
               maxLength={20}
            />
            <TouchableOpacity onPress={this.showPassword}>
               <Icon name={this.state.isPassword ? 'visibility-off' : 'visibility'} size={24} color='white' />
            </TouchableOpacity>
         </View>
      )
   }

   render() {
      return (
         <View style={{ flex: 1, backgroundColor: '#327032' }}>
            <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false}>
            {
               this.state.isLoading ? 
               <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 400, backgroundColor: 'rgba(0, 0, 0, 0.5)',  }}>
               <ActivityIndicator size="large" color='white' style={{ flex: 1 }} />
            </View>
            : null
            }
            <View style={{ flex: 1, zIndex: 300, paddingTop: 200 }} >
               {/* <View style={{ flex: 2, backgroundColor: "red" }}> */}
               <View style={{ flex: 1, alignItems: 'center' }}>
                  {
                     this.renderUserName()
                  }
                  {
                     this.renderPassword()
                  }
               </View>
               <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button style={[styles.viewTxtInput, { alignItems: 'center', justifyContent: 'center', backgroundColor: '#9AC230', overflow: 'hidden' }]}
                     onPress={this.signIn}>
                     <Text style={{ color: "white", fontSize: 18, }}>Sign in</Text>
                  </Button>
                  <TouchableOpacity style={{ width: '60%', alignItems: 'center', marginTop: 15, height: 20 }}>
                     <Text style={{ color: 'white', fontSize: 12 }}>Forgot password</Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.viewRegister}>
                  <Text style={styles.textSmall}>Don't have an account?</Text>
                  <TouchableOpacity style={{ height: '80%', justifyContent: 'center' }}
                     onPress={this.signUp}
                  >
                     <Text style={[styles.textSmall, { fontWeight: '500' }]}> Sign up</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
         </View>
         // <KeyboardScroll>
         
         // </KeyboardScroll>
      )
   }

   signUp = () => {
      this.setState({
         isShowModal: true
      })
   }

   hideModal = () => {
      this.setState({
         isShowModal: false
      })
   }

   showPassword = () => {
      this.setState({
         isPassword: !this.state.isPassword
      })
   }

   signIn = () => {
      console.log('username, password', this.state.userName, this.state.passWord)

      if (this.state.userName == '') {
         alert('Bạn chưa điền username!')
      } else if (this.state.passWord == '') {
         alert("Bạn chưa điền mật khẩu!")
      } else {
         this.props.login({ username: this.state.userName, password: this.state.passWord })
         this.setState({
            isLoading: true
         })
         setTimeout(() => {
            this.setState({
               isLoading: false
            })
            if (!this.props.isLogin && this.props.isLoginFailed && this.props.check_send == 0) {
               Actions.screen1()
            } else if (this.props.check_send == 1) {
               Actions.result()
            } else {
               alert("Tai khoan mat khau cua ban khong dung!")
            }
         }, 500)
      }
   }
}

const styles = StyleSheet.create({
   viewTxtInput: {
      width: 310,
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 23,
      alignItems: 'center',
      paddingLeft: 20,
      flexDirection: 'row'
   },

   textSmall: {
      color: 'white',
      fontSize: 13
   },

   viewRegister: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
   },
   viewDrawer: {
      flex: 1,
      // backgroundColor: 'green'
   }
})

const mapDispathToProps = {
   login
}

const mapStateToProps = (state) => {
   return {
      // user: state.jobSolutions.user,
      isLogin: state.jobSolutions.isLogin,
      isLoginFailed: state.jobSolutions.isLoginFailed,
      check_send: state.jobSolutions.result.check_send
   }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);
