import { createTheme } from "@mui/material";
import { cyan, yellow } from "@mui/material/colors";
import { dark, light } from "@mui/material/styles/createPalette";


export const lightThem = createTheme({
    palette : {
        primary : {
            main: yellow[700],
            light: yellow[800],
            dark: yellow[700],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[500],
            light: cyan[400],
            dark: cyan[300],
            contrastText: '#ffffff',
        },
        background:{
            default: '#f7f6f3',
            paper: '#ffffff',
        }
    }
})