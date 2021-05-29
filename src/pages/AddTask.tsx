import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'react-rainbow-components';
import { Select } from 'react-rainbow-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth';
import { db } from '../firebase';
import { GoBack } from '../components/GoBack';
import { useCurrentGoalContext } from '../contexts/CurrentGoal';
import { Routes } from '../routing/router';
import { GoalButton } from '../components/GoalButton';

const View = styled.div`
    height: 750px;
    padding: 54px;
    background-color: white;
    padding: 20px;
    border-radius: 20px 20px 0px 0px;
    /* align-items: end; */
    position: fixed;
    left: 0;

    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Main = styled.div`
    background-color: ${props => props.theme.rainbow.palette.background.grey};
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

export const AddTask = () => {
    const { currentGoal, setGoal } = useCurrentGoalContext();
    const { user } = useContext(AuthContext);
    const [values, setValues] = useState(currentGoal);
    const history = useHistory();
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [name, setName] = useState('');
    const [prc, setPrc] = useState('');
    const [industry, setIndustry] = useState('');
    const [time, setTime] = useState(false);

console.log(values)
    const onSave = () => {
        setGoal({ ...values, userId: user?.uid });
        
        db.collection('Goals').add({ userId: user?.uid, price: values.prize, industry: values.industry, name: values.objective, startDate: values.starttime, endDate: values.endtime, subtasks: [], isDone: false, isTime: values.isTime });
        history.push(Routes.AddSubtask);
    };

    const options = [
        { value: 'IT', label: 'IT' },
        { value: 'muzyka', label: 'muzyka' },
        { value: 'sport', label: 'sport' }
    ];
    return (
        <Wrapper>
            <Main>
                <GoBack url="/cele" />
            </Main>
            <View>
                <div>
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
                        Dodaj cel
                    </h1>
                    <CustomInput
                        label="Nazwa Celu"
                        value={values.objective}
                        labelAlignment="left"
                        style={inputStyle}
                        name="objective"
                        type="text"
                        onChange={e => setValues({ ...values, objective: e.target.value })}
                    />
                    <Input
                        label="Rozpoczęcie"
                        labelAlignment="left"
                        value={values.starttime}
                        style={inputStyleTime}
                        name="starttime"
                        type="datetime-local"
                        onChange={e => setValues({ ...values, starttime: e.target.value })}
                    />
                    <Input
                        label="Zakonczenie"
                        value={values.endtime}
                        labelAlignment="left"
                        style={inputStyleTime}
                        name="endtime"
                        type="datetime-local"
                        onChange={e => setValues({ ...values, endtime: e.target.value })}
                    />
                    <Input
                        labelAlignment="left"
                        checked={values.isTime}
                        type="checkbox"
                        style={inputStyle}
                        name="isTime"
                        label="Czas nieokreślony"
                        onChange={e => setValues({ ...values, isTime: !values?.isTime })}
                    />
                    <Input
                        label="Nagroda"
                        value={values.prize}
                        labelAlignment="left"
                        style={inputStyle}
                        name="prize"
                        type="text"
                        onChange={e => setValues({ ...values, prize: e.target.value })}
                    />
                    <Select
                        label="Branża"
                        value={values.industry}
                        labelAlignment="left"
                        options={options}
                        name="industry"
                        onChange={e => setValues({ ...values, industry: e.target.value })}
                    />
                </div>

                <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'flex-end' }}>
                    <GoalButton title="Dalej" onClick={onSave} />
                </div>
            </View>
        </Wrapper>
    );
};
