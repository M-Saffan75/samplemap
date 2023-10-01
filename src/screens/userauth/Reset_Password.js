import React, { useContext } from 'react';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';

const Reset_Password = ({ navigation }) => {

    const theme = useContext(themeContext);

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.replace('Login')}>
                        <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                    <View style={styles.short_container}>
                        <View style={styles.name_line}>
                            <Text style={[styles.login_name, { color: theme.colorwhite }]}>Reset Password</Text>
                            <Text style={[styles.login_line, { backgroundColor: theme.colorblue }]}></Text>
                        </View>

                        <Text style={[styles.your_name, { color: theme.colorwhite }]}>New Password</Text>
                        <View style={[styles.inpt_container, { borderColor: theme.colorwhite }]}>
                            <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='New Password' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                        </View>

                        <Text style={[styles.pswd_name, { color: theme.colorwhite }]}>Confirm Password</Text>
                        <View style={[styles.inpt_container, { borderColor: theme.colorwhite }]}>
                            <MaterialCommunityIcons name='key-variant' style={[styles.icon, { color: theme.colorblue }]} />
                            <TextInput placeholder='Confirm Password' placeholderTextColor={COLOURS.grey} style={styles.name_inpt} />
                        </View>

                        <TouchableOpacity activeOpacity={0.6} style={[styles.login_here_btn, { backgroundColor: COLOURS.blue }]} onPress={() => navigation.replace('Login')}>
                            <Text style={[styles.login_here, { color: COLOURS.white }]}>Password Reset </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>

        </>
    )
}

export default Reset_Password

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
    },

    btn_align: {
        marginHorizontal: 20,
        alignSelf: 'flex-start',
    },

    name: {
        width: 40,
        padding: 5,
        fontSize: 30,
        marginTop: 30,
        borderRadius: 7,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        backgroundColor: COLOURS.Lightgrey,
    },


    short_container: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    login_name: {
        fontSize: 23,
        marginTop: 60,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    name_line: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    login_line: {
        top: 5,
        right: 60,
        height: 4,
        width: 45,
        borderRadius: 10,
        backgroundColor: COLOURS.blue,
    },


    your_name: {
        fontSize: 17,
        marginTop: 60,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    pswd_name: {
        fontSize: 17,
        marginTop: 30,
        paddingBottom: 10,
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
    },

    inpt_container: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderColor: COLOURS.blue,
    },

    icon: {
        width: 20,
        fontSize: 17,
        color: COLOURS.blue,
    },


    login_here_btn: {
        height: 50,
        padding: 15,
        marginTop: 40,
        width: '100%',
        borderRadius: 30,
        backgroundColor: COLOURS.blue,
    },

    login_here: {
        fontSize: 13,
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Medium',
    },

})