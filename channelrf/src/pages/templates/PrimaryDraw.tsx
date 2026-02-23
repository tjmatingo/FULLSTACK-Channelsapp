import { Box, styled, useMediaQuery,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import DrawToggle from "../../components/PrimaryDraw/DrawToggle";
import MuiDrawer from "@mui/material/Drawer"

const PrimaryDraw = () => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    const below600 = useMediaQuery("(max-width:599px");

    // to ensure the width is expanded when drawer is opened
    
    const openedMixin = () => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    });

    
    // ensure drawer width compressed when drawer closed
    const closedMixin = () => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    width: theme.primaryDraw.closed,
    });

    // customize the drawer component from MUI and add mixin for changing width of drawer

    const Drawer = styled(MuiDrawer, {})(({ theme, open }) => ({
        width: theme.primaryDraw.width,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(),
            "& .MuiDrawer-paper": openedMixin(),
        }),
        ...(!open && {
            ...closedMixin(),
            "& .MuiDrawer-paper": closedMixin(),
        }),
        
    }));

    
    
    useEffect(() => {
        setOpen(!below600);

    }, [below600]);
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
        <Drawer open={open} variant={below600 ? "temporary" : "permanent"} 
        PaperProps={{
            sx: {
                mt: `${theme.primaryAppBar.height}px`,
                height: `calc(100vh - ${theme.primaryAppBar.height}px )`,
                width: theme.primaryDraw.width,
        },
        }}>
            <Box>
                <Box sx={{position: "absolute", top: 0, right: 0, p: 0, width: open ? "auto" : "100%"}}>
                    <DrawToggle open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
                    
                    {[...Array(100)].map((_, i) => (
                        <Typography key={i} paragraph>
                            {i + 1}
                        </Typography>
                    ))}

                    
                </Box>

            </Box>
        </Drawer>
    );
    
};

export default PrimaryDraw;
