import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Alert,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CallLogs from 'react-native-call-log';
import {useNavigation} from '@react-navigation/native';

const CallLogList = () => {
  const [listData, setListDate] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      if (Platform.OS !== 'ios') {
        try {
          //Ask for runtime permission
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
              title: 'Call Log Example',
              message: 'Access your call logs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            CallLogs.loadAll().then(c => setListDate(c));
            CallLogs.load(3).then(c => console.log(c));
          } else {
            Alert.alert('Call Log permission denied');
          }
        } catch (e) {
          Alert.alert(e);
        }
      } else {
        Alert.alert(
          `Sorry! You can’t get call logs in iOS devices
             because of the security concern`,
        );
      }
    }
    fetchData();
  }, []);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Requirements')}>
          <View>
            <Text style={styles.textStyle}>
              Name : {item.name ? item.name : 'NA'}
              {'\n'}
              DateTime : {item.dateTime}
              {'\n'}
              Duration : {item.duration}
              {'\n'}
              PhoneNumber : {item.phoneNumber}
              {'\n'}
              RawType : {item.rawType}
              {'\n'}
              Timestamp : {item.timestamp}
              {'\n'}
              Type : {item.type}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          How to Access Call Logs of Android Devices from React Native App
        </Text>
        <FlatList
          data={listData}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CallLogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
  },
});
