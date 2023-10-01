import { COLOURS } from '../../ThemeColour/Theme'
import themeContext from '../../Toggle/themeContext';
import React, { useContext, useState, } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
// import { launchImageLibrary } from 'react-native-image-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Image, ScrollView, StatusBar, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'

const Edit_Profile = ({ navigation }) => {

    const [galleryphoto, setGalleryPhoto] = useState(null);

    const theme = useContext(themeContext);

    let options = {
        saveTophotos: true,
        mediatype: ' photo',
    };

    const [value, setValue] = useState(null);
    const [value_one, setValue_one] = useState(null);
    const [value_two, setValue_two] = useState(null);

    const data = [
        { label: 'California City', value: '2' },
        { label: 'New York City', value: '1' },
    ];
    const data_one = [
        { label: 'United states', value: '3' },
        { label: 'New York', value: '4' },
    ];
    const data_two = [
        { label: 'California', value: '5' },
        { label: 'New York', value: '6' },
    ];

    const opengallery = async () => {
        const result = await launchImageLibrary(options);
        setGalleryPhoto(result.assets[0].uri);
    }

    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />

            <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                <View style={styles.nav_notifi}>
                    <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                        <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                    </TouchableOpacity>
                    <Text style={[styles.categories, { color: theme.colorblue }]}>Edit Profile</Text>
                </View>

                <View style={styles.profile_box}>
                    <View style={styles.profile_all_in_one}>
                        {galleryphoto == null ?
                            <Image source={require('../../images/profile-real.jpg')}
                                style={styles.profile_image} resizeMode='contain' />
                            :
                            < Image source={{ uri: galleryphoto }}
                                style={styles.profile_image} resizeMode='contain'
                            />
                        }

                        <TouchableOpacity activeOpacity={0.6} onPress={opengallery}>
                            <FontAwesome5 name='plus' style={[styles.plus_icon, { borderColor: theme.colorwhite }]} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.top_gap}></View>
                {/* <Text style={[styles.your_name, { color: theme.colorwhite }]}>name</Text> */}

                <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                    <TextInput placeholder='' defaultValue='saffan k' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                    <Image source={require('../../Bold/user.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                </View>
                {/* <Text style={[styles.your_name, { color: theme.colorwhite }]}>username</Text> */}

                <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                    <TextInput placeholder='' defaultValue='saffan88' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                    <Image source={require('../../images/username.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                </View>
                {/* <Text style={[styles.your_name, { color: theme.colorwhite }]}>email</Text> */}

                <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                    <TextInput placeholder='' defaultValue='saffan@gmail.com' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                    <Image source={require('../../Bold/envelope.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                </View>
                {/* <Text style={[styles.your_name, { color: theme.colorwhite }]}>phonenumber</Text> */}

                <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                    <TextInput placeholder='' defaultValue='03130932657' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} keyboardType='number-pad' />
                    <Image source={require('../../images/phone-call.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                </View>
                {/* <Text style={[styles.your_name, { color: theme.colorwhite }]}>address</Text> */}

                <View style={[styles.pswd_inpt_container, { backgroundColor: theme.lightblack }]}>
                    <TextInput placeholder='' defaultValue='New york street 11 opposite hotel' placeholderTextColor={COLOURS.grey} style={[styles.pswd_inpt, { color: theme.colorwhite }]} />
                    <Image source={require('../../Bold/map-marker.png')} name={'phone-alt'} style={[styles.icon_one,]} tintColor={theme.colorblue} />
                </View>


                <View style={styles.btn_center}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                        <Text style={styles.btn_text}>save changes</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </>

    )
}

export default Edit_Profile

const styles = StyleSheet.create({

    row_name: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: responsiveHeight(2),

    },

    your_name_one: {
        letterSpacing: .3,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(21),
    },

    your_name_two: {
        letterSpacing: .3,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(6),
    },

    your_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        marginTop: responsiveWidth(1),
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: responsiveWidth(6),
    },

    city_state_area: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(-1.9),
        marginHorizontal: responsiveWidth(1)
    },

    dropdown: {
        marginHorizontal: responsiveWidth(4),
    },

    dropdown_one: {
        marginLeft: responsiveWidth(4),
    },
    dropdown_two: {
        marginRight: responsiveWidth(4),
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white
    },

    btn_align: {
        alignSelf: 'flex-start',
        marginHorizontal: responsiveWidth(6),
    },

    name: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        marginTop: responsiveHeight(4.2),
        borderRadius: responsiveWidth(2),
        backgroundColor: COLOURS.Lightgrey,
    },

    nav_notifi: {
        flexDirection: 'row',
        alignItems: 'center',
        letterSpacing: .4,
        height: responsiveHeight(14),
        justifyContent: 'flex-start',
    },

    categories: {
        color: COLOURS.blue,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(2.8),
    },

    profile_box: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    profile_all_in_one: {
        flexDirection: 'column'
    },

    star: {
        display: 'none',
        position: 'absolute',
        color: COLOURS.orange,
    },

    profile_image: {
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(35),
        height: responsiveWidth(35),
        borderRadius: responsiveWidth(20),
    },

    plus_icon: {
        zIndex: 2,
        right: responsiveWidth(3),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(.1),
        borderWidth: responsiveWidth(.2),
        fontSize: responsiveFontSize(1.8),
        borderRadius: responsiveWidth(20),

        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    top_gap: {
        marginTop: responsiveHeight(3),
    },

    pswd_inpt_container: {
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(10),
        marginBottom: responsiveHeight(1.7),
        paddingHorizontal: responsiveWidth(6),
        marginHorizontal: responsiveWidth(4.5),

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    icon: {
        color: COLOURS.blue,
        width: responsiveWidth(7),
        fontSize: responsiveFontSize(2.3),
    },

    icon_one: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },

    pswd_inpt: {
        width: '100%',
        letterSpacing: .5,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        paddingHorizontal: responsiveWidth(2),
    },

    btn: {
        width: '100%',
        borderColor: COLOURS.blue,
        padding: responsiveWidth(1),
        marginTop: responsiveWidth(7),
        backgroundColor: COLOURS.blue,
        borderRadius: responsiveWidth(20),
    },

    btn_text: {
        letterSpacing: .5,
        textAlign: 'center',
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(1.6),
        paddingVertical: responsiveWidth(3.5),
    },

    btn_center: {
        alignItems: 'center',
        marginBottom: responsiveHeight(4),
        marginHorizontal: responsiveWidth(5),
    },

})