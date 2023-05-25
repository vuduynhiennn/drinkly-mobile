import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React  from 'react';
import { useTheme } from 'react-native-paper';
import Home from '../screens/home/Home';
import HomeIcon from '../assets/icons/HomeIcon';
import Cart from '../screens/cart/cart';
import CartIcon from '../assets/icons/CartIcon';
import Favorite from '../screens/favorite/Favorite';
import FavoriteIcon from '../assets/icons/FavoriteIcon';
import Profile from '../screens/profile/Profile';
import ProfileIcon from '../assets/icons/ProfileIcon';
import Checkout from '../screens/checkout/checkout';

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
                    position: "absolute",
                    bottom: 0
                }
            }}
        >
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <HomeIcon display={true} /> : <HomeIcon display={false} />
                    )

                }}
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <CartIcon display={true} /> : <CartIcon display={false} />
                    ),
                }}
            />
            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <FavoriteIcon display={true} /> : <FavoriteIcon display={false} />

                    ),
                }}
            />
            <Tab.Screen name="TrackOrder" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <ProfileIcon display={true} /> : <ProfileIcon display={false} />
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

export default TabNavigator