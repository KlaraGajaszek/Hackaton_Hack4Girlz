import React from 'react';
import styled from 'styled-components';

export const Goal = ({ goals }) => {
    const Date = styled.p`
        font-size: 11px;
        color: #7c7878;
        padding-top: 20px;
        position: absolute;
        bottom: 0;
        text-align: left;
    `;
    const Subtitle = styled.h4`
        font-size: 16px;
        display: block;
        color: black;
        line-height: 16px;
    `;
    const CarouselCard = styled.div`
        display: flex;
        margin: 12px;
        flex-direction: column;
        width: 159px;
        height: 147px;
        border-width: 2px;
        border-style: solid;
        background-color: #b8ebfb;
        border-radius: 15px;
        padding: 15px;
        :hover {
            border-color: #b8ebfb;
        }
    `;

    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    `;

    const StyledDiv = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;

    return (
        <div>
            <StyledDiv>
                {goals.map(g => (
                    <CarouselCard>
                        <Wrapper>
                            <Subtitle>{g.description}</Subtitle>
                            <Date>{g.date}</Date>
                        </Wrapper>
                    </CarouselCard>
                ))}
            </StyledDiv>
        </div>
    );
};
