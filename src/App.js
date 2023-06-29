import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Router from './Navigation/navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const App = () => {
  return (
        <View style={{backgroundColor: 'blue', flex:1}}>
          <StatusBar barStyle="light-content" backgroundColor= 'gray'/>
          <Router/>
        </View>
  );
};

const styles = StyleSheet.create({
});

export default App;
