import { COLOURS } from "../ThemeColour/Theme";

const theme = {
    light: {
        theme: 'light',
        colorblue: COLOURS.blue,
        colorgrey: COLOURS.grey,
        deepblack: COLOURS.white,
        colorwhite: COLOURS.black,
        lightblack: COLOURS.Lightgrey,
        lightblack_card: COLOURS.white,
        backgroundColor: COLOURS.white,
        lightblack_btn: COLOURS.Lightgrey,
        slidercolor:COLOURS.blue,
    },
    dark: {
        theme: 'dark',
        deepblack:'#171717',
        // lightblack: '#2E2E2E',
        lightblack:'#242424',
        slidercolor:COLOURS.blue,
        colorblue: COLOURS.white,
        colorwhite: COLOURS.white,
        lightblack_card: '#2E2E2E',
        lightblack_btn: COLOURS.black,
        backgroundColor: COLOURS.black,
    }
}


export default theme;