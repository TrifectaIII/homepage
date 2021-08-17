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
    CallOutlined,
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
    mainbuttons: {
        marginTop: '3rem',
    },
    contactheader: {
        marginTop: '2rem',
    },
    contactbuttons: {
        marginTop: '1rem',
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
                className={classes.mainbuttons}
                variant='contained'
                size='large'
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
            </ButtonGroup>
            <Typography
                variant='h3'
                className={classes.contactheader}
            >
                Contact Info
            </Typography>
            <ButtonGroup
                orientation='vertical'
                className={classes.contactbuttons}
                variant='outlined'
            >
                <Button
                    color='secondary'
                    href='mailto:maddenfong@gmail.com'
                    style={{textTransform: 'none'}}
                >
                    <MailOutline className={classes.icon} /> maddenfong@gmail.com
                </Button>

                <Button
                    color='secondary'
                    href='tel:+1415-810-0334'
                >
                    <CallOutlined className={classes.icon} /> +1 (415) 810 - 0334
                </Button>
            </ButtonGroup>
        </Box>
    );

};

export default MainPage;
