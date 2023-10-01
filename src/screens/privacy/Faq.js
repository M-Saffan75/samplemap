import styles from '../../css/privacypolicy/faq';
import { COLOURS } from '../../ThemeColour/Theme';
import Collapsible from 'react-native-collapsible';
import themeContext from '../../Toggle/themeContext';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { StatusBar, SafeAreaView, Text, Image, TouchableOpacity, View, ScrollView } from 'react-native'



const Faq = () => {

    const navigation = useNavigation()
    const theme = useContext(themeContext)
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isCollapsedvalue, setIsCollapsed_value] = useState(true);
    const [isCollapsedcancel, setIsCollapsed_cancel] = useState(true);
    const [isCollapsedvalue_one, setIsCollapsed_one] = useState(true);
    const [isCollapsedvalue_two, setIsCollapsed_two] = useState(true);
    const [isCollapsedvalue_four, setIsCollapsed_four] = useState(true);
    const [isCollapsedvalue_three, setIsCollapsed_three] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleCollapse_cancel = () => {
        setIsCollapsed_cancel(!isCollapsedcancel);
    };

    const toggleCollapse_value = () => {
        setIsCollapsed_value(!isCollapsedvalue);
    };

    const toggleCollapse_one = () => {
        setIsCollapsed_one(!isCollapsedvalue_one);
    };

    const toggleCollapse_two = () => {
        setIsCollapsed_two(!isCollapsedvalue_two);
    };

    const toggleCollapse_three = () => {
        setIsCollapsed_three(!isCollapsedvalue_three);
    };

    const toggleCollapse_four = () => {
        setIsCollapsed_four(!isCollapsedvalue_four);
    };


    return (
        <>
            <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView>

                <Animatable.View style={[styles.arrow_area, { backgroundColor: theme.backgroundColor }]}>
                    <View style={styles.nav_notifi}>
                        <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
                            <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
                        </TouchableOpacity>
                        <Text style={[styles.categories, { color: theme.colorwhite }]}>helps & faqs</Text>
                    </View>
                </Animatable.View>


                <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]} showsVerticalScrollIndicator={false}>
                    <View style={styles.space_up}></View>


                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity onPress={toggleCollapse} activeOpacity={0.9} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsed ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsed ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>What is navigation App ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsed ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsed}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Handman App connects users with skilled professionals for a wide range of services, including home repairs,
                                maintenance, cleaning, electrical work, plumbing, and more. Our platform offers a convenient way to find and
                                book reliable service providers for your various needs.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_cancel} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedcancel ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedcancel ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>How do I book a shipping ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedcancel ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedcancel}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Booking a service through Handman App is a straightforward process. Simply launch the app, browse the available services,
                                choose the one that fits your requirements, select a convenient date and time, and confirm your booking. Our professionals
                                will be at your doorstep at the scheduled time.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_value} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>Is pricing transparent ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedvalue ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedvalue}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Yes, transparency is a priority for us. The cost of each service is displayed clearly before you confirm your booking.
                                This way, you'll know the exact price you're paying without any hidden fees.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_one} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>Can I trust the service providers ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedvalue_one ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedvalue_one}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Absolutely. We thoroughly vet our service providers to ensure they are skilled, experienced, and trustworthy.
                                Additionally, user ratings and reviews help you make informed decisions when selecting a professional for your job.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_two} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}> How can customer support ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedvalue_two ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedvalue_two}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                If you need assistance or have questions, our customer support team is here to help. You can reach out to us by sending an email to support@handmanapp.com.
                                Alternatively, you can call our helpline.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_three} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>Can I trust the service providers ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedvalue_three ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedvalue_three}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Absolutely. We thoroughly vet our service providers to ensure they are skilled, experienced, and trustworthy.
                                Additionally, user ratings and reviews help you make informed decisions when selecting a professional for your job.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <Animatable.View animation={'flipInX'}>
                        <TouchableOpacity activeOpacity={0.9} onPress={toggleCollapse_four} style={[styles.questn_ans_area, { backgroundColor: theme.lightblack, borderBottomLeftRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), borderBottomRightRadius: isCollapsedvalue ? responsiveWidth(2) : responsiveWidth(0), }]}>
                            <View style={styles.questn_ans} >
                                <Text style={[styles.questn, { color: theme.colorwhite }]}>Is my personal information safe ?</Text>
                                <TouchableOpacity activeOpacity={0.6} style={styles.sml_arr_bg}>
                                    <Image
                                        source={
                                            isCollapsedvalue_four ? require('../../images/small_up.png')
                                                : require('../../images/small_down.png')
                                        }
                                        style={styles.sml_arrw} tintColor={theme.colorwhite} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                        <Collapsible collapsed={isCollapsedvalue_four}>
                            <View style={[styles.border_line_here, { backgroundColor: theme.grey }]}></View>
                            <Text style={[styles.ans_only, { backgroundColor: theme.lightblack, color: theme.colorgrey }]} align="center">
                                Yes, your privacy is of utmost importance to us. We employ advanced security measures to safeguard your personal information.
                                We only share necessary details with the professionals assigned to your service request, ensuring your data is handled responsibly.
                            </Text>
                        </Collapsible>
                    </Animatable.View>

                    <View style={styles.space_down}></View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Faq