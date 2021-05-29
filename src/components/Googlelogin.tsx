import React from 'react';
import { withRouter } from 'react-router';
import 'firebase/auth';
import firebase from 'firebase';
import { newUser } from '../db/newUser';
import styled from '@emotion/styled';

const GoogleLog = ({ history }) => {
    const StyledImage = styled.img`
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 90px;
        width: 90px;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
    `;

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
            <StyledImage src="https://img.icons8.com/clouds/100/000000/google-logo.png" onClick={login} />
        </div>
    );
};

const LogWithGoogle = withRouter(GoogleLog);

export { LogWithGoogle };
