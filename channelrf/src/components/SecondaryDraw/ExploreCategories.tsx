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
            position: "sticky", 
            top: 0, 
            backgroundColor: theme.palette.background.default,
        }}>
            Explore Page
        </Box>
        
        <List sx={{py: 0 }}>
            {dataCrud.map((item) => (
                <ListItem disablePadding key={item.id} sx={{display: "block"}} dense={true} >
                    <Link to={`/explore/${item.name}`} style={{textDecoration:"none", color:"inherit"}}>
                        <ListItemButton sx={{minHeight: 48}}>
                            <ListItemIcon sx={{minWidth: "0px", justifyContent: "center"}}>
                                <ListItemAvatar sx={{minWidth: "0px"}}>
                                    <img alt="server icon" src={`${MEDIA_URL}${item.icon}`} style={{width: "25px", height: "25px", display: "block", margin: "auto"}} />
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="body1" textAlign="start" paddingLeft={1}>{item.name} </Typography>}></ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}

        </List>

        </>
    );
};

export default ExploreCategories;