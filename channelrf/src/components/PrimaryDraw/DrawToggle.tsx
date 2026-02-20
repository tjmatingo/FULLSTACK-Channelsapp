import { Box, IconButton } from "@mui/material"
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import React from "react";


type Props = {
    open: boolean;
    handleDrawerOpen: () => void;
    handleDrawerClose: () => void;
}


// React.FC<Props> used to let the fucntion know about props
 const DrawToggle: React.FC<Props> = ({open, handleDrawerClose, handleDrawerOpen}) => {
    return (
        <Box sx={{height: "50px", display: "flex", alignItems: "center", justifyContent: "center",}}>
            {/* one button for open and close */}
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
                {open ? <ChevronLeft/> : <ChevronRight/>}

            </IconButton>

        </Box>
    );
 };

 export default DrawToggle;