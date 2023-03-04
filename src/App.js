import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// import Header from './components/Header';
import Footer from './components/Footer';
import Story from './components/Story';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const boxStyle = {
    m: 3,
    maxHeight: 'calc(100vh - 192px)',
    overflowY: 'scroll',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* <Header></Header> */}
            <Typography variant="h6" sx={{ m: 3 }}>flow-story</Typography>
            <Box component="main" sx={boxStyle}>
                <Story></Story>
            </Box>
            <Footer></Footer>
        </ThemeProvider>

    )
}

export default App;
