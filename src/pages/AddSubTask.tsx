import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase';

import { GoBack } from '../components/GoBack';
import { TaskCard } from '../components/TaskCard';
import { Routes } from '../routing/router';
import { AddGoalButton } from '../components/AddGoalButton';
import { GoalButton } from '../components/GoalButton';
import { Button } from 'react-rainbow-components';

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
export const AddSubtask = () => {
    const history = useHistory();
    const onSave = () => {
        history.push('/cele/dodane/bezpodcelu');
    };
    const { user }: any = useContext(AuthContext);

    const [id, setDocId] = useState(null);

    const temporaryArray = [];

    // db.collection('Goals')
    //     .where('userId', '==', 'y0LotDNde8MGDY677au6u8rn08y1')
    //     .where('name', '==', 'cel1')
    //     .get()
    //     .then(querySnapshot => {
    //         querySnapshot.forEach(doc => console.log('doc.data()', doc));
    //     });

    db.collection('Goals')
        .where('name', '==', 'cel1')
        .where('userId', '==', 'y0LotDNde8MGDY677au6u8rn08y1')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach((doc): any => {
                setDocId(doc.id);
            });
        })
        .catch(error => {
            console.log('Error getting documents: ', error);
        });
    console.log('id', id);

    //UPDATE
    if (id) {
        db.collection('Goals')
            .doc(id)
            .update({
                subtasks: firebase.firestore.FieldValue.arrayUnion({
                    name: 'test',
                    startDate: 'etetdsgvgcd',
                    endDate: 'sdsfdvsdfvfgfvsdfvddd'
                })
            });
    }

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
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '330px' }}>
                    <GoalButton title="Zapisz tylko główny cel" onClick={onSave} />
                </div>
            </View>
        </Wrapper>
    );
};
