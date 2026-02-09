import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box'
import PrimaryAppBar from './templates/PrimaryAppBar';


const Home = () => {

    
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <PrimaryAppBar/>
            Home
        </Box>
    )
};

export default Home;