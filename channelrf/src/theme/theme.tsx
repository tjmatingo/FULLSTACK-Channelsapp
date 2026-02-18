import { createTheme, responsiveFontSizes } from "@mui/material/styles";


declare module "@mui/material/styles" {
    interface Theme {
        primaryAppBar: {
            height: number;

        };
        primaryDraw: {
            width: number;
            closed: number;

        };
    }
    interface ThemeOptions {
        primaryAppBar: {
            height: number;
        };
        primaryDraw: {
            width: number;
            closed: number;

        };
    }
    
}

export const createMuiTheme = () => {
    let theme = createTheme({
        typography: {
            fontFamily: ["Quintessential", "sans-serif"].join(","),
        },
        
        primaryAppBar: {
            height: 50,
        },

        primaryDraw: {
            width: 240,
            closed: 70,

        },

        components:{
            MuiAppBar: {
                defaultProps: {
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                    backgroundColor: "#fff",
                    color: "#000",
                    boxShadow: "none",
                    },
                },
            },
        },
    });
    theme = responsiveFontSizes(theme);
    return theme;
};

export default createMuiTheme;