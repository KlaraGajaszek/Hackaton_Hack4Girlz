import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routing/router';

export const Goal = ({ goals }) => {
    console.log('goals', goals);
    const history = useHistory();
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
        margin-top: 15px;
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
        margin-top: 15px;
    `;

    const buttonStyles = {
        position: 'fixed',
        bottom: '130px',
        right: 0,
        marginRight: '24px'
    };

    return (
        <div style={{ position: 'relative' }}>
            <StyledDiv>
                {goals?.map(g => (
                    <CarouselCard>
                        <Wrapper>
                            <Subtitle>{g.name}</Subtitle>
                            <Date>{g.endDate}</Date>
                        </Wrapper>
                    </CarouselCard>
                ))}
            </StyledDiv>
            <Button
                onClick={() => {
                    history.push(Routes.AddTask);
                }}
                style={buttonStyles}
                variant="brand"
            >
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
                Dodaj cel
            </Button>
        </div>
    );
};
