import React from 'react';
import { Card } from 'react-rainbow-components';
import styled from 'styled-components';
import { MdEdit } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: #171717;
`;

const Date = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 100%;
    color: #7c7878;
    letter-spacing: -0.01em;
`;

export const TaskCard = ({ title, startData, endData, editUrl }) => {
    const cardStyle = {
        backgroundColor: '#DAF8FF',
        padding: '15px',
        width: '156px',
        height: '156px'
    };
    const history = useHistory();

    return (
        <Card style={cardStyle}>
            <button
                style={{ marginBottom: '5px', marginLeft: '90%' }}
                onClick={() => {
                    history.push(editUrl);
                }}
            >
                <MdEdit />
            </button>
            <DataWrapper>
                <Title>{title}</Title>
                <div style={{ display: 'flex', flexDirection: 'row', flexShrink: 0, marginTop: '50px' }}>
                    <Date>{`${startData} - ${endData}`}</Date>
                </div>
            </DataWrapper>
        </Card>
    );
};
