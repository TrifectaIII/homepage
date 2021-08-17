import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {
    Container,
    CssBaseline,
    ThemeProvider,
    createTheme,
    ThemeOptions,
} from '@material-ui/core';

import Main from './pages/MainPage';
import NotFound from './pages/NotFoundPage';
import Portfolio from './pages/PortfolioPage';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import {useAppSelector} from './state/hooks';
import {selectDarkMode} from './state/globalSlice';

// set up dark and light themes
// https://material-ui.com/customization/color/#playground
const lightThemeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
};
const darkThemeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
};

// Main App component
const App = (): JSX.Element => {

    // choose theme based on state
    const darkMode = useAppSelector(selectDarkMode);
    const lightTheme = createTheme(lightThemeOptions);
    const darkTheme = createTheme(darkThemeOptions);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        // provider theme
        <ThemeProvider theme={theme}>

            {/* normalize css */}
            <CssBaseline />

            <Router>
                {/* include header and menu on every page */}
                <Header />
                <MenuDrawer />

                {/* route based on url */}
                <Container>
                    <Switch>
                        {/* main page */}
                        <Route
                            exact path='/'
                            component={Main}
                        />
                        <Route
                            exact path='/'
                            component={Main}
                        />
                        <Route
                            exact path='/portfolio'
                            component={Portfolio}
                        />
                        {/* default to 404 */}
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );

};

export default App;
