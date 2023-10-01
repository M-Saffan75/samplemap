import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'


const styles = StyleSheet.create({


    /* btn */

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
    /* btn */

    dropdown_one: {
        marginLeft: responsiveWidth(4),
    },

    /*  */

    note_text: {
        letterSpacing: .5,
        color: COLOURS.white,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        lineHeight: responsiveHeight(3),
        fontSize: responsiveFontSize(1.8),
    },

    note_bg: {
        marginTop: responsiveWidth(10),
        marginHorizontal: responsiveWidth(6),
    },

    /*  */

    arrow_area: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: responsiveHeight(4),
        justifyContent: 'space-between',
        paddingBottom: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(5),
    },

    name: {
        letterSpacing: .5,
        color: COLOURS.blue,
        width: responsiveWidth(11.2),
        padding: responsiveWidth(1.5),
        fontSize: responsiveFontSize(4),
        borderRadius: responsiveWidth(2),
    },

    categories: {
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.7),
        marginHorizontal: responsiveHeight(3),
    },

    nav_notifi: {
        letterSpacing: .4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    btn_align: {
        alignSelf: 'flex-start',
    },


    /*  */


    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: COLOURS.white,
    },

    Scroll_container: {
        backgroundColor: COLOURS.white,
    },

})

export default styles