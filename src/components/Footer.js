import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Twitter from '@mui/icons-material/Twitter';
import GitHub from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            {/* <span>&copy; 2023 C-3PFLO TBD</span> */}
            <Box>
                <Typography variant="caption">Built by C-3PFLO</Typography>
            </Box>
            <Box>
                <a href="https://twitter.com/C_3PFLO" target="_blank" rel="noreferrer"><Twitter sx={{ mr: 2, color: 'rgb(25,118,210)' }}></Twitter></a>
                <a href="https://github.com/C-3PFLO" target="_blank" rel="noreferrer"><GitHub sx={{ color: 'rgb(0,0,0,0.6)' }}></GitHub></a>
            </Box>
            <Box>
                <Typography variant="caption">beep beep, boop boop</Typography>
            </Box>
        </Box>
    )
}
