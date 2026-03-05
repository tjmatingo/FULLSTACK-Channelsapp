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

        secondaryDraw: {
            width: number;
        }
    }
    interface ThemeOptions {
        primaryAppBar: {
            height: number;
        };
        primaryDraw: {
            width: number;
            closed: number;

        };

        secondaryDraw: {
            width: number;
        }
    }
    
}

export const createMuiTheme = () => {
    let theme = createTheme({
        typography: {
            fontFamily: ["Bitcount Prop Double Ink", "system-ui"].join(","),
            body1: {
                fontWeight: 500,
                letterSpacing: "-0.5px",
            },
        },


        primaryAppBar: {
            height: 50,
        },

        primaryDraw: {
            width: 240,
            closed: 70,

        },

        secondaryDraw: {
            width: 240,
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