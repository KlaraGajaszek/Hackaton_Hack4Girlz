import React from 'react';
import { Card } from 'react-rainbow-components';

export const TaskCard = ({ title, startData, endData, onClick }) => {
    const cardStyle = {
        backgroundColor: '#DAF8FF',
        padding: '20px',
        width: '146px',
        height: '133px'
    };

    return (
        <Card style={cardStyle}>
            <span>{title}</span>
            <span>{startData}</span>
            <span>{endData}</span>
            <button onClick={onClick}>
                <span>icon</span>
            </button>
        </Card>
    );
};
