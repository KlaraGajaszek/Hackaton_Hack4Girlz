import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components';

import profile from '../assets/png/profile.png';
import carouselCard from '../assets/png/carouselCard.png';

const CarouselCard = styled.div`
    display: flex;
    margin: 15px;
    flex-direction: column;
    width: 142px;
    height: 142px;
    border-width: 2px;
    border-style: solid;

    border-radius: 15px;
    padding: 15px;
    :hover {
        border-color: ${({ theme }) => theme.rainbow.palette.secondary.main};
        box-shadow: rgba(255, 80, 122, 1) 0px 1px 6px;
    }
`;

const CardImage = styled.img`
    width: 60px;
    height: 60px;
    margin-top: 15px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subtitle = styled.h4`
    font-size: 16px;
    margin-top: 10px;
    padding: 0 20px;
    display: block;
    color: ${props => props.theme.rainbow.palette.text.lightGray};
`;
const titles = ['IT', 'SPORT', 'KULTURA', 'SZKOŁA'];

const CarouselContainer = props => {
    return (
        <CarouselCard>
            <Wrapper>
                <CardImage src={carouselCard} />
                <Subtitle>{props.title}</Subtitle>
            </Wrapper>
        </CarouselCard>
    );
};

export const Carouzel = () => {
    return (
        <div>
            <Carousel
                plugins={[
                    'clickToChange',
                    'centered',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    }
                ]}
            >
                {titles.map(text => (
                    <CarouselContainer title={text} />
                ))}
            </Carousel>
        </div>
    );
};
