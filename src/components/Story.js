import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import './Story.css';

const snippets = [
    {
        key: '1',
        author: 'C-3PFLO',
        snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae.`
    },
    {
        key: '2',
        author: 'C-3PFLO',
        snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae.`
    },
    {
        key: '3',
        author: 'R2-D2',
        snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
        fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
        aliquam dolore excepturi quae.`
    },
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
