import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const boxStyle = {
    p: 3,
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    flexGrow: 1,
}

const gridStyle = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
}

function Footer() {
    return (
        <Box sx={boxStyle}>
            <Grid container spacing={3} sx={gridStyle}>
                <Grid item sx={{flex: 'auto'}}>
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Next Author"
                        // variant="filled"
                        // variant="standard"
                    />
                </Grid>
                <Grid item>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >252 / 280</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;
