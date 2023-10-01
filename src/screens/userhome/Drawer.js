import ModalBox from '../../ThemeColour/ModalBox'
import { COLOURS } from '../../ThemeColour/Theme'
import themeContext from '../../Toggle/themeContext'
import React, { useContext, useState, } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Animated, Image, Linking, Modal, ScrollView, Switch, StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'

const Drawer = ({ navigation }) => {

    const [visible, setVisible] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const theme = useContext(themeContext);

    const openModal = () => {
        setModalVisible(true);
    };

    // Logout Start

    const ModalPoup = ({ visible, children }) => {
        const [showModal, setShowModal] = React.useState(visible);
        const scaleValue = React.useRef(new Animated.Value(0)).current;
        React.useEffect(() => {
            toggleModal();
        }, [visible]);
        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleValue, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 100);
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };
        return (
            <Modal transparent visible={showModal}>
                <View style={styles.modalBackGround}>
                    <Animated.View
                        style={[styles.modalContainer, { transform: [{ scale: scaleValue, }], backgroundColor: theme.backgroundColor }]}>
                        {children}
                    </Animated.View>
                </View>
            </Modal>

        );
    };

    // Logout End


    return (

        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />

            <SafeAreaView>
                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    {/* <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.navigate('Home')}>
                            <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                        </TouchableOpacity>
                    </View> */}

                    <View style={styles.vrsn_name_accnt_box}>
                        <Text style={[styles.accnt_name, { color: theme.colorwhite }]}>My Account</Text>
                    </View>

                    <View style={styles.profle_versn}>
                        <Text style={[styles.prfl_setng, { color: theme.colorwhite }]}>Profile Setting & more</Text>
                        <Text style={[styles.version, { color: theme.colorgrey }]}>Version V.2.9.20</Text>
                    </View>

                    <View style={styles.profile_container}>


                        <View style={[styles.profile_box]}>

                            <View style={[styles.profile_all_in_one, {borderColor:theme.colorblue}]}>
                                <Image source={require('../../images/star.png')} style={styles.star} />

                                <Image source={require('../../images/profile-real.jpg')}
                                    style={styles.profile_image} resizeMode='contain' />
                                <TouchableOpacity activeOpacity={0.6} style={[styles.plus_icon_one_bg, {backgroundColor:COLOURS.blue , borderColor:COLOURS.white}]} onPress={() => navigation.navigate('Edit_Profile')}>
                                    <Image source={require('../../images/edit_text.png')} style={[styles.plus_icon_one,]} tintColor={COLOURS.white}/>
                                </TouchableOpacity>
                            </View>
                            
                        </View>


                        <View style={styles.help_zone_bg_area}>
                            <Text style={styles.help}>general</Text>
                        </View>
                        <View style={styles.information_here}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Edit_Profile')}>
                                <View style={styles.user_here_box}>
                                    <MaterialCommunityIcons name='account-convert' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Account Setting</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                           {/*  <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('My_Money')}>
                                <View style={styles.user_here_box}>
                                    <Ionicons name='wallet-outline' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>My Wallet</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity> */}

                            {/*  */}

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Change_Password')}>
                                <View style={styles.user_here_box}>
                                    <Ionicons name='settings-outline' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Change Password</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={openModal}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='exchange-alt' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>App Theme</Text>
                                </View>
                                {/* <Switch value={darkmode} onValueChange={(value) => {
                                    setDarkMode(value)
                                    EventRegister.emit('changeTheme', !value)
                                }} /> */}
                                <Image
                                    source={
                                        theme.theme === 'dark'
                                            ? require('../../images/dark-moon.png')
                                            : require('../../images/sun.png')
                                    }
                                    style={styles.prifile_arrow_icon} tintColor={theme.colorblue} />
                            </TouchableOpacity>

                            {/*  */}
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=<com.MagichianHub>")}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome name='hourglass-start' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Rate us</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>
                            {/*  */}

                        </View>


                        <View style={styles.help_zone_bg_area}>
                            <Text style={styles.help}>about app</Text>
                        </View>

                        {/*  */}
                        <View style={{ marginHorizontal: responsiveWidth(5.5) }}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Privacy_Policy')}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='info-circle' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Privacy Policy</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Terms_Conditions')}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../../images/document.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>terms & conditions</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome5 name='headset' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>helpline number</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail} onPress={() => navigation.navigate('Faq')}>
                                <View style={styles.user_here_box}>
                                    <FontAwesome name='circle-o-notch' style={[styles.user_icon, { color: theme.colorblue }]} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>Help & FAQS</Text>
                                </View>
                                <MaterialIcons name='keyboard-arrow-right' style={styles.user_arrow} />
                            </TouchableOpacity>

                            {/*  */}

                            <TouchableOpacity activeOpacity={0.7} style={styles.user_logout} onPress={() => setVisible(true)}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../../Bold/log-out.png')} style={styles.logout_image} tintColor={COLOURS.red} />
                                    <Text style={styles.logout_name}>Log out</Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                        <View style={styles.danger_zone_bg_area}>
                            <Text style={styles.help_one}>danger zone</Text>
                        </View>

                        <View style={styles.side_space}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.user_detail}>
                                <View style={styles.user_here_box}>
                                    <Image source={require('../../images/disabled.png')} style={[styles.user_icon_img,]} tintColor={theme.colorblue} />
                                    <Text style={[styles.user_name, { color: theme.colorwhite }]}>delete account</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/* // Logout Modal start // */}

                        <View style={[styles.modal_box, { backgroundColor: theme.backgroundColor }]}>
                            <ModalPoup visible={visible} style={styles.modalpop}>
                                <Text style={[styles.modal_text, { color: theme.colorwhite }]} >
                                    Sign Out
                                </Text>
                                <Text style={[styles.modal_email, { color: theme.colorwhite }]}>Ahmed88@gmail.com</Text>
                                <View style={styles.modal_cancel_more}>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => setVisible(false)}>
                                        <Text style={[styles.cancel, { color: theme.colorwhite }]}>Cancel</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.border_line, { borderColor: theme.colorwhite }]}></Text>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('Login')}>
                                        <Text style={styles.modal_logout}>Log out</Text>
                                    </TouchableOpacity>
                                </View>
                            </ModalPoup>
                        </View>

                        {/* // Logout Modal End // */}
                        <ModalBox modalVisible={modalVisible} setModalVisible={setModalVisible} />


                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}


