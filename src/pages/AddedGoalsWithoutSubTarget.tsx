import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { ButtonIcon } from 'react-rainbow-components';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { Card } from 'react-rainbow-components';
import { useHistory } from 'react-router';
import { db } from '../firebase';
import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { GoalButton } from '../components/GoalButton';
import { Notification } from 'react-rainbow-components';

import SlideX from '../assets/png/cat/SlideX.png';

const Title = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 100%;
    color:'#000000'
    letter-spacing: -0.01em; ;
`;

const Test = styled.div`
    display: flex;
    margin-top: 22px;
    margin-left: 45px;
    flex-direction: column;
`;

const Data = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: '#9F9F9F';
    margin-top: 5px;
`;

const Navbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 25px;
    padding-top: 5px;
`;

const DeleteIcon = styled(RiDeleteBin4Line)`
    width: 20px;
    height: 20px;
    margin-left: 25px;
    float: right;
    color: '#576574';
    background-color: '#576574';
`;
const EditIcon = styled(MdEdit)`
    width: 20px;
    height: 20px;
    float: right;
    color: '#576574';
    background-color: '#576574';
`;

const View = styled.div`
    height: 450px;
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
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddedGoalsWithoutSubTarget = () => {
    const { currentGoal, setGoal } = useCurrentGoalContext();
    const [sended, setSended] = useState(false);
    const allGoals = db.collection('Goals').doc('4NGXdhMPGGxbXG24GpSA');
    const history = useHistory();
    const onSave = () => {
        db.collection('Goals')
            .doc('4NGXdhMPGGxbXG24GpSA')
            .set({
                userId: currentGoal.userId,
                goals: currentGoal,
                name: currentGoal.objective,
                subtasks: currentGoal.subtasks
            })
            .then(() => {
                setSended(true);
                setGoal({
                    userId: '',
                    objective: '',
                    starttime: '',
                    endtime: '',
                    isTime: false,
                    prize: '',
                    industry: '',
                    subtasks: []
                });
                setTimeout(() => {
                    history.push('/cele');
                }, [1000]);
            })
            .catch(error => {
                console.error('Error writing document: ', error);
            });
    };
    const onEdit = () => {
        history.push('/cele/nowy');
    };
    const onDelete = () => {
        console.log('onsave');
    };
    return (
        <Wrapper>
            <Main>
                {sended && (
                    <div className="rainbow-p-bottom_x-small" style={{ zIndex: '50000' }}>
                        <Notification description="Cel został dodany" icon="success" />
                    </div>
                )}
            </Main>
            <View>
                <Navbar>
                    <div></div>
                    <div style={{ marginTop: '5px' }}>
                        <button onClick={onEdit}>
                            <EditIcon />
                        </button>
                        <button onClick={onDelete}>
                            <DeleteIcon />
                        </button>
                    </div>
                </Navbar>
                <img src={SlideX} style={{ width: '180px', height: '180px' }} />
                <Test>
                    <Title>{currentGoal.objective}</Title>
                    <Data>{`${currentGoal?.starttime} - ${currentGoal?.endtime} `}</Data>
                </Test>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1px' }}>
                    <GoalButton title="Zapisz" onClick={onSave} />
                </div>
            </View>
        </Wrapper>
    );
};
