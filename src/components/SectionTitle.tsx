import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 12px;
    text-align: center;
`;

const H1 = styled.span`
    font-size: 24px;
    line-height: 40px;
    font-weight: 700;
    padding: 12px 0 0;
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
