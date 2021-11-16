import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ContextWrapper from './context/ContextWrapper';
import SignIn from './screens/SignIn';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextWrapper>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SIGIN" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextWrapper>
  );
};

export default App;
