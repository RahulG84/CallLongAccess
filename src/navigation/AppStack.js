import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CallLogList from '../screen/CallLogList';
import Requirements from '../screen/Requirements';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CallLogList" component={CallLogList} />
      <Stack.Screen name="Requirements" component={Requirements} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
