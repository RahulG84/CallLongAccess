import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RequirementTopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      <View style={styles.backArrow}>
        <Ionicons
          name="ios-arrow-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.reminderView}>
        <TouchableOpacity>
          <FontAwesome name="bell-o" size={30} onPress={() => {}} />
        </TouchableOpacity>
      </View>
      <View style={styles.deleteView}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="delete-outline"
            size={35}
            onPress={() => {}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequirementTopBar;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  backArrow: {
    marginLeft: 15,
    marginTop: 10,
  },
  reminderView: {
    marginTop: 15,
    marginLeft: 250,
  },
  deleteView: {
    marginTop: 12,
    marginLeft: 20,
  },
});
