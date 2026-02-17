import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box'
import PrimaryAppBar from './templates/PrimaryAppBar';
import PrimaryDraw from './templates/PrimaryDraw';

const Home = () => {

    
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <PrimaryAppBar/>
            <PrimaryDraw>
                
            </PrimaryDraw>
            Home
        </Box>
    )
};

export default Home;