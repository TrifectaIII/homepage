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
    GitHub,
} from '@material-ui/icons';

import {
    useAppSelector,
} from '../state/hooks';
import {
    selectDarkMode,
} from '../state/globalSlice';
import CopyButton from '../components/CopyButton';

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

import general from '../data/general.json';
import resume from '../tex/dakotamaddenfong_resume.pdf';

// main index page for empty route
const MainPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    // access dark mode info
    const darkMode = useAppSelector(selectDarkMode);

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
                    color='primary'
                >
                    <InsertDriveFileOutlined className={classes.icon} /> Resume
                </Button>
                <Button
                    onClick={() => props.history.push('/portfolio')}
                    color='secondary'
                >
                    <FolderOpen className={classes.icon} />  Portfolio
                </Button>
                <Button
                    href={general.github}
                    color='primary'
                >
                    <GitHub className={classes.icon} />  GitHub
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
                variant='text'
                color={darkMode ? 'secondary' : 'primary'}
            >
                <CopyButton
                    icon={MailOutline}
                    contents='maddenfong@gmail.com'
                />
                <CopyButton
                    icon={CallOutlined}
                    contents='+1 415 810 0334'
                />
            </ButtonGroup>
        </Box>
    );

};

export default MainPage;
