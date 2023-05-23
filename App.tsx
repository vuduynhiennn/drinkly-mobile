import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authencation from './screens/authencation/authencation';
import Onboarding from './screens/onboarding/onboarding';
import Login from './screens/login/login';
import Signup from './screens/signup/signup';
import ForgetPassword from './screens/forget-password/forgetPassword';
import Cart from './screens/cart/cart';
import Checkout from './screens/checkout/checkout';
import CartIcon from './assets/icons/CartIcon';
import ProfileIcon from './assets/icons/ProfileIcon';
import Profile from './screens/profile/Profile';
import FavoriteIcon from './assets/icons/FavoriteIcon';
import Favorite from './screens/favorite/Favorite';
import Home from './screens/home/Home';
import HomeIcon from './assets/icons/HomeIcon';
import { useTheme } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function TabNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
        }
      }}
    >
      <Tab.Screen name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <HomeIcon display={true}/> : <HomeIcon display={false}/>
          )
      
        }}
      />
      <Tab.Screen name="Cart" component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <CartIcon display={true}/> : <CartIcon display={false}/>
          ),
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <FavoriteIcon display={true}/> : <FavoriteIcon display={false}/>

          ),
        }}
      />
      <Tab.Screen name="TrackOrder" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ProfileIcon display={true}/> : <ProfileIcon display={false}/>
          ),
        }}

      />
    <Tab.Screen
      name="Checkout"
      component={Checkout}
      options={{ tabBarButton: (props) => null }}
    />



    </Tab.Navigator>
  );
}


function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
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

          <Stack.Screen name="Login"
            component={Login}

          />

          <Stack.Screen name="Signup"
            component={Signup}

          />
          <Stack.Screen name="ForgetPassword"
            component={ForgetPassword}

          />

          <Stack.Screen
            component={TabNavigator}
            name="TabNavigator"
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default App;
