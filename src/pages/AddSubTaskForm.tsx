import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'react-rainbow-components';
import { GoalButton } from '../components/GoalButton';
import { GoBack } from '../components/GoBack';
import { Routes } from '../routing/router';
import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { AuthContext } from '../contexts/Auth';
import { db } from '../firebase';
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
`;

const Main = styled.div`
    background: '#E5E5E5';
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const inputStyle = {
    maxWidth: 700,
    border: 1,
    paddingBottom: 20,
    color: '#FFFF'
};
const inputStyleTime = {
    Width: 700,
    border: 1,
    paddingBottom: 20
};

const CustomInput = styled(Input)`
    border: 1px solid #081449;
`;

export const AddSubTaskForm = () => {
    const [values, setValues] = useState({
        objective: '',
        starttime: '',
        endtime: '',
        isTime: false
    });

    const history = useHistory();

    const { currentGoal, setGoal } = useCurrentGoalContext();
    const { user } = useContext(AuthContext);
    const [id, setDocId] = useState();
    const [isSended, setSended] = useState<boolean>(false);

    const onSave = () => {
        const { objective, starttime, endtime, isTime } = values;

        if (id) {
            db.collection('Goals')
                .doc(id)
                .update({
                    subtasks: firebase.firestore.FieldValue.arrayUnion({
                        name: objective,
                        startDate: starttime,
                        endDate: endtime
                    })
                });
        }

        history.push(Routes.TimelineGoals);
    };

    db.collection('Goals')
        .where('name', '==', currentGoal?.objective)
        .where('userId', '==', currentGoal?.userId)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc): any => {
                setDocId(doc.id);
                setSended(true);
            });
        })
        .catch(error => {
            console.log('Error getting documents: ', error);
        });
    // ADD POPOPO
    return (
        <Wrapper>
            <Main>
                <GoBack url={Routes.AddSubtask} />
            </Main>
            <View>
                <div style={{ margin: '23px' }}>
                    <h1
                        style={{
                            color: '#9F9F9F',
                            left: '32px',
                            top: '75px',
                            marginBottom: '66px',
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '19px',
                            lineHeight: '100%',
                            letterSpacing: '-0.01em'
                        }}
                    >
                        Dodaj zadanie
                    </h1>
                    <CustomInput
                        label="Nazwa"
                        labelAlignment="left"
                        style={inputStyle}
                        name="objective"
                        type="text"
                        onChange={e => setValues({ ...values, objective: e.target.value })}
                    />
                    <Input
                        label="Rozpoczęcie"
                        labelAlignment="left"
                        style={inputStyleTime}
                        name="starttime"
                        type="datetime-local"
                        onChange={e => setValues({ ...values, starttime: e.target.value })}
                    />
                    <Input
                        label="Zakonczenie"
                        labelAlignment="left"
                        style={inputStyleTime}
                        name="endtime"
                        type="datetime-local"
                        onChange={e => setValues({ ...values, endtime: e.target.value })}
                    />
                    <Input
                        labelAlignment="left"
                        type="checkbox"
                        style={inputStyle}
                        name="isTime"
                        label="Czas nieokreślony"
                        onChange={e => setValues({ ...values, isTime: !values?.isTime })}
                    />

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '31px' }}>
                        <GoalButton title="Dalej" onClick={onSave} />
                    </div>
                </div>
            </View>
        </Wrapper>
    );
};
