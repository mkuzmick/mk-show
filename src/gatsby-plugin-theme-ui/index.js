import baseTheme from "@theme-ui/preset-swiss"
import { merge } from "theme-ui"

import '@fontsource/crimson-pro/500.css';
import '@fontsource/crimson-pro/400.css';
import '@fontsource/lato/400.css';
import '@fontsource/ibm-plex-mono';

export default merge(baseTheme, {
    colors: {
        text: '#212326',
        background: '#fff',
        primary: '#07c',
        secondary: '#30c',
        muted: '#f6f6f6'
      },
    // fontWeights: {
    //     body: 400,
    //     heading: 900,
    //     bold: 700,
    // },
    // lineHeights: {
    //     body: 1.5,
    //     heading: 1.125,
    // },
    fonts: {
        // body: "Lato, sans-serif",
        // heading: "Crimson Pro, serif",
        monospace: "IBM Plex Mono, monospace",
    },
    // fontSizes: [10, 14, 18, 24, 32, 48, 72, 96, 144],
    styles: {
        // h1: {
        //     fontFamily: "heading",
        //     fontWeight: "heading",
        //     lineHeight: "heading",
        //     marginTop: 0,
        //     marginBottom: 3,
        // //   fontSize: 2,
        // //   color: "red"
        // },
        pre: {
            overflow: "auto",
            width: "100%",
            },
        },
})