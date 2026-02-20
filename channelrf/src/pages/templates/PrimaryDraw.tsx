import { Box, Drawer, useMediaQuery,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import DrawToggle from "../../components/PrimaryDraw/DrawToggle";

const PrimaryDraw = () => {
    const [open, setOpen] = useState(true);
    const theme = useTheme();
    const below600 = useMediaQuery("(max-width:599px");
    
    
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
