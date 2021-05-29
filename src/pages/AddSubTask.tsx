import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { GoBack } from '../components/GoBack';

import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';
import { GoalButton } from '../components/GoalButton';

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

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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
export const AddSubtask = () => {
    const { currentGoal, setGoal } = useCurrentGoalContext();
    const allGoals = db.collection('Goals').doc('4NGXdhMPGGxbXG24GpSA');
    const history = useHistory();

    const onSave = () => {
        history.push('/cele/dodane/bezpodcelu');
    };

    console.log('addsubtask isTime: ', currentGoal.isTime);
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddTask} />
            </Main>
            <View>
                <div>
                    <Title>Twój cel</Title>
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <TaskCard
                            startDate={currentGoal.starttime}
                            endDate={currentGoal?.endtime}
                            isTime={currentGoal?.isTime}
                            title={currentGoal.objective}
                            editUrl="/cele/nowy"
                        />
                    </div>
                    <AddGoalButton url="/cele/nowy/podcel/formularz" />
                </div>
                <div style={{ marginBottom: '60px' }}>
                    <GoalButton title="Zapisz tylko główny cel" onClick={onSave} />
                </div>
            </View>
        </Wrapper>
    );
};
