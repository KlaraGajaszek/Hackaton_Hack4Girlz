import React from 'react';
import { Center, Container } from '@chakra-ui/react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import styled from 'styled-components';

const achievements = [
    {
        description: 'Mój pierwszy warsztat w apce Networkya',
        date: '27.05.2021 - 27.05.2022'
    },
    {
        description: 'Podwyżka w pracy',
        date: '27.05.2021 - 27.05.2022'
    }
];

const lessons = [
    {
        description: 'Mój pierwszy warsztat w apce Networkya',
        date: '27.05.2021 - 27.05.2022'
    },
    {
        description: 'Podwyżka w pracy',
        date: '27.05.2021 - 27.05.2022'
    }
];

const CarouselCard = styled.div`
    display: flex;
    margin: 15px;
    flex-direction: column;
    width: 186px;
    height: 167px;
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

const MainWrapper = styled.div`
    margin-left: -80px;
    overflow-y: scroll;
`;

const Subtitle = styled.h4`
    font-size: 16px;
    display: block;
    color: black;
    line-height: 16px;
`;

const Date = styled.p`
    font-size: 11px;
    color: #7c7878;
    padding-top: 20px;
    position: absolute;
    bottom: 0;
    text-align: left;
`;

const LessonDate = styled.p`
    font-size: 11px;
    color: #7c7878;
    padding: 10px;
    text-align: left;
`;

const StyledDiv = styled.div`
    color: #000000;
    font-size: 19px;
    font-weight: 500;
    padding: 30px;
`;

const Lesson = styled.div`
    width: 311px;
    left: 32px;
    background: #daf8ff;
    border-radius: 14px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 14px;
    line-height: 14px;
`;

const LessonDescription = styled.p`
    color: black;
    font-weight: 400;
`;

export const AchievementsComponent = () => {
    return (
        <div>
            <StyledDiv>Cele, które udało Ci się zrealizować w tym tygodniu</StyledDiv>
            <MainWrapper>
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
                    {achievements.map(a => (
                        <CarouselCard>
                            <Wrapper>
                                <Subtitle>{a.description}</Subtitle>
                                <Date>{a.date}</Date>
                            </Wrapper>
                        </CarouselCard>
                    ))}
                </Carousel>
            </MainWrapper>
            <StyledDiv>Wyniesione lekcje</StyledDiv>
            {lessons.map(l => (
                <Lesson>
                    <LessonDescription>{l.description}</LessonDescription>
                    <LessonDate>{l.date}</LessonDate>
                </Lesson>
            ))}
        </div>
    );
};
