import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const Main = () => {
    const theme = useTheme();

    return (
        <Box 
        sx ={{
            flexGrow: 1,
            mt: `${theme.primaryAppBar.height}px`,
            height: `calc(100vh - ${theme.primaryAppBar.height}px)`,
            // to allow scrolling independly of every other component
            overflow: "hidden",
        }}>

        </Box>

    );
};

export default Main;