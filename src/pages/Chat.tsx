import React from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Avatar } from 'react-rainbow-components';
import { AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router';
import Loader from '../components/Loader';
import { db } from '../firebase';
import { Routes } from '../routing/router';

import { useAuthContext } from '../contexts/Auth';
import { Input } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Animals } from '../constants/user';
import Szpila from '../assets/png/cat/Head.png';
import Lila from '../assets/png/dog/Head.png';
import ChatUser from '../components/ChatUser';
import { ChatButton } from '../components/ChatButton';

const Chat = () => {
    const ref = db.collection('Users');
    const [users, loading] = useCollection(ref);
    const history = useHistory();

    const {
        user: { displayName, uid },
        userData: { animal }
    } = useAuthContext();

    if (loading) return <Loader />;

    const openChat = id => () => {
        history.push(Routes.Chat + '/' + id);
    };

    const Container = styled.div`
        background-color: ${props => props.theme.rainbow.palette.background.grey};
    `;

    const ChatWrapper = styled.div`
        background-color: ${props => props.theme.rainbow.palette.background.white};
        color: 'black';
    `;

    const inputStyle = {
        maxWidth: 700,
        border: 1,
        paddingBottom: 20,
        color: '#FFFF'
    };

    const firstName = displayName.split(' ')[0];

    const handleFilterAll = () => {
        console.log('filtering all');
    };

    const handleFilterMentors = () => {
        console.log('filtering mentors');
    };

    const filterButtonStyles = {
        display: 'flex',
        padding: '5px',
        margin: '0 15px'
    };

    const hrStyle = {
        border: '0',
        height: '1px',
        marginBottom: '10px',
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
    };

    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <p
                    style={{
                        fontWeight: 900,
                        color: '#01B6F5',
                        marginLeft: 20,
                        marginTop: 10,
                        marginRight: 5,
                        fontSize: 23
                    }}
                >
                    {firstName}
                </p>
                <Avatar
                    style={{ width: 40, height: 40, backgroundColor: 'white', marginTop: 10 }}
                    icon={<AiOutlineUser size="small" />}
                    src={animal === Animals.Szpila ? Szpila : Lila}
                />
            </div>
            <p
                style={{
                    fontSize: 14,
                    marginBottom: 20,
                    fontFamily: 'Lato',
                    color: '#000000',
                    padding: 20
                }}
            >
                Napisz prywatną wiadomość do wybranej użytkowniczki .
            </p>
            {/* chat starts here */}
            <ChatWrapper>
                <Input
                    className="rainbow-p-around_medium"
                    style={inputStyle}
                    placeholder="Wyszukaj użytkowniczkę"
                    iconPosition="right"
                    icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />}
                />

                {/* pasek z ikonami i dostępnością  */}
                <div style={filterButtonStyles}>
                    <ChatButton title="WSZYSCY" variant="brand" onClick={handleFilterAll} />
                    <ChatButton title="MENTORKI" variant="success" onClick={handleFilterMentors} />
                </div>
                <div style={hrStyle}></div>
                {users.docs
                    .map(doc => ({ id: doc.id, user: doc.data() }))
                    .map(({ id, user }) => (
                        <ChatUser user={user} onClickHandler={openChat(id)} />
                    ))}
            </ChatWrapper>
        </Container>
    );
};

export { Chat };
