import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StartPage } from './pages/StartPage/StartPage';
import  Login  from './pages/StartPage/login';
import Registration from './pages/StartPage/Registration';
import { Routes } from './routing/router';
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <PrivateRoute exact path={Routes.Home} component={StartPage} />
                <Route exact path={Routes.Login} component={Login} />
                <Route exact path={Routes.Registration} component={Registration} />
            </Router>
        </AuthProvider>
    );
};

export default App;
