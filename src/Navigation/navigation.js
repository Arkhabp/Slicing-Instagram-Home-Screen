import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import SettingScreen from '../Screen/SettingScreen/SettingScreen';

const  Tab = createBottomTabNavigator();
 
const Router = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home"
                component = {HomeScreen}
                options = {{
                    headerShown : false,
                    tabBarIcon : ({color, size}) => (
                        <MaterialCommunityIcons
                        style = {{marginHorizontal: -5}}
                        name = "home"
                        color = {color}
                        size = {30}
                        />            
                    )
                }}/>
                <Tab.Screen
                name = "Settings"
                component = {SettingScreen}
                options = {{
                    headerShown : false,
                    tabBarIcon : ({color, size}) => (
                        <MaterialCommunityIcons
                        style = {{marginHorizontal: -5}}
                        name = "cog"
                        color = {color}
                        size = {30}
                        />            
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router;