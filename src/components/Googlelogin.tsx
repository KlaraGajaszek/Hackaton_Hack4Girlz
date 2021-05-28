import React from 'react';
import { withRouter } from 'react-router';
import 'firebase/auth';
import firebase from 'firebase';
import { newUser } from '../FirebaseDB/newUser';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@chakra-ui/react';

const GoogleLog = ({ history }) => {
    const login = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            await newUser(user);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Button leftIcon={<FcGoogle />} onClick={login}>
                Sign in with google
            </Button>
        </div>
    );
};

const LogWithGoogle = withRouter(GoogleLog);

export { LogWithGoogle };
