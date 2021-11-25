import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useContacts from '../hooks/useHooks';
import Contacts from 'react-native-contacts';

const ContactsComponent = () => {
  useEffect(() => {
    Contacts.getAll().then(contacts => {
      console.log(contacts);
    });
  }, []);
  const contacts = useContacts();
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ContactsComponent;

const styles = StyleSheet.create({});
