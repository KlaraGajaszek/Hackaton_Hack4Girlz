import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { SetupPage } from './pages/Setup';
import { StartPage } from './pages/StartPage';
import { Routes } from './routing/router';

const theme: DefaultTheme = {
    rainbow: {
        palette: {
            success: '#44d7b6',
            error: '#f14336',
            warning: '#f7b500',
            brand: '#00CAFD',
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
                    <Route path={Routes.Setup} component={SetupPage} />
                    <PrivateRoute exact path={Routes.Home} component={StartPage} />
                    <Route exact path={Routes.Login} component={Login} />
                    <Route exact path={Routes.Registration} component={Registration} />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;
