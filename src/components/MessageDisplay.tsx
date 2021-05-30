import React, { FC } from 'react';
import { Avatar } from 'react-rainbow-components';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { format } from 'date-fns';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.side};
    padding: 8px;
    width: 100%;
`;

const MyAvatar = styled(Avatar)`
    margin: 0 16px;
`;

const Bubble = styled.div`
    position: relative;

    background: ${props => props.bgColor};
    color: ${props => props.theme.rainbow.palette.text.primary};
    font-size: 14px;
    font-family: Lato;
    line-height: 17px;
    font-weight: 400;
    box-shadow: 5px 5px 2px 0px #a3a3a3;
    text-align: center;
    width: 150px;
    min-height: 40px;
    border-radius: 15px;
    padding: 12px;
`;

const DateField = styled.div`
    margin-top: 4px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
    color: ${props => props.theme.rainbow.palette.text.gray};
    display: flex;
`;
const Icon = styled(FaCheck)`
    margin-left: 4px;
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Message: FC = ({ children, photoURL, createdAt, bgColor, side, bubbleSide }) => {
    const date = createdAt ? format(createdAt.toDate(), 'dd-MM-RR HH:mm') : '';
    const flexOrder = side === 'flex-start' ? '-1' : '1';
    return (
        <div style={{}}>
            <Container side={side}>
                <Main>
                    <Bubble bgColor={bgColor} side={bubbleSide}>
                        {children}
                    </Bubble>
                    <DateField>
                        <span>{date}</span> <Icon />
                    </DateField>
                </Main>
                <MyAvatar src={photoURL} style={{ order: `${flexOrder}` }} />
            </Container>
        </div>
    );
};

export const MessageDisplay = ({ content, createdAt, sender, me }) => {
    const messageStyles = {
        color: '#000',
        backgroundColor: '#fff'
    };
    const userPhoto = sender === me.uid ? me.photoURL : sender.photoURL;
    const bgColor = sender === me.uid ? '#01B6F5' : '#FF507A';
    const side = sender === me.uid ? 'flex-end' : 'flex-start';
    return (
        <div style={messageStyles}>
            <Message bgColor={bgColor} photoURL={userPhoto} createdAt={createdAt} side={side}>
                {content}
            </Message>
        </div>
    );
};
