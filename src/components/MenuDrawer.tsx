import React from 'react';

import {
    Box,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import {
    FolderOpen,
    Home,
} from '@material-ui/icons';

import {MobileOnly} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectMenuDrawerOpen,
    openMenuDrawer,
    closeMenuDrawer,
} from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
    },
    linkText: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    inactive: {
        color: theme.palette.text.secondary,
    },
    hidden: {
        color: theme.palette.background.paper,
    },
}));

// drawer for navigation on mobile view
const MenuDrawer = (props: {
    scrollToTop: () => void,
    scrollToPortfolio: () => void,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();

    const open = useAppSelector(selectMenuDrawerOpen);

    return (
        <MobileOnly>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onOpen={() => dispatch(openMenuDrawer())}
                onClose={() => dispatch(closeMenuDrawer())}
            >
                <Box className={classes.root}>
                    <List>
                        {/* home item */}
                        <div
                            className={classes.linkText}
                            onClick={() => dispatch(closeMenuDrawer())}
                        >
                            <ListItem
                                onClick={props.scrollToTop}
                            >
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary='Home' />
                            </ListItem>
                        </div>
                        <div
                            className={classes.linkText}
                            onClick={() => dispatch(closeMenuDrawer())}
                        >
                            <ListItem
                                onClick={props.scrollToPortfolio}
                            >
                                <ListItemIcon>
                                    <FolderOpen />
                                </ListItemIcon>
                                <ListItemText primary='Portfolio' />
                            </ListItem>
                        </div>
                    </List>
                </Box>
            </SwipeableDrawer>
        </MobileOnly>
    );

};

export default MenuDrawer;
