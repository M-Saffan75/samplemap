import React, { useContext } from 'react';
import Home from '../screens/userhome/Home';
import List from '../screens/userhome/List';
import { COLOURS } from '../ThemeColour/Theme';
import Drawer from '../screens/userhome/Drawer';
import { Text, View, Image, } from 'react-native';
import themeContext from '../Toggle/themeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Profile_Here = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='Drawer' >
            <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
    )
}

const HomeHere = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }
        } initialRouteName='List' >
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    )
}


const BottomNav = () => {

    const theme = useContext(themeContext);
    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: COLOURS.red,
                    tabBarInactiveTintColor: COLOURS.blue,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        tabBarPosition: 'bottom',
                        keyboardHidesTabBar: true,
                        height: responsiveHeight(8.5),
                        backgroundColor: theme.lightblack,
                    },
                }}>

                <Tab.Screen name="HomeHere" component={HomeHere} options={{
                    tabBarIcon: ({ focused }) => (
                        < View style={{ position: 'absolute', top: '25%', }}>
                            <Image
                                source={focused ? require('../Filled/home.png') : require('../Bold/home.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey,
                            }}
                        >
                            Home
                        </Text>
                    )
                }} />


                <Tab.Screen name="Profile_Here" component={Profile_Here} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '25%' }}>
                            <Image
                                source={focused ? require('../Filled/user.png') : require('../Bold/user.png')}
                                style={{ height: responsiveWidth(7), width: responsiveWidth(7) }}
                                tintColor={focused ? theme.colorblue : COLOURS.grey}
                            />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontFamily: 'Roboto-Bold',
                                textTransform: 'capitalize',
                                letterSpacing: responsiveWidth(.2),
                                paddingBottom: responsiveWidth(3),
                                fontSize: responsiveFontSize(1.4),
                                color: focused ? theme.colorblue : COLOURS.grey
                            }}
                        >
                            profile
                        </Text>
                    )
                }} />

            </Tab.Navigator>
        </>

    )
}
export default BottomNav
