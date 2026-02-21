import { Box } from "@mui/material";
import { useTheme }from "@mui/material";

const SecondaryDraw = () => {
    const theme = useTheme();
    
    return (
        <Box sx={{minWidth: `${theme.secondaryDraw.width}`, height: `calc(100vh - ${theme.primaryAppBar.height}px )`, mt: `${theme.primaryAppBar.height}px`}}>

        </Box>
    )
};

export default SecondaryDraw;