import React from 'react';
import styled from 'styled-components';

import { GoBack } from '../components/GoBack';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';

const View = styled.div`
    height: 750px;
    padding: 54px;
    background-color: white;
    padding: 5px;
    border-radius: 20px 20px 0px 0px;
    /* align-items: end; */
    position: fixed;
    left: 0;

    right: 0;
    bottom: 0;
`;

const Main = styled.div`
    background: '#E5E5E5';
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    margin: 10px;
    line-height: 100%;
    color: #9f9f9f;
    letter-spacing: -0.01em;
`;

//Get data from fb
export const AddSubtaskForm = () => {
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddSubtask} />
            </Main>
            <View>Add Subtask Form</View>
        </Wrapper>
    );
};
