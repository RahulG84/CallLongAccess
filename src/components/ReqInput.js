import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const ReqInput = () => {
  return (
    <View>
      <View style={styles.name}>
        <TextInput placeholder="Full Name" />
      </View>
      <View style={styles.req}>
        <TextInput placeholder="Requirements" multiline={true} />
      </View>
    </View>
  );
};

export default ReqInput;

const styles = StyleSheet.create({
  name: {
    width: '80%',
    borderRadius: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  req: {
    width: '80%',
    borderRadius: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
});
