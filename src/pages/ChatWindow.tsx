import React, { useState } from 'react';
import { useCollectionData, useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { AiOutlineSend } from 'react-icons/ai';
import { Input } from 'react-rainbow-components';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GoBack } from '../components/GoBack';
import Loader from '../components/Loader';
import { useAuthContext } from '../contexts/Auth';
import { getChatDocId, Message, newMessage } from '../db/newMessage';
import { db } from '../firebase';
import { Routes } from '../routing/router';
import { sortByDateData } from '../utils/sortByDate';

const NewText = styled.div`
    padding: 12px 20px;
    display: flex;
    justify-content: stretch;
    align-items: center;
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const MyInput = styled(Input)`
    flex-grow: 3;
    margin-right: 8px;
`;

const NewMsg = ({ myId, counterPartyId }) => {
    const [msg, setMsg] = useState('');

    const sendMsg = () => {
        setMsg('');
        newMessage(myId, counterPartyId, msg);
    };

    return (
        <NewText>
            <MyInput
                placeholder="Napisz coś..."
                value={msg}
                onKeyDown={e => e.key === 'Enter' && sendMsg()}
                onChange={e => setMsg(e.target.value)}
            />
            <AiOutlineSend size="2.5em" onClick={sendMsg} />
        </NewText>
    );
};

const ChatMsgs = ({ counterParty, me }) => {
    const ref = db.collection('Chat').doc(getChatDocId(me.uid, counterParty.id)).collection('Messages');
    const [messages, loading] = useCollectionData<Message>(ref);
    console.log('🚀 ~ file: ChatWindow.tsx ~ line 51 ~ ChatMsgs ~ messages', messages);

    if (loading)
        return (
            <div>
                <Loader />
                <NewMsg myId={me.uid} counterPartyId={counterParty.id} />
            </div>
        );

    return (
        <div>
            {messages.sort(sortByDateData).map(({ content, sender }) => (
                <div style={{ textAlign: sender === me.uid ? 'right' : 'left' }}>{content}</div>
            ))}
            <NewMsg myId={me.uid} counterPartyId={counterParty.id} />
        </div>
    );
};

const ChatWindow = () => {
    const path = useParams();
    const [user, loading] = useDocumentDataOnce(db.doc(`Users/${path.id}`));
    const { user: me } = useAuthContext();

    if (loading)
        return (
            <>
                <GoBack url={Routes.Chat} />
                <Loader />
            </>
        );

    return (
        <>
            <GoBack url={Routes.Chat} />
            <ChatMsgs counterParty={{ ...user, id: path.id }} me={me} />
        </>
    );
};

export { ChatWindow };
