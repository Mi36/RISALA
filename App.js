import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import ContextWrapper from './context/ContextWrapper';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
const Stack = createNativeStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(currentUser) {
    setUser(currentUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <ContextWrapper>
      <NavigationContainer>
        {!user ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SIGIN" component={SignIn} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="PROFILE" component={Profile} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
