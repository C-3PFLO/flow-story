import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

import theme from './theme';
import Header from './components/Header';
import Story from './components/Story';
import Footer from './components/Footer';

import './App.css';

// TEMPORARY loading data
import snippets from './snippets';

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <Box>
                <Paper elevation={2} sx={{
                    p: 3,
                    m: 1
                }}>
                    <Story snippets={snippets}></Story>
                </Paper>
                <Box sx={{
                    '& > :not(style)': { m: 1 }
                }}>
                    <Fab color='primary' aria-label="edit" sx={{
                        position: 'fixed',
                        bottom: 1,
                        right: 1,
                    }}>
                        <EditIcon></EditIcon>
                    </Fab>
                </Box>
                <Box sx={{
                    mt: 2,
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Footer></Footer>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
