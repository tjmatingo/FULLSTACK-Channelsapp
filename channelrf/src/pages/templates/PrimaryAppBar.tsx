import { AppBar, Toolbar } from "@mui/material";
import {useTheme} from "@mui/material/styles";

const PrimaryAppBar = () => {
    const theme = useTheme();

    
    return (
        <AppBar sx={{
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,
            }}>

            <Toolbar variant="dense" sx={{ 
                height: theme.primaryAppBar.height,
                minHeight: theme.primaryAppBar.height,
                 }}
                 >
                Channel-IO
            </Toolbar>
        </AppBar>
    )
};


export default PrimaryAppBar;