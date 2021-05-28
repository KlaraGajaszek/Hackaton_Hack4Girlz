import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    justify-content: center;
`;

const H1 = styled.span`
    font-size: 27px;
    line-height: 40px;
    font-weight: 700;
    padding: 0 0 0 48px;
    display: block;
    color: ${props => props.theme.rainbow.palette.text.primary};
`;

const H2 = styled.span`
    font-size: 14px;
    margin: 0;
    padding: 0 20px;
    display: block;
    color: ${props => props.theme.rainbow.palette.text.primary};
`;

type Props = {
    title: string;
    subtitle: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
    return (
        <Wrapper>
            <H1>{title}</H1>
            <H2>{subtitle}</H2>
        </Wrapper>
    );
};

export { SectionTitle };
