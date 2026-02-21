import { Box } from "@mui/material";
import { useTheme }from "@mui/material";

const SecondaryDraw = () => {
    const theme = useTheme();
    
    return (
        <Box sx={{
            minWidth: `${theme.secondaryDraw.width}`, 
        height: `calc(100vh - ${theme.primaryAppBar.height}px )`, 
        mt: `${theme.primaryAppBar.height}px`,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: {xs: "none", sm: "block"},
        }}>

        </Box>
    )
};

export default SecondaryDraw;