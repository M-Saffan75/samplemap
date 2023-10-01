import styles from './modal'
import themeContext from '../Toggle/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import React, { useState, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Modal, TouchableOpacity, Image, useColorScheme, TouchableWithoutFeedback } from 'react-native'


const ModalBox = ({ modalVisible, setModalVisible }) => {

    const colorScheme = useColorScheme();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState('');

    useEffect(() => {
        const retrieveTheme = async () => {
            const theme = await AsyncStorage.getItem('THEME');
            setDarkMode(JSON.parse(theme));
        };
        retrieveTheme();
    }, []);

    const SystemTrigger = async () => {
        setDarkMode(null);
        await AsyncStorage.removeItem('THEME');
        EventRegister.emit('changeTheme', null);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };

    const DarkTrigger = async () => {
        setDarkMode(true);
        await AsyncStorage.setItem('THEME', JSON.stringify(true));
        EventRegister.emit('changeTheme', true);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };

    const LightTrigger = async () => {
        setDarkMode(false);
        await AsyncStorage.setItem('THEME', JSON.stringify(false));
        EventRegister.emit('changeTheme', false);
        setTimeout(() => {
            setModalVisible(false);
        }, 100);
    };


    return (
        <>
            <View style={styles.container}>
                <Modal visible={modalVisible} animationType="fade" transparent={true}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>
                            <View style={[styles.modal, { backgroundColor: theme.lightblack }]}>
                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: theme.colorblue }]} onPress={SystemTrigger}>
                                    <Text style={[styles.theme_name, { color: theme.colorwhite }]}>System Default</Text>
                                    <Image
                                        source={
                                            colorScheme === 'default' || darkMode === null
                                                ? require('../images/select.png')
                                                : require('../images/non_select.png')
                                        }
                                        style={styles.theme_select_image}
                                        tintColor={theme.colorblue}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: theme.colorblue }]} onPress={DarkTrigger} value={darkMode}>
                                    <Text style={[styles.theme_name, { color: theme.colorwhite }]}>Dark </Text>
                                    {!darkMode ? < Image source={require('../images/non_select.png')} style={styles.theme_select_image} tintColor={theme.colorblue} />
                                        :
                                        <Image source={require('../images/select.png')} style={styles.theme_select_image} tintColor={theme.colorblue} />
                                    }
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.8} style={[styles.theme_select, { borderColor: theme.colorblue }]} onPress={LightTrigger}>
                                    <Text style={[styles.theme_name, { color: theme.colorwhite }]}>Light</Text>
                                    {darkMode === false ? (
                                        <Image source={require('../images/select.png')} style={styles.theme_select_image} tintColor={theme.colorblue} />
                                    ) : (
                                        <Image source={require('../images/non_select.png')} style={styles.theme_select_image} tintColor={theme.colorblue} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </>

    )
}

export default ModalBox