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

const Post = () => {
    const { userData, loading } = useUserData();

    if (loading) return <Loader />;

    return (
        <MyCard
            title="Nikola Kwiat"
            icon={<Avatar src={userData.photoURL} />}
            actions={
                <Heart>
                    5
                    <AiFillHeart size="1em" />
                </Heart>
            }
        >
            <Divider />
            <Content>
                Cześć, marzy mi się praca w firmie X i widzę ofertę na interesujące mnie stanowisko, ale nie wiem, czy
                jestem wystarczająco dobra w tym co robię
            </Content>
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
