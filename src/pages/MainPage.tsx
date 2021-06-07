import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
}));

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

        </Box>
    );

};

export default MainPage;
