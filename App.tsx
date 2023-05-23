import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authencation from './screens/authencation/authencation';
import Onboarding from './screens/onboarding/onboarding';



const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none"
        }}
      >
        <Stack.Screen name="Onboarding"
                      component={Onboarding} 
        
        />
        <Stack.Screen name="Authencation" 
                      component={Authencation} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
