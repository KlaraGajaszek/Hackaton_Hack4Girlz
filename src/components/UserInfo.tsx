import React from 'react';
import { Box } from '@chakra-ui/react';
import { Avatar } from 'react-rainbow-components';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

const UserName = styled.span`
    margin-left: 24px;
    font-weight: 700;
    font-size: 27px;
    color: ${props => props.theme.rainbow.palette.brand};
`;

const UserInfo = () => {
    return (
        <Box mt="20px" pl="40px" display="flex" alignItems="center">
            <Avatar style={{ width: 72, height: 72 }} icon={<AiOutlineUser size="large" />} />
            <UserName>Ela Popiel</UserName>
        </Box>
    );
};

export { UserInfo };
