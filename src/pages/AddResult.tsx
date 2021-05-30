import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'react-rainbow-components';
import { Select } from 'react-rainbow-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
import { db } from '../firebase';

import { GoBack } from '../components/GoBack';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { Routes } from '../routing/router';
import { GoalButton } from '../components/GoalButton';
import cat_lying from '../assets/gifs/cat_lying.gif';
import { ProgressCircular } from 'react-rainbow-components';
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
`;

const Main = styled.div`
    background: '#E5E5E5';
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const CatImage = styled.img`
    width: 200px;
    height: 200px;
`;

const CatContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

const AimContailer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const TitleAim = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 100%;
    /* or 19px */
    letter-spacing: -0.01em;
    color: #000000;
    margin-bottom: 10px;
`;

const DateAim = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 100%;
    letter-spacing: -0.01em;
    color: #9f9f9f;
`;

export const AddResult = () => {
    const { currentGoal, setGoal } = useCurrentGoalContext();
    const { user } = useContext(AuthContext);
    const [values, setValues] = useState(currentGoal);
    const history = useHistory();

    const onSave = () => {
        // setGoal({ ...values, userId: user?.uid });
        // history.push(Routes.AddSubtask);
    };

    const options = [
        { value: 'IT', label: 'IT' },
        { value: 'muzyka', label: 'muzyka' },
        { value: 'sport', label: 'sport' }
    ];
    const iconStyles = { width: 32, height: 32 };
    const isDone = false;
    return (
        <Wrapper>
            <Main>
                <GoBack url="/cele" />
            </Main>
            <View>
                <CatContainer>
                    <CatImage src={cat_lying} />
                    <div>
                        <ProgressCircular value={40} />
                    </div>
                </CatContainer>
                <AimContailer>
                    <TitleAim>Zdobycie pierwszej pracy jako UX designer</TitleAim>
                    <DateAim>DATA</DateAim>
                </AimContailer>
                <ActivityTimeline>
                    {[...Array(3)].map(() => (
                        <TimelineMarker
                            label="Znalezienie mentora/ki"
                            description="data"
                            icon={
                                <button>
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        size="lg"
                                        style={{ color: isDone ? 'red' : 'green' }}
                                    />
                                </button>
                            }
                        />
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <GoalButton title="Zapisz" onClick={onSave} />
                    </div>
                </ActivityTimeline>
            </View>
        </Wrapper>
    );
};
