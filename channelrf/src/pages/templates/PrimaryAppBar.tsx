import { AppBar, Toolbar, Typography, Link, Box, IconButton } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';


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
                }}>

                <Box sx={{ display: {xs: "block", sm: "none"} }} >
                    <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2}} >
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Link href="/" underline="none" color="inherit">
                    <Typography variant="h3"
                        noWrap
                        component="div"
                        sx={{ fontWeight: 400, letterSpacing: "-0.5px" }}>
                            CHANNEL IO
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};


export default PrimaryAppBar;