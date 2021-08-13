import React, {useState} from 'react';

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    CardMedia,
    IconButton,
    Typography,
    Grid,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    makeStyles,
    SlideProps,
} from '@material-ui/core';
import {
    GitHub,
} from '@material-ui/icons';

import projectImages from '../data/project_images';

const Transition = (
    props: JSX.IntrinsicAttributes & SlideProps,
    ref: React.Ref<unknown> | undefined,
) => <Slide direction='up' ref={ref} {...props} />;
const TransitionComponent = React.forwardRef(Transition);

const useStyles = makeStyles((theme) => ({
    root: {

    },
    card: {
        height: '100%',
        maxWidth: '100%',
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

    const [infoOpen, setInfoOpen] = useState(false);

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
                    <Button onClick={() => setInfoOpen(true)}>
                        More Info
                    </Button>
                    <IconButton href={props.info.github}>
                        <GitHub />
                    </IconButton>
                </CardActions>
            </Card>
            <Dialog
                open={infoOpen}
                TransitionComponent={TransitionComponent}
                keepMounted
                onClose={() => setInfoOpen(false)}
            >
                <DialogTitle>{props.name}</DialogTitle>
            </Dialog>
        </Grid>
    );

};

export default ProjectCard;
