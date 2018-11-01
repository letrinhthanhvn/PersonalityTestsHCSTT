import React, { Component } from 'react';

import {
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

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene
                    key='root'
                >
                    <Scene
                        key="tab1"
                        hideNavBar
                        // transitionConfig={transitionConfig}
                        initial
                    // drawer
                    // drawerIcon={MenuIcon}
                    // contentComponent={Drawer}
                    // drawerWidth={300}
                    >
                        <Scene
                            key='screen1'
                            component={Screen1}
                            swipeEnabled={false}
                            panHandlers={null}
                            initial
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
                        //    initßial
                        />
                        <Scene
                            key='result'
                            component={Result}
                            swipeEnabled={false}
                            panHandlers={null}
                        //    initßial
                        />

                    </Scene>
                </Scene>
            </Router>
        )
    }
}