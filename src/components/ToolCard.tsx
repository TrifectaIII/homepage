import React from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    IconButton,
    Typography,
    Grid,
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

    },
    card: {
        height: '100%',
        maxWidth: '100%',
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
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.root}
        >
            <Card
                className={classes.card}
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
        </Grid>
    );

};

export default ToolCard;
