import { Box, Typography, List, ListItem, ListItemButton, ListItemText, useTheme, ListItemIcon } from "@mui/material";
import useCrud from "../../hooks/userCrud";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { MEDIA_URL } from "../../config";


interface Category {
    
}

const ExploreCategories = () => {
    const {dataCrud, error, isLoading, fetchData } = useCrud<Category>(
        [],
        "/server/select/"
    );
    
    return ( 
        <>
        </>
    );
};

export default ExploreCategories;