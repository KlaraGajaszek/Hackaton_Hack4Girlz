import React from 'react';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const InfoText = styled.span`
    font-size: 14px;
    margin: 0;
    padding: 0 20px;
    display: block;
    color: ${props => props.theme.rainbow.palette.text.gray};
`;

type Props = {
    text: string;
};

export const SectionInfo = ({ text }: Props) => {
    return (
        <Wrapper>
            <AiOutlineInfoCircle />
            <InfoText>{text}</InfoText>
        </Wrapper>
    );
};
