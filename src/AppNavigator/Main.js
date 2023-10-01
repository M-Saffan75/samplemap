import React from 'react';
import BottomNav from './BottomNav';
import Faq from '../screens/privacy/Faq';
import Otp from '../screens/userauth/Otp';
import List from '../screens/userhome/List';
import Home from '../screens/userhome/Home';
import Login from '../screens/userauth/Login';
import Drawer from '../screens/userhome/Drawer';
import Splash from '../screens/userauth/Splash';
import Register from '../screens/userauth/Register';
import Edit_Profile from '../screens/userauth/Edit_Profile';
import Privacy_Policy from '../screens/privacy/Privacy_Policy';
import Reset_Password from '../screens/userauth/Reset_Password';
import Change_Password from '../screens/userauth/Change_Password';
import Forgot_Password from '../screens/userauth/Forgot_Password';
import Terms_Conditions from '../screens/privacy/Terms_Conditions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Main = () => {

    const Stack = createNativeStackNavigator();
 
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="Faq" component={Faq} />
                <Stack.Screen name="List" component={List} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Drawer" component={Drawer} /> 
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="BottomNav" component={BottomNav} />
                <Stack.Screen name="Edit_Profile" component={Edit_Profile} />
                <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} /> 
                 <Stack.Screen name="Reset_Password" component={Reset_Password} />
                <Stack.Screen name="Forgot_Password" component={Forgot_Password} />
                <Stack.Screen name="Change_Password" component={Change_Password} />
                <Stack.Screen name="Terms_Conditions" component={Terms_Conditions} />
            </Stack.Navigator>
        </>
    )
}

export default Main
