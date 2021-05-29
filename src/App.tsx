import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Application } from 'react-rainbow-components';
import { AuthProvider } from './FirebaseDB/Auth';
import PrivateRoute from './routing/PrivateRoute';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { SetupPage } from './pages/SetupPage';
import { StartPage } from './pages/StartPage';
import { Routes } from './routing/router';
import { Profile } from './pages/Profile';
import { OnlyObjective } from './pages/OnlyObjective';
import { EditObjective } from './pages/EditObjective';
import { Goals } from './pages/PersonalGoals';

const theme: DefaultTheme = {
    rainbow: {
        palette: {
            primary: {
                main: '#01B6F5',
                light: '#DAF8FF',
                dark: '#061C3F'
            },
            secondary: {
                main: '#FF507A',
                light: '#FC5B82',
                dark: '#E5E5E5'
            },
            text: {
                primary: '#000000',
                secondary: '#061C3F',
                gray: '#595454',
                lightGray: '#8898AA'
            },
            background: {
                grey: '#E5E5E5',
                white: '#FFFFFF'
            },
            success: '#1AD1A3',
            error: '#f14336',
            warning: '#f7b500',
            brand: '#00CAFD'
        }
    }
};

const rainbowTheme = {
    rainbow: {
        palette: {
            success: '#FF507A'
        }
    }
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Application theme={rainbowTheme}>
                <AuthProvider>
                    <Router>
                        <Route path={Routes.Setup} component={SetupPage} />
                        <PrivateRoute exact path={Routes.Home} component={StartPage} />
                        <Route exact path={Routes.Login} component={Login} />
                        <Route exact path={Routes.Profile} component={Profile} />
                        <PrivateRoute exact path={Routes.Goals} component={Goals} />
                        <Route exact path={Routes.OnlyObjective} component={OnlyObjective} />
                        <Route exact path={Routes.EditObjective} component={EditObjective} />
                        <Route exact path={Routes.Registration} component={Registration} />
                    </Router>
                </AuthProvider>
            </Application>
        </ThemeProvider>
    );
};

export default App;