export default Drawer

const styles = StyleSheet.create({

    plus_icon: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(.1),
        fontSize: responsiveFontSize(1.8),
        borderRadius: responsiveWidth(20),
        position: 'absolute',
        textAlign: 'center',
        color: COLOURS.white,
        textAlignVertical: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one_bg: {
        zIndex: 2,
        right: responsiveWidth(1),
        width: responsiveWidth(8),
        height: responsiveWidth(8),
        bottom: responsiveWidth(1.5),
        borderWidth:responsiveWidth(.4),
        borderRadius: responsiveWidth(20),

        position: 'absolute',
        alignItems: 'center',
        color: COLOURS.white,
        justifyContent: 'center',
        backgroundColor: COLOURS.black,
    },

    plus_icon_one: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },

    prifile_arrow_icon: {
        width: responsiveWidth(5.5),
        height: responsiveWidth(5.6),
    },

    container: {
        height: '100%',
        backgroundColor: COLOURS.white,
    },


    /*  profile image area */

    profile_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(5.5),
    },

    profile_all_in_one: {
        flexDirection: 'column',
        borderColor: COLOURS.white,
        borderWidth: responsiveWidth(.3),
        borderRadius: responsiveWidth(20),
        paddingVertical: responsiveWidth(2.2),
        paddingHorizontal: responsiveWidth(2.2),
    },

    star: {
        top: 2,
        right: 3,
        zIndex: 2,
        width: 25,
        height: 25,
        position: 'absolute',
        display: 'none',
        color: COLOURS.orange,
    },

    profile_image: {
        width: 120,
        height: 120,
        // elevation: 41,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    profile_container: {
        marginVertical: 20,
    },

    /*  profile image area */


    information_here: {
        marginHorizontal: responsiveWidth(5.5),
    },

    user_detail: {
        marginVertical: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    user_here_box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    user_icon: {
        fontSize: responsiveFontSize(2.8),
        paddingRight: responsiveWidth(5.7),
        color: COLOURS.blue,
    },

    user_icon_img: {
        marginRight: responsiveWidth(5.3),
        height: responsiveWidth(6),
        width: responsiveWidth(6),
    },

    user_name: {
        letterSpacing: .2,
        color: COLOURS.black,
        textTransform: 'capitalize',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

    user_arrow: {
        fontSize: 25,
        color: COLOURS.grey,
    },

    help: {
        letterSpacing: 1,
        color: COLOURS.blue,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.4),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(5.5),
    },

    help_zone_bg_area: {
        marginHorizontal: 0,
        backgroundColor: '#006CFF33',
        marginVertical: responsiveHeight(2),
        paddingVertical: responsiveHeight(.6)
    },


    danger_zone_bg_area: {
        marginHorizontal: 0,
        backgroundColor: '#FF000033',
        marginVertical: responsiveHeight(2),
        paddingVertical: responsiveHeight(.5)
    },

    side_space: {
        marginHorizontal: responsiveWidth(5.5),
    },

    help_one: {
        letterSpacing: 1,
        color: COLOURS.red,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(2.2),
        paddingVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(5.5),
    },

    user_logout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(2.1),
        paddingVertical: responsiveHeight(1),
    },

    logout_image: {
        color: COLOURS.blue,
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        marginRight: responsiveWidth(5),
    },

    logout_name: {
        letterSpacing: .2,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.9),
    },

    vrsn_name_accnt_box: {
        marginTop: responsiveHeight(5),
        marginHorizontal: responsiveWidth(5),
    },

    accnt_name: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(3.3),
    },

    profle_versn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(4.5),
    },

    prfl_setng: {
        letterSpacing: .3,
        color: COLOURS.black,
        fontFamily: 'Roboto-Medium',
        fontSize: responsiveFontSize(1.5),
        marginHorizontal: responsiveWidth(1.4),
    },

    version: {
        letterSpacing: .3,
        color: COLOURS.grey,
        fontFamily: 'Roboto-Regular',
        fontSize: responsiveFontSize(1.9),
    },


    /* modal here  */

    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: '80%',
        elevation: 20,
        borderWidth: .4,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderColor: COLOURS.white,
        backgroundColor: COLOURS.white,
    },

    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    modal_box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalpop: {
        borderWidth: 4,
        borderColor: COLOURS.white,
    },

    modal_text: {
        fontSize: 14,
        paddingLeft: 9,
        marginBottom: 10,
        letterSpacing: .2,
        textAlign: 'center',
        color: COLOURS.black,
        fontFamily: 'Roboto-Bold',
    },

    modal_email: {
        paddingBottom: 10,
        color: COLOURS.black,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },

    modal_cancel_more: {
        borderTopWidth: .4,
        flexDirection: 'row',
        borderTopColor: COLOURS.grey,
        justifyContent: 'space-between',
    },

    cancel: {
        paddingTop: 20,
        paddingLeft: 40,
        color: COLOURS.black,
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },

    border_line: {
        borderLeftWidth: .4,
        paddingVertical: 2,
        borderLeftColor: COLOURS.grey,
    },

    modal_logout: {
        paddingTop: 20,
        paddingRight: 40,
        color: COLOURS.red,
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
    },
})