import { Box } from "@mui/material";
import { useTheme }from "@mui/material";

// //////
// import useAxiosWithInterceptor from "../../helpers/jwtInterceptor";
// //////


type SecondaryDrawProps = {
    children: React.ReactNode;
};

const SecondaryDraw = ({children}: SecondaryDrawProps) => {
    const theme = useTheme();


    // const jwtAxios = useAxiosWithInterceptor();
    

    // jwtAxios.get('http://127.0.0.1:8000/api/server/select/?category=Cars').then(response => {
    //     console.log(response.data);
    // }).catch((error) => {
    //     console.log(error);
    //     // error produced if CORS is not installed due to frontend and backend not on the same port/domain name
    // });


    
    return (
        <Box sx={{
            minWidth: `${theme.secondaryDraw.width}px`, 
            height: `calc(100vh - ${theme.primaryAppBar.height}px )`, 
            mt: `${theme.primaryAppBar.height}px`,
            borderRight: `1px solid ${theme.palette.divider}`,
            display: {xs: "none", sm: "block"},
            overflow: "auto",
        }}>

        {children}
        </Box>
    );
};

export default SecondaryDraw;