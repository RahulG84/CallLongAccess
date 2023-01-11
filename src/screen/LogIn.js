import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TextFrom from '../components/TextFrom';
import Button from '../components/Button';

const LogIn = ({navigation}) => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onPressSignInButton = () => {
    let box = {};
    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regxPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (email === ' ' || !regEmail.test(email)) {
      box.userName = 'Please Enter Valid Mail';
    }
    if (password === ' ' || !regxPassword.test(password)) {
      box.password = 'Please Enter min. 6 and max. 16 characters';
    } else {
      Alert.alert('Fill All Creditional');
    }
    setError(box);
  };

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require('../assests/Image/SamarathLogo.jpeg')}
      />
      <Text style={styles.text}>Samarath Distributor's</Text>
      <TextFrom
        placeholder="Email"
        value={email}
        error={error.userName}
        setValue={setMail}
      />
      <TextFrom
        placeholder="Password"
        value={password}
        error={error.password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Button onPress={onPressSignInButton} text="Sign In" />
      <Button
        onPress={() => Alert.alert('Something Wrong')}
        text="Forget Password ?"
        typeOfButton="TERTIARY"
        secureTextEntry={true}
      />
      <Button
        onPress={() => Alert.alert('Login With Email And Password')}
        typeOfButton="TERTIARY"
        text="Sign In With Facebook"
      />
      <Text style={styles.orText}>
        ------------------------- or -------------------------
      </Text>
      <Button
        onPress={() => Alert.alert('Login With Email And Password')}
        typeOfButton="TERTIARY"
        text="Sign In With Google"
      />
      <View style={styles.condition}>
        <Text style={styles.conditionSignIn}>
          You Don't have an account? {}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.conditionSignIn, {color: '#F9AA33'}]}>
            Let's Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'white',
    backgroundColor: '#6200EE',
  },
  logo: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginHorizontal: 80,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFBE6',
    textAlign: 'center',
  },
  condition: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    justifyContent: 'center',
  },
  conditionSignIn: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: '#03DAC5',
  },
});

export default LogIn;
