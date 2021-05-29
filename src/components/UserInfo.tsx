import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Avatar } from 'react-rainbow-components';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

const UserName = styled.span<{ horizontal: boolean }>`
    margin: ${({ horizontal }) => (horizontal ? '0' : '0 ')};
    font-weight: 700;
    font-size: 27px;
    color: ${({ horizontal, theme }) =>
        horizontal ? theme.rainbow.palette.text.primary : theme.rainbow.palette.primary.main};
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`;

const UserBox = styled(Box)<{ horizontal: boolean }>`
    display: flex;
    flex-direction: ${p => (p.horizontal ? 'row' : 'column')};
    margin-top: ${p => (p.horizontal ? '0' : '0')};
    padding-left: ${p => (p.horizontal ? '40px' : '0')};
    align-items: center;
`;

const UserAvatar = styled(Avatar)`
    width: 64px;
    height: 64px;
    margin-top: 12px;
`;

type UserInfoProps = {
    name: string;
    avatarSrc?: string;
    horizontal?: boolean;
};

const UserInfo: FC<UserInfoProps> = ({ name, avatarSrc, horizontal }) => {
    return (
        <UserBox horizontal={horizontal}>
            <UserAvatar icon={<AiOutlineUser size="large" />} src={avatarSrc} />
            <UserName horizontal={horizontal}>{name}</UserName>
        </UserBox>
    );
};

export { UserInfo };
