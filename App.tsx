import React, { useEffect, createContext, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { USER_STATE_INIT, userReducer } from './src/store/reducers';
import RootNavigator from './src/navigators';

export const userContext = createContext<any>([])

function App(): JSX.Element {
  const [userInfor, userDispatch] = useReducer(userReducer, USER_STATE_INIT);

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <userContext.Provider value={{ userInfor, userDispatch }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </userContext.Provider>
    </>
  );
}

export default App;
