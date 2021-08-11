import React from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    IconButton,
    Typography,
    makeStyles,
} from '@material-ui/core';
import {
    GitHub,
} from '@material-ui/icons';

import projectImages from '../data/project_images';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '20rem',
        margin: '0.75rem',
    },
    image: {
        height: '10rem',
    },
}));

// Card for displaying a project
const ProjectCard = (props: {
    name: string,
    info: {
        link: string,
        github: string,
        languages: string[],
        techniques: string[],
        description: string,
        image: string,
    }
}): JSX.Element => {

    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            raised
        >
            <CardActionArea
                href={props.info.link}
            >
                <CardMedia
                    className={classes.image}
                    image={projectImages[props.info.image]}
                />
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

export default ProjectCard;
