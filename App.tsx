import React, { useEffect, createContext, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { USER_STATE_INIT, userReducer } from './src/store/userReducer';
import RootNavigator from './src/navigators';
import { PRODUCT_STATE_INIT, productReducer } from './src/store/productReducer';

export const userContext = createContext<any>([])
export const productContext = createContext<any>([])

function App(): JSX.Element {
  const [userInfor, userDispatch] = useReducer(userReducer, USER_STATE_INIT);
  const [products, productDispatch] = useReducer(productReducer, PRODUCT_STATE_INIT)
  ;
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <productContext.Provider value={{ products, productDispatch }}>
        <userContext.Provider value={{ userInfor, userDispatch }}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </userContext.Provider>
      </productContext.Provider>
    </>
  );
}

export default App;
