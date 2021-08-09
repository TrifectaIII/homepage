import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    Typography,
    Divider,
    makeStyles,
    Link as MuiLink,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
    divider: {
        width: '50%',
        margin: '10px',
    },
}));

import resume from '../tex/resume.pdf';

// main index page for empty route
const MainPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography variant='h2' align='center'>
                Dakota Madden-Fong
            </Typography>
            <Divider
                variant='fullWidth'
                className={classes.divider}
            />
            <Typography variant='h2' align='center'>
                TrifectaIII
            </Typography>

            <Typography variant='body1'>
                A coder living and working in San Francisco, CA.
                I focus on software and web development.
            </Typography>

            <Typography variant='body1'>
                <MuiLink href={resume}>
                    Resume
                </MuiLink>
            </Typography>
        </Box>
    );

};

export default MainPage;
