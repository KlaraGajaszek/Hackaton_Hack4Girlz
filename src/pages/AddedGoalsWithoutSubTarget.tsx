import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { ButtonIcon } from 'react-rainbow-components';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { Card } from 'react-rainbow-components';

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
    /* height: 400px; */
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
    const onSave = () => {
        console.log('onsave');
    };
    const onEdit = () => {
        console.log('onsave');
    };
    const onDelete = () => {
        console.log('onsave');
    };
    return (
        <Wrapper>
            <Main>sdfsdfsd</Main>
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
                    <Title>Zdobycie pierwszej pracy jako UX</Title>
                    <Data>27.05.2021 - 27.05.2022</Data>
                </Test>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '31px' }}>
                    <Button label="Zapisz" onClick={onSave} variant="brand" className="rainbow-m-around_medium" />
                </div>
            </View>
        </Wrapper>
    );
};
