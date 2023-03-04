import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Header from './components/Header';
import Footer from './components/Footer';
import Story from './components/Story';

import Box from '@mui/material/Box';

const boxStyle = {
    m: 3,
    'max-height': 'calc(100vh - 192px)',
    'overflow-y': 'scroll',
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <Box component="main" sx={boxStyle}>
                <Story></Story>
            </Box>
            <Footer></Footer>
        </ThemeProvider>

    )
}

export default App;
