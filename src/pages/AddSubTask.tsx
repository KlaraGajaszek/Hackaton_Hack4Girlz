import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { useHistory } from 'react-router';

import { GoBack } from '../components/GoBack';

import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';
import { GoalButton } from '../components/GoalButton';
import { AuthContext } from '../contexts/Auth';
import firebase from 'firebase';

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
    const { user }: any = useContext(AuthContext);
    const [id, setDocId] = useState(null);
    const history = useHistory();

    const onSave = () => {
        if (currentGoal?.objective && currentGoal?.userId) {
            db.collection('Goals')
                .where('name', '==', currentGoal?.objective)
                .where('userId', '==', currentGoal?.userId)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach((doc): any => {
                        console.log('XXXXX', doc.id);

                        setTimeout(function () {
                            setDocId(doc.id);
                        }, 3000);
                    });
                })
                .catch(error => {
                    console.log('Error getting documents: ', error);
                });

            history.push('/cele/dodane/bezpodcelu');
        }
    };

    // db.collection('Goals')
    //     .where('userId', '==', 'y0LotDNde8MGDY677au6u8rn08y1')
    //     .where('name', '==', 'cel1')
    //     .get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach(doc => console.log('doc.data()', doc));
    //     });

    console.log('id', id);

    //UPDATE
    // if (id) {
    //     db.collection('Goals')
    //         .doc(id)
    //         .update({
    //             subtasks: firebase.firestore.FieldValue.arrayUnion({
    //                 name: 'test',
    //                 startDate: 'etetdsgvgcd',
    //                 endDate: 'sdsfdvsdfvfgfvsdfvddd'
    //             })
    //         });
    // }

    // const allGoals = db.collection('Goals').doc('4NGXdhMPGGxbXG24GpSA');

    // const onSave = () => {
    //     history.push('/cele/dodane/bezpodcelu');
    // };

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
