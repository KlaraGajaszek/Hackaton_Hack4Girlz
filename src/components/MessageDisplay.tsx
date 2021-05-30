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

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        z-index: 1;
        border-style: solid;
        border-width: ${props => (props.bubbleSide === 'right' ? '15px 0 0 30px' : '15px 30px 0 0')};
        border-color: transparent ${props => (props.bubbleSide === 'left' ? props.bgColor : 'transparent')} transparent
            ${props => (props.bubbleSide === 'right' ? props.bgColor : 'transparent')};
        top: 50%;
        right: ${props => (props.bubbleSide === 'right' ? '-10px' : '0')};
        left: ${props => (props.bubbleSide === 'left' ? '-10px' : 'none')};

        margin-top: -8.5px;
    }
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
                    <Bubble bgColor={bgColor} bubbleSide={bubbleSide}>
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

export const MessageDisplay = ({ content, createdAt, sender, me, counterParty }) => {
    const messageStyles = {
        color: '#000',
        backgroundColor: '#fff',
        width: '90%'
    };
    const userPhoto = sender === me.uid ? me.photoURL : counterParty.photoURL;
    const bgColor = sender === me.uid ? '#01B6F5' : '#FF507A';
    const side = sender === me.uid ? 'flex-end' : 'flex-start';
    const bubbleSide = sender === me.uid ? 'right' : 'left';
    return (
        <div style={messageStyles}>
            <Message bgColor={bgColor} photoURL={userPhoto} createdAt={createdAt} side={side} bubbleSide={bubbleSide}>
                {content}
            </Message>
        </div>
    );
};
