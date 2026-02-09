import { AppBar, Toolbar } from "@mui/material";
import {useTheme} from "@mui/material/styles";

const PrimaryAppBar = () => {
    const theme = useTheme();

    
    return (
        <AppBar>
            <Toolbar variant="dense" sx={{ height: theme.primaryAppBar.height }}>
                Channel-IO
            </Toolbar>
        </AppBar>
    )
};


export default PrimaryAppBar;