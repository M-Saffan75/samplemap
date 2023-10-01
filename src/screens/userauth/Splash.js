import themeContext from '../../Toggle/themeContext'
import React, { useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, SafeAreaView, Image, View, StatusBar } from 'react-native'

const Splash = ({ navigation }) => {

    const theme = useContext(themeContext);

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000);
    }, [])

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
                    <Image source={require('../../images/splash_here.png')} style={styles.splash_img} resizeMode='contain'/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Splash

const styles = StyleSheet.create({

    splash_img: {
        height: '100%',
        width: '100%',
    },

    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeeee'
    },
})