import React from 'react';
import { Button } from 'react-rainbow-components';

export const GoalButton = ({ title, onClick }) => {
    const buttonSize = {
        width: '200px'
    };
    return (
        <Button
            label={title}
            onClick={onClick}
            variant="brand"
            className="rainbow-m-around_medium "
            size="medium"
            style={buttonSize}
        />
    );
};
