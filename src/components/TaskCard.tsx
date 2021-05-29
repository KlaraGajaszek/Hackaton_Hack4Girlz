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
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    color: #171717;
`;

const DateDisplay = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 100%;
    color: #7c7878;
    letter-spacing: -0.01em;
`;

export const TaskCard = ({ title, startDate, endDate, isTime, editUrl }) => {
    const cardStyle = {
        backgroundColor: '#DAF8FF',
        padding: '15px',
        width: '300px',
        height: '200px'
    };
    const history = useHistory();
    const formattedStartDate = new Date(Date.parse(startDate)).toLocaleString('pl-PL');
    const formattedEndDate = new Date(Date.parse(endDate)).toLocaleString('pl-PL');
    console.log('taskCard isTime: ', isTime);
    const hasNoTimeConstraint = isTime;
    console.log('has time constraint: ', hasNoTimeConstraint);
    const dateRange = hasNoTimeConstraint ? 'no time constraint' : `${formattedStartDate} - ${formattedEndDate}`;

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
                    <DateDisplay>{dateRange}</DateDisplay>
                </div>
            </DataWrapper>
        </Card>
    );
};
