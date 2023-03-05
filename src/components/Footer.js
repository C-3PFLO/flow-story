import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Typography variant="caption">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                    {/* <span>&copy; 2023 C-3PFLO TBD</span> */}
                    <div>Built by C-3PFLO - Written by Us</div>
                    <div>beep beep, boop boop</div>
            </Box>
        </Typography>
    )
}
