import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Routes } from './routing/router';
import { StartPage } from './pages/StartPage/StartPage';
import { SetupPage } from './pages/StartPage/Setup';
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
            <BrowserRouter>
                <Switch>
                    <Route path={Routes.Setup} component={SetupPage} />
                    <Route exact path={Routes.Home} component={StartPage} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
