import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'react-rainbow-components';
import { Select } from 'react-rainbow-components';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase';
import { GoBack } from '../components/GoBack';
import { Routes } from '../routing/router';
import { GoalButton } from '../components/GoalButton';
import { userSetup } from '../db/userSetup';
import { useUserData } from '../hooks/useUserData';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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



export const AddTask = () => {

  
    // db.collection("Goals").add({
    //     name: "Los Angeles",
    //     industry: "IT",
    //     country: "USA",
    //     nested: ['1','2']
    // })
    //     .then(() => {
    //         console.log("Document successfully written!");
    //     })
    //     .catch((error) => {
    //         console.error("Error writing document: ", error);
    //     });


 //   db.collection('Goals').doc('Aqd8aP8uLSvuAgsMs5aW').update({"nested": ['12','14']})
 //   db.collection('Goals').doc('Aqd8aP8uLSvuAgsMs5aW').set({ "nested": ['19', '20'] }, { merge: true });
   // db.app.database().ref("Goals/").set({Aqd8aP8uLSvuAgsMs5aW: {nested: [4,8]}});

    const cityRef = db.collection('Goals').doc('diceC0e4DwYyVKH00FtN');

     cityRef.set({
        nested: '6'
    }, { merge: true });
 
    const [values, setValues] = useState({
        objective: '',
        starttime: '',
        endtime: '',
        isTime: false,
        prize: '',
        industry: '',
        subtasks: []
    });
    
    const history = useHistory();
    const onSave = () => {
        // add to FB
        console.log('values', values);
        // when try
        history.push(Routes.AddSubtask);
    };
    db.collection('Goals').where('name', '==', 'name1')
    .where('name', '==', 'name1')
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {

            console.log(doc.id)
        });
    })
    .catch(error => {
        console.log('Error getting documents: ', error);
    });

    // db.collection('Goals').where('name', '==', 'name1')
    // .where('name', '==', 'name1')
    // .get()
    // .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
           
    //         console.log(doc.id)
    //     });
    // })
    // .catch(error => {
    //     console.log('Error getting documents: ', error);
    // });

    const options = [
        { value: 'IT', label: 'IT' },
        { value: 'muzyka', label: 'muzyka' },
        { value: 'sport', label: 'sport' }
    ];
    return (
        <Wrapper>
            <Main>
                <GoBack url="/goals" />
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
                        Dodaj cel
                    </h1>
                    <CustomInput
                        label="Nazwa Celu"
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
                    <Input
                        label="Nagroda"
                        labelAlignment="left"
                        style={inputStyle}
                        name="prize"
                        type="text"
                        onChange={e => setValues({ ...values, prize: e.target.value })}
                    />
                    <Select
                        label="Branża"
                        labelAlignment="left"
                        options={options}
                        name="industry"
                        onChange={e => setValues({ ...values, industry: e.target.value })}
                    />

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '31px' }}>
                        <GoalButton title="Dalej" onClick={onSave} />
                    </div>
                </div>
            </View>
        </Wrapper>
    );
};
