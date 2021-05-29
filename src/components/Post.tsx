import React from 'react';
import styled from 'styled-components';
import { Card, Avatar, MenuDivider, Input } from 'react-rainbow-components';
import { useUserData } from '../hooks/useUserData';
import Loader from './Loader';
import { AiFillHeart, AiOutlineSend } from 'react-icons/ai';
import { Comments } from './Comments';

const MyCard = styled(Card)`
    margin: 16px 16px;
`;

const Heart = styled.div`
    color: ${props => props.theme.rainbow.palette.secondary.light};
    display: flex;
    align-items: center;
    font-size: 24px;
`;

const Divider = styled(MenuDivider)`
    &::marker {
        content: '';
    }
`;

const Content = styled.div`
    padding: 8px 16px;
    font-size: 14px;
`;

const Footer = styled.div`
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

const Post = ({ id, displayName, photoURL, text, likes }: any) => {
    return (
        <MyCard
            title={displayName}
            icon={<Avatar src={photoURL} />}
            actions={
                <Heart>
                    {likes}
                    <AiFillHeart size="1em" />
                </Heart>
            }
        >
            <Divider />
            <Content>{text}</Content>
            <Divider />
            <Comments />
            <Divider />
            <Footer>
                <MyInput placeholder="Dodaj komentarz" />
                <AiOutlineSend size="2.5em" />
            </Footer>
        </MyCard>
    );
};

export { Post };
