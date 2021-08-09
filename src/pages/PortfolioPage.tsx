import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    Typography,
    makeStyles,
} from '@material-ui/core';

// import {
//     useAppSelector,
//     useAppDispatch,
// } from '../state/hooks';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
}));

// Portfolio page showing off other projects
const PortfolioPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            className={classes.root}
        >
            <Typography variant='h2' align='center'>
                Portfolio
            </Typography>
        </Box>
    );

};

export default PortfolioPage;
