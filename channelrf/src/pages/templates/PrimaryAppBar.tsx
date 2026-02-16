import { AppBar, Toolbar, Drawer, Typography, Link, Box, IconButton } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';


const PrimaryAppBar = () => {
    const theme = useTheme();

    const [sideMenu, setSideMenu] = useState(false);
    // function to toggle drawer
    const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
        setSideMenu(open);
    };

    
    return (
        <AppBar sx={{
            zIndex: (theme) => theme.zIndex.drawer + 2,
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,
            }}>

            <Toolbar variant="dense" sx={{ 
                height: theme.primaryAppBar.height,
                minHeight: theme.primaryAppBar.height,
                }}>

                <Box sx={{ display: {xs: "block", sm: "none"} }} >
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer(true)} sx={{mr:2}} >
                        <MenuIcon />
                    </IconButton>
                </Box>

                <Drawer anchor="left" open={sideMenu} onClose={toggleDrawer(false)}>
                    {[...Array(100)].map((_, i) => (
                        <Typography key={i} paragraph>
                            {i + 1}
                        </Typography>
                    ))}

                </Drawer>

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