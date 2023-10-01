import { StyleSheet } from 'react-native'
import { COLOURS } from '../../ThemeColour/Theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({



    /* arrow here */

    arrow_area : {
        position:'absolute',
        top:1,
        zIndex:2,
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
        fontFamily: 'Roboto-Bold',
        textTransform: 'capitalize',
        fontSize: responsiveFontSize(2.8),
    },
    /* arrow here */

    map_container: { 
        width:responsiveWidth(100),
        height: responsiveHeight(100),
    },

    container: {
        height: '100%',
        width:responsiveWidth(100),
        backgroundColor: COLOURS.white,
    },

})
export default styles