import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';

import ToolCard from '../components/ToolCard';
import ProjectCard from '../components/ProjectCard';
import tools from '../data/tools.json';
import projects from '../data/projects.json';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    subheader: {
        marginTop: '3rem',
        marginBottom: '3rem',
    },
}));

// Portfolio page showing off other projects
const PortfolioPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    // generate cards for tools
    const toolCards: JSX.Element[] = [];
    let toolkey: keyof typeof tools;
    for (toolkey in tools) {

        if (Object.prototype.hasOwnProperty.call(tools, toolkey)) {

            const toolobj = tools[toolkey];
            toolCards.push(<ToolCard key={toolkey} name={toolkey} info={toolobj} />);

        }

    }

    // generate cards for projects
    const projectCards: JSX.Element[] = [];
    let projectkey: keyof typeof projects;
    for (projectkey in projects) {

        if (Object.prototype.hasOwnProperty.call(projects, projectkey)) {

            const projectobj = projects[projectkey];
            projectCards.push(<ProjectCard key={projectkey} name={projectkey} info={projectobj} />);

        }

    }

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography variant='h2'>
                Portfolio
            </Typography>
            <Typography
                variant='h3'
                className={classes.subheader}
            >
                Tools
            </Typography>
            <Grid container spacing={3}>
                {toolCards}
            </Grid>
            <Typography
                variant='h3'
                className={classes.subheader}
            >
                Projects
            </Typography>
            <Grid container spacing={3}>
                {projectCards}
            </Grid>
        </Box>
    );

};

export default PortfolioPage;
