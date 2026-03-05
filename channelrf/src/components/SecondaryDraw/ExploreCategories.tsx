import { Box, Typography, List, ListItem, ListItemButton, ListItemText, useTheme, ListItemIcon } from "@mui/material";
import useCrud from "../../hooks/userCrud";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { MEDIA_URL } from "../../config";



interface Category {
    id: number;
    name: string;
    description: string;
    icon: string;
}

const ExploreCategories = () => {
    const theme = useTheme();
    
    const {dataCrud, error, isLoading, fetchData } = useCrud<Category>(
        [],
        "/server/category/"
    );

    useEffect (() => {
        fetchData();
    }, []);
    
    return ( 
        <>
        <Box sx={{
            height: "50px",
            display: "flex", 
            alignItems: "center", 
            px: 2, 
            borderBottom: `1px solid ${theme.palette.divider}`, 
            position: "sticky", top: 0, 
            backgroundColor: theme.palette.background.default,
        }}>
            Explore Page``
        </Box>
        </>
    );
};

export default ExploreCategories;