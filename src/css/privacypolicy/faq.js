import { StyleSheet } from 'react-native'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { COLOURS } from '../../ThemeColour/Theme'


const styles = StyleSheet.create({

    
    /*  */

    space_up: {
        marginTop:responsiveHeight(3)
    },

    space_down: {
        marginBottom:responsiveHeight(13)
    },
    
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
        textAlign: 'center',
        color: COLOURS.blue,
        fontFamily: 'Roboto-Bold',
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

    sml_arr_bg: {
        alignItems:'center',
        justifyContent:'center',
        height:responsiveHeight(4),
        width:responsiveHeight(4),
    },

    border_line_here: {
        alignItems:'center',
        justifyContent:'center',
        height:responsiveHeight(.1),
        backgroundColor:COLOURS.black,
        marginHorizontal:responsiveWidth(7),
    },

    ans_only: {
        fontFamily:'Roboto-Medium',
        lineHeight:responsiveHeight(3),
        fontSize:responsiveFontSize(1.9),
        paddingVertical:responsiveHeight(2),
        marginHorizontal:responsiveWidth(3),
        paddingHorizontal:responsiveWidth(3),   
        borderBottomLeftRadius:responsiveWidth(2),
        borderBottomRightRadius:responsiveWidth(2),
    },

    questn_ans_area: {
        marginTop:responsiveHeight(3),
        paddingVertical:responsiveHeight(2),
        marginHorizontal:responsiveWidth(3),
        paddingHorizontal:responsiveWidth(4),
        borderTopLeftRadius:responsiveWidth(2),
        borderTopRightRadius:responsiveWidth(2),
    },

    questn_ans: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    questn: {
        letterSpacing:.8,
        fontFamily:'Roboto-Medium',
        textTransform:'capitalize',
        fontSize:responsiveFontSize(2.2),
    },

    sml_arrw: {
        width:responsiveWidth(4),
        height:responsiveWidth(4),
    },

    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        // backgroundColor: COLOURS.white,
    },

    Scroll_container: {
        // backgroundColor: COLOURS.white,
    },

})

export default styles