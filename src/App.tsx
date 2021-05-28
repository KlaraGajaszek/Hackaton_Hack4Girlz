import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StartPage } from './pages/StartPage/StartPage';
import Login from './pages/StartPage/login';
import Registration from './pages/StartPage/Registration';
import { Routes } from './routing/router';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './Auth';

import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
    rainbow: {
        palette: {
            success: '#44d7b6',
            error: '#f14336',
            warning: '#f7b500',
            brand: '#6860db',
            mainBackground: '#f4f5f7',
            black: '#000000'
        }
    }
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <PrivateRoute exact path={Routes.Home} component={StartPage} />
                    <Route exact path={Routes.Login} component={Login} />
                    <Route exact path={Routes.Registration} component={Registration} />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
