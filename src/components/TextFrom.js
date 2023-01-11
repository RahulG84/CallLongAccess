import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextFrom = ({value, setValue, placeholder, secureTextEntry, error}) => {
  return (
    <View>
      <TextInput
        style={styles.cutumStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={{color: 'red', paddingLeft: 20}}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cutumStyle: {
    backgroundColor: '#03DAC5',
    width: 350,
    height: 50,
    marginVertical: 8,
    marginHorizontal: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    borderColor: 'white',
    color: 'black',
  },
});

export default TextFrom;
