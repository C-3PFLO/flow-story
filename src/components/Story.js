import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import theme from '../theme';

/**
 * NOTES:
 * - Use contentEditable='true' to edit text in-line without an input
 * or textarea that are either below the page or do not wrap with it
 * - Set overflow scroll on parent to cause a scrollbar, but struggling
 * with getting the height right when there is a header/footer AND
 * when the user enters text that then drops below the footer, keeping
 * the scroll moving with the cursor, etc.
 */

export default function Story({ snippets }) {

    return (
        <>
            {snippets.map((next) => (
                <Box key={next.key} sx={{
                    ':hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }}>
                    <Tooltip arrow title={'author: ' + next.author}>
                        <Typography>{next.snippet}</Typography>
                    </Tooltip>
                </Box>
            ))}
        </>
    )
}
