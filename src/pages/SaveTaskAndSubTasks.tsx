import React from 'react';
import styled from 'styled-components';

import { GoBack } from '../components/GoBack';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';
import { Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
export const SaveTaskAndSubTasks = () => {
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddTask} />
            </Main>
            <View>
                <Title>Twój cel</Title>
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <TaskCard
                        startData="27.05.2021"
                        endData="27.05.2022"
                        title="Zdobycie pierwszej pracy jako UX designer"
                        editUrl="/cele/nowy"
                    />
                </div>
                <AddGoalButton url="/cele/nowy/podcel/formularz" />
            </View>
        </Wrapper>
    );
};
