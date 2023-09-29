import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0
    },

    body: {
        '-webkit-font-smoothing':'antialiased',
        backgroundColor: '$beige',
        color: "$white"
    },
    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400,
        
    }
})