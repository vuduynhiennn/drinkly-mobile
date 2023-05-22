import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <View>
        <Text>hahaha</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
