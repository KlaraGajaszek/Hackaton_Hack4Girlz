import React from 'react';
import { auth } from '../firebase';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <>Loading...</>;
    }

    if (error) {
        console.log(error);
        return <>Authentication error...</>;
    }

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
