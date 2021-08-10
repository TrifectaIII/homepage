import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    Typography,
    Divider,
    Button,
    ButtonGroup,
    makeStyles,
} from '@material-ui/core';
import {
    MailOutline,
    FolderOpen,
    InsertDriveFileOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    text: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
    divider: {
        width: '50%',
        margin: '10px',
    },
    icon: {
        marginRight: '0.5rem',
    },
}));

import resume from '../tex/dakotamaddenfong_resume.pdf';

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

            <Typography
                variant='body1'
                className={classes.text}
            >
                A coder living and working in San Francisco, CA.
                I focus on software and web development.
            </Typography>

            <ButtonGroup
                orientation='vertical'
                className={classes.buttons}
                variant='contained'
            >
                <Button
                    href={resume}
                    color='secondary'
                >
                    <InsertDriveFileOutlined className={classes.icon} /> Resume
                </Button>
                <Button
                    onClick={() => props.history.push('/portfolio')}
                    color='primary'
                >
                    <FolderOpen className={classes.icon} />  Portfolio
                </Button>
                <Button
                    onClick={() => props.history.push('/contact-info')}
                    color='secondary'
                >
                    <MailOutline className={classes.icon} />  Contact Info
                </Button>
            </ButtonGroup>
        </Box>
    );

};

export default MainPage;
