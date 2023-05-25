import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding/onboarding';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';
import ForgetPassword from '../screens/forget-password/forgetPassword';
import TabNavigator from './tab-navigator';
import Authencation from '../screens/authencation/authencation';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: "none"
            }}
        >
            <Stack.Screen
                name="Onboarding"
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
    )
}

export default RootNavigator