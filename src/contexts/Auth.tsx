import React, { useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../components/Loader';
import { Animals, Industries, Specials } from '../constants/user';

export type AuthContextValue = {
    user: firebase.User | null;
    userData: UserData;
    loading: boolean;
    error: any;
};

export const AuthContext = React.createContext<AuthContextValue>(null);

export type UserData = {
    description: string;
    industry: Industries | string;
    specialization: Specials | string;
    animal: Animals;
    isSetupCompleted: boolean;
    displayName: string;
    photoURL: string;
    email: string;
};

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState<UserData>(null);

    useEffect(() => {
        (async () => {
            if (!user) return;
            db.doc(`Users/${user.uid}`).onSnapshot(doc => {
                setUserData(doc.data());
            });
        })();
    }, [user]);

    if (loading || (user && !userData)) {
        return <Loader />;
    }

    if (error) {
        console.log('errorAuth:', error);
        // console.log('error', error);
        return <>Authentication error...</>;
    }

    return <AuthContext.Provider value={{ user, userData, loading: loading, error }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
