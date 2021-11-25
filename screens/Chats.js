import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import GlobalContext from '../context/Context';

const Chats = () => {
  const {setRooms} = useContext(GlobalContext);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('rooms')
      .onSnapshot(querySnapshot => {
        // we can use filter here
        const parsedChats = querySnapshot.docs.map(documentSnapshot => {
          return {
            _id: documentSnapshot.id,
            name: '',
            ...documentSnapshot.data(),
            //userB: doc.data().participant.find((p)=>p.email===currentUser.email)
          };
        });

        setRooms(parsedChats);
      });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Text>chat</Text>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
