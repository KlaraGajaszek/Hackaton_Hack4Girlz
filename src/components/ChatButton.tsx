import React from 'react';
import { Button } from 'react-rainbow-components';

export const ChatButton = ({ title, variant, onClick }) => {
    const buttonSize = {
        width: '200px'
    };
    return (
        <Button
            label={title}
            onClick={onClick}
            variant={variant}
            className="rainbow-m-around_medium "
            size="medium"
            style={buttonSize}
        />
    );
};
