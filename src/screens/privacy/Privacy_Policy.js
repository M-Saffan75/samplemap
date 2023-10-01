import { privacypolicy } from '../../Backend/data';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/privacypolicy/privacypolicy';
import React, { useEffect, useState, useContext } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StatusBar, SafeAreaView, Text, Image, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'


const Privacy_Policy = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext)

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>

                {/* <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}> */}
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <Animatable.View style={styles.arrow_area}>
                        <View style={styles.nav_notifi}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.categories, { color: theme.colorwhite }]}>privacy policy</Text>
                        </View>
                    </Animatable.View>

                    <View style={styles.policy_area}>
                        <FlatList
                            data={privacypolicy}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <View>
                                    <Text style={[styles.heading, { color: theme.colorwhite }]}>{`${index + 1}. ${item.heading}`}</Text>
                                    <Text style={[styles.paragraph, { color: theme.colorwhite }]}>{item.paragraph_policy}</Text>
                                </View>
                            )}
                        />
                    </View>

                </ScrollView>
                {/* </View> */}
            </SafeAreaView>
        </>
    )
}

export default Privacy_Policy