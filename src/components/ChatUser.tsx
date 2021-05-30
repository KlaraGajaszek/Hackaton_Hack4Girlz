import React from 'react';
import { Avatar } from 'react-rainbow-components';

const ChatUser = ({ user, onClickHandler }) => {
    const userWrapper = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        fontSize: '16px',
        color: '#000000'
    };

    const avatarStyles = {
        marginRight: '10px',
        height: '50px',
        width: '50px'
    };

    return (
        <div style={userWrapper} onClick={onClickHandler}>
            <Avatar src={user.photoURL} style={avatarStyles} /> {user.displayName}
        </div>
    );
};

export default ChatUser;
