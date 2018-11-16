import React, { Component } from 'react';

import {
    AsyncStorage,
    ActivityIndicator,
    View
} from 'react-native';

import { Router, Scene, } from 'react-native-router-flux';
import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';
import Screen3 from './src/screens/screen3';
import Screen4 from './src/screens/screen4';
import Screen5 from './src/screens/screen5';
import Screen6 from './src/screens/screen6';
import Gender from './src/screens/gender';
import Result from './src/screens/result';
import Login from './src/screens/login';
import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasUserName: false,
            isLoaded: false
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('username').then((username) => {
            // console.log('usernameAsync', username)
            setTimeout(() => {
                this.setState({ hasUserName: username !== null, isLoaded: true })
            // this.props.getCandidateIdLocal()
            }, 200);
            
        });
    }

    render() {
        console.log('check-send', this.props.check_send)
        if (!this.state.isLoaded) {
            return (
                <ActivityIndicator />
            )
        } else {
            return (
                <View style={{ flex: 1, }}>
                <Router >
                    <Scene
                        key='root'
                        hideNavBar
                        // initial
                    >
                            <Scene
                                key='login'
                                component={Login}
                                swipeEnabled={false}
                                panHandlers={null}
                                initial={!this.state.hasUserName}
                            />
                            <Scene
                                key='screen1'
                                component={Screen1}
                                swipeEnabled={false}
                                panHandlers={null}
                                initial={this.state.hasUserName && this.props.check_send == 0}
                            />
                            <Scene
                                key='screen2'
                                // title='Categories'
                                component={Screen2}
                                swipeEnabled={false}
                                panHandlers={null}
                            //initial
                            />
                            <Scene
                                key='screen3'
                                component={Screen3}
                                swipeEnabled={false}
                                panHandlers={null}
                                hideNavBar
                            />
                            <Scene
                                key='screen4'
                                component={Screen4}
                                swipeEnabled={false}
                                panHandlers={null}
                            // initial
                            />
                            <Scene
                                key='screen5'
                                component={Screen5}
                                swipeEnabled={false}
                                panHandlers={null}
                            // initial
                            />
                            <Scene
                                key='screen6'
                                component={Screen6}
                                swipeEnabled={false}
                                panHandlers={null}
                            //    initial
                            />
                            <Scene
                                key='gender'
                                component={Gender}
                                swipeEnabled={false}
                                panHandlers={null}
                            />
                            <Scene
                                key='result'
                                component={Result}
                                swipeEnabled={false}
                                panHandlers={null}
                                initial={this.props.check_send == 1}
                            />
                    </Scene>
                </Router>
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => {
    // console.log('genderCurrent', state.jobSolutions.result[])
    return {
        check_send: state.jobSolutions.result.check_send
    }
}

export default connect(mapStateToProps)(App)