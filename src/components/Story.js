import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import './Story.css';

const snippets = [
    {
        key: '1',
        author: 'C-3PFLO',
        snippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        key: '2',
        author: 'C-3PFLO',
        snippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        key: '3',
        author: 'R2-D2',
        snippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
        key: '4',
        author: 'C-3PFLO',
        snippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`
    }
]

export default function Story() {
    // document.getElementById("user-span").focus();
    return (
        <Typography>
            {snippets.map((next) => (
                <Tooltip key={next.key + '-tooltip'} title={'author: ' + next.author}>
                <span key={next.key + '-span'}>{next.snippet}</span>
            </Tooltip>
            ))}
            <span
                id='user-span'
                // ref={(input) => { this.span = input; }}
                contentEditable='true'
                className='user-input'
            >
            </span>
        </Typography>
    )
}
