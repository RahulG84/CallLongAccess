import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RequirementTopBar from '../components/RequirementTopBar';
import ReqInput from '../components/ReqInput';

const Requirements = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.1}}>
        <RequirementTopBar />
      </View>
      <View style={{flex: 0.9}}>
        <ReqInput />
      </View>
    </View>
  );
};

export default Requirements;

const styles = StyleSheet.create({});
