import React from 'react';
import {
    RouteComponentProps,
} from 'react-router-dom';

import {
    Box,
    Typography,
    Button,
    ButtonGroup,
    makeStyles,
} from '@material-ui/core';
import {
    MailOutline,
    CallOutlined,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
    icon: {
        marginRight: '0.5rem',
    },
}));

// Page containing contact info
const ContactPage = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography variant='h2' align='center'>
                Contact Info
            </Typography>

            <ButtonGroup
                orientation='vertical'
                className={classes.buttons}
                variant='contained'
            >
                <Button
                    color='secondary'
                    href='mailto:maddenfong@gmail.com'
                    style={{textTransform: 'none'}}
                >
                    <MailOutline className={classes.icon} /> maddenfong@gmail.com
                </Button>

                <Button
                    color='primary'
                    href='tel:+1415-810-0334'
                >
                    <CallOutlined className={classes.icon} /> +1 (415) 810 - 0334
                </Button>
            </ButtonGroup>

        </Box>
    );

};

export default ContactPage;
