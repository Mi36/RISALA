import {useEffect, useState} from 'react';
import {check, PERMISSIONS, request} from 'react-native-permissions';

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const status = await check(PERMISSIONS.ANDROID.READ_CONTACTS);
      if (status === 'unavailable') {
        return null;
      } else if (status === 'denied') {
        await request(PERMISSIONS.ANDROID.READ_CONTACTS);
      } else if (status === 'granted') {
        return 'granted';
      } else if (status === 'blocked') {
        //never ask again checked aanekil blocked
        //allenkil keep denied
      }
    })();
    console.log('worked');
  }, []);
  return contacts;
}

function mapContactsToUser(contact) {
  return {
    contcatName: 'ss',
  };
}
