import React from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    IconButton,
    Typography,
    makeStyles,
} from '@material-ui/core';

import {
    GitHub,
} from '@material-ui/icons';

// import {
//     useAppSelector,
//     useAppDispatch,
// } from '../state/hooks';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '20rem',
        margin: '0.75rem',
    },
}));

// Card for displaying a tool
const ToolCard = (props: {
    name: string,
    info: {
        description: string,
        link: string,
        github: string,
    }
}): JSX.Element => {

    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            raised
        >
            <CardActionArea href={props.info.link}>
                <CardContent>
                    <Typography variant='h5' gutterBottom>
                        {props.name}
                    </Typography>
                    <Typography color='textSecondary'>
                        {props.info.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton href={props.info.github}>
                    <GitHub />
                </IconButton>
            </CardActions>
        </Card>
    );

};

export default ToolCard;
