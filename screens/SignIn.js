import React, {useContext, useState} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
//import Context from '../context/Context';
//import {signIn, signUp} from '../firebase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('signUp');
  // const {
  //   theme: {colors},
  // } = useContext(Context);

  function handlePress() {
    if (mode === 'signUp') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
    if (mode === 'signIn') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text style={{color: 'red', fontSize: 24, marginBottom: 20}}>
        Welcome to RISALA
      </Text>
      {/* <Image
        source={require('../assets/welcome-img.png')}
        style={{width: 180, height: 180}}
        resizeMode="cover"
      /> */}
      <View style={{marginTop: 20}}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 2,
            width: 200,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <View style={{marginTop: 20}}>
          <Button
            title={mode === 'signUp' ? 'Sign Up' : 'Sign in'}
            disabled={!password || !email}
            color={'grey'}
            onPress={handlePress}
          />
        </View>
        <TouchableOpacity
          style={{marginTop: 15}}
          onPress={() =>
            mode === 'signUp' ? setMode('signIn') : setMode('signUp')
          }>
          <Text style={{color: 'black'}}>
            {mode === 'signUp'
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
