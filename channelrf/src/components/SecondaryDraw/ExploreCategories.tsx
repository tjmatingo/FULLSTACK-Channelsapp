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
    const {dataCrud, error, isLoading, fetchData } = useCrud<Category>(
        [],
        "/server/category/"
    );
    
    return ( 
        <>
        </>
    );
};

export default ExploreCategories;