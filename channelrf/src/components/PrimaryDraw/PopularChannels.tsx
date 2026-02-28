import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText  } from "@mui/material";
import useCrud from "../../hooks/userCrud";
import { useEffect } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { MEDIA_URL } from "../../config";
import { Link } from "react-router-dom";

interface Server {
    id: number;
    name: string;
    category: string;
    icon: string;
};


type Props = {
    open: boolean;
};


const PopularChannels: React.FC<Props> = ({ open }) => {
    return (
    <>
        <Box sx={{ height: 50, p: 2, display: "flex", alignItems: "center", flex: "1 1 100%", backgroundColor: "blue"}}>
            <Typography sx={{display: open ? "black" : "none"}}>
                Popular
            </Typography>

        </Box>
    </>);
};


export default PopularChannels;
