import styles from '../../css/selectionlist/list';
import { COLOURS } from '../../ThemeColour/Theme';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useEffect, useState, useContext } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { StatusBar, SafeAreaView, Text, Image, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'


const List = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext)

    const [value, setValue] = useState(null);

    const data = [
            { label: 'Drop Shipping', value: '0' },
            { label: 'Product Shipping', value: '1' },
            { label: 'Suits Shipping', value: '2' },
            { label: 'Music Instruments Shipping', value: '3' },
            { label: 'Electronics Shipping', value: '4' },
            { label: 'Furniture Shipping', value: '5' },
            { label: 'Food Delivery', value: '6' },
            { label: 'Clothing Shipping', value: '7' },
            { label: 'Cosmetics Shipping', value: '8' },
            { label: 'Artwork Shipping', value: '9' },
            { label: 'Books Shipping', value: '10' },
            { label: 'Jewelry Shipping', value: '11' },
            { label: 'Sports Equipment Shipping', value: '12' },
            { label: 'Toys Shipping', value: '13' },
            { label: 'Automotive Parts Shipping', value: '14' },
            { label: 'Medical Supplies Shipping', value: '15' },
            { label: 'Pet Supplies Shipping', value: '16' },
            { label: 'Gardening Supplies Shipping', value: '17' },
            { label: 'Office Supplies Shipping', value: '18' },
        ];
        
    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>

                    <Animatable.View style={styles.arrow_area}>
                        <View style={styles.nav_notifi}>
                            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                                <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                            </TouchableOpacity>
                            <Text style={[styles.categories, { color: theme.colorwhite }]}>selection list</Text>
                        </View>
                    </Animatable.View>
                    <View style={styles.note_bg}>
                        <Text style={[styles.note_text, { color: theme.colorblue }]}>here you can select your drop shipping, rider sharing and many more like these !</Text>
                    </View>

                    <View style={styles.dropdown_one}>
                        <Dropdown
                            style={{
                                color: COLOURS.white,
                                width: responsiveWidth(90),
                                height: responsiveHeight(7),
                                marginTop: responsiveHeight(15),
                                backgroundColor: theme.lightblack,
                                borderRadius: responsiveWidth(10),
                                marginVertical: responsiveHeight(3),
                                paddingHorizontal: responsiveWidth(5),
                            }}
                            itemContainerStyle={{ backgroundColor: theme.lightblack, color: COLOURS.grey }}
                            placeholderStyle={{ backgroundColor: theme.lightblack, color: theme.colorwhite, fontFamily: 'Roboto-Medium', fontSize: responsiveFontSize(1.9), }}
                            selectedTextStyle={{ backgroundColor: theme.lightblack, color: theme.colorwhite, fontSize: responsiveFontSize(2), fontFamily: 'Roboto-Medium' }}
                            // inputSearchStyle={{ color: theme.colorwhite, backgroundColor: theme.lightblack, borderRadius: responsiveWidth(10) }}
                            inputSearchStyle={{ backgroundColor: theme.lightblack, }}
                            iconStyle={styles.iconStyle}
                            data={data}
                            listContainerStyle={{ backgroundColor: theme.lightblack }}
                            search={true}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select ..."
                            searchPlaceholder="Search..."
                            onOpen={{ backgroundColor: 'black' }}
                            onClose={{ backgroundColor: 'black' }}
                            showsVerticalScrollIndicator={false}
                            itemTextStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Bold', }}
                            selectedStyle={{ color: COLOURS.grey, fontFamily: 'Roboto-Bold', }}
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}

                        />
                    </View>

                    <View style={styles.btn_center}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.btn_text}>apply now</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default List
