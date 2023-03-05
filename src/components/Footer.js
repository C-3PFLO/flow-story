import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const gridStyle = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const counterStyle = {
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
}

function Footer() {
    return (
        <Grid container spacing={2} sx={gridStyle}>
            <Grid item sx={{ flex: 'auto' }}>
                <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Next Author"
                />
            </Grid>
            <Grid item>
                <Typography component="div" sx={counterStyle}>252 / 280</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained">Submit</Button>
            </Grid>
        </Grid>
    )
}

export default Footer;
