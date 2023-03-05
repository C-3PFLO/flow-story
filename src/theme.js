import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Lucida Sans Typewriter',
            'Lucida Console',
            'monaco',
            'Bitstream Vera Sans Mono',
            'monospace', 
        ],
    },
    palette: {
        // mode: 'dark',
        primary: {
            // main: '#fff'
            main: '#0a0a0a'
            // main: '#5393ff',
        },
        // secondary: {
        //     main: '#0a0a0a',
        //     // main: '#43a047',
        // },
    },
});

export default theme;
