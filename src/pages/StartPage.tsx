import React, { useState } from 'react';
import styled from 'styled-components';
import { Achievments } from '../components/Achievments';
import { Greeting } from '../components/Greeting';
import { NewPost } from '../components/NewPost';
import { Posts } from '../components/Posts';

const Container = styled.div`
    background-color: ${props => props.theme.rainbow.palette.background.grey};
    min-height: 100vh;
`;

export const StartPage = () => {
    return (
        <Container>
            <Greeting />
            <NewPost />
            <Achievments />
            <Posts />
        </Container>
    );
};
