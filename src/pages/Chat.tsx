import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Avatar } from 'react-rainbow-components';
import { useHistory } from 'react-router';
import Loader from '../components/Loader';
import { db } from '../firebase';
import { Routes } from '../routing/router';

const Chat = () => {
    const ref = db.collection('Users');
    const [users, loading] = useCollection(ref);
    const history = useHistory();

    if (loading) return <Loader />;

    const openChat = id => () => {
        history.push(Routes.Chat + '/' + id);
    };

    return (
        <div>
            {users.docs
                .map(doc => ({ id: doc.id, user: doc.data() }))
                .map(({ id, user }) => (
                    <div style={{ display: 'flex', alignItems: 'center' }} onClick={openChat(id)}>
                        {user.displayName} <Avatar src={user.photoURL} />
                    </div>
                ))}
        </div>
    );
};

export { Chat };
