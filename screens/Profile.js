import {firebase} from '@react-native-firebase/auth';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
//import {pickImage, askForPermission, uploadImage} from '../utils';
//import {auth, db} from '../firebase';
//import {updateProfile} from '@firebase/auth';
//import {doc, setDoc} from '@firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function Profile() {
  const [displayName, setDisplayName] = useState('');
  const navigation = useNavigation();
  console.log(auth().currentUser._user.email);
  useEffect(() => {
    (async () => {
      //  const status = await askForPermission();
      // setPermissionStatus(status);
    })();
  }, []);

  //   const {
  //     theme: {colors},
  //   } = useContext(GlobalContext);

  async function handlePress() {
    const update = {
      displayName,
      photoURL: '',
    };
    try {
      await Promise.all([
        firebase.auth().currentUser.updateProfile(update),
        //Using the add method will automatically set a random unique doc ID.
        //If you want to set a doc ID explicitly, you can use the set method instead
        firestore().collection('users').add({
          displayName,
          email: auth().currentUser._user.email,
        }),
      ]);
      navigation.navigate('CHATS');
    } catch (e) {
      console.log(e);
      console.log('display name update error');
    }
  }

  return (
    <React.Fragment>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          paddingTop: 40,
          padding: 20,
        }}>
        <Text style={{fontSize: 22, color: 'pink'}}>Profile Info</Text>
        <Text style={{fontSize: 14, color: 'black', marginTop: 20}}>
          Please provide your name and an optional profile photo
        </Text>
        <TextInput
          placeholder="Type your name"
          value={displayName}
          onChangeText={setDisplayName}
          style={{
            borderBottomColor: 'black',
            marginTop: 40,
            borderBottomWidth: 2,
            width: '100%',
          }}
        />
        <View style={{marginTop: 'auto', width: 80}}>
          <Button
            title="Next"
            color={'red'}
            onPress={handlePress}
            disabled={!displayName}
          />
        </View>
      </View>
    </React.Fragment>
  );
}
