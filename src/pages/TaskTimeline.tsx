import React from 'react';
import styled from 'styled-components';
import { ActivityTimeline, TimelineMarker, Card } from 'react-rainbow-components';

import { GoBack } from '../components/GoBack';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';
import { Button } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };

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

export const TaskTimeline = () => {
    const onSave = () => {
        console.log('on save');
    };
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddSubtask} />
            </Main>
            <View>
                <div>
                    <div>
                        <TaskCard
                            startData="27.05.2021"
                            endData="27.05.2022"
                            title="Zdobycie pierwszej pracy jako UX designer"
                            editUrl="/cele/nowy/podcel/formularz"
                        />
                    </div>
                    <div style={{ marginLeft: '100px' }}>
                        <ActivityTimeline>
                            <TimelineMarker
                                label="Ukończ kurs"
                                // icon={<UserFirstPostIcon style={iconStyles} />}
                                description="27.05.2021 - 27.05.2022"
                            ></TimelineMarker>
                        </ActivityTimeline>
                    </div>
                    <AddGoalButton url="" />
                </div>

                <div style={{ marginBottom: '60px' }}>
                    <Button label="Zapisz" onClick={onSave} variant="brand" className="rainbow-m-around_medium" />
                </div>
            </View>
        </Wrapper>
    );
};
