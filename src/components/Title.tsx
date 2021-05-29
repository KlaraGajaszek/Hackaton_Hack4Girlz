import React from 'react';
import styled from 'styled-components';

const TitleText = styled.span`
    font-size: 14px;
    line-height: 40px;
    font-weight: 700;
    color: ${props => props.theme.rainbow.palette.text.primary};
`;

type Props = {
    title: string;
};

export const Title = ({ title }: Props) => {
    return <TitleText>{title}</TitleText>;
};
