import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { Input } from 'react-rainbow-components';

import { Select } from 'react-rainbow-components';
import { GoBack } from '../components/GoBack';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';

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

export const AddSubtask = () => {
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddTask} />
            </Main>
            <View>
                <TaskCard startData="start" endData="end" title="title" onClick={() => console.log('onClick')} />
            </View>
        </Wrapper>
    );
};
