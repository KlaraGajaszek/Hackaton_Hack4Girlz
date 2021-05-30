import React, { useState } from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import styled from 'styled-components';

const Title = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #7c7878;
    letter-spacing: -0.01em;
`;

const Data = styled.span`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-weight: 500;
    font-size: 14px;
    padding-top: 10px;
    color: black;
    margin-top: 5px;
`;

const Test = styled.div`
    display: flex;
    margin-top: 22px;
    margin-left: 45px;
    flex-direction: column;
    color: black;
    margin: 0 auto;
    padding: 40px;
`;

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

const View = styled.div`
    height: 400px;
    background-color: white;
    padding: 5px;
    border-radius: 20px 20px 0px 0px;
    /* align-items: end; */
    position: fixed;
    left: 0;

    right: 0;
    bottom: 0;
    z-index: 999;
`;

const covered = {
    position: 'fixed',
    display: 'block',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 4,
    opacity: 0.5,
    backgroundColor: '#000'
};

const styledBack = {
    display: 'none'
};

export const AchievementsComponent = ({ lessons, achievements }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(false)} style={{ position: 'relative' }}>
                <div style={open ? covered : styledBack}></div>
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
            </div>
            <StyledDiv>Wyniesione lekcje</StyledDiv>
            {lessons.map(l => (
                <div>
                    <Lesson
                        onClick={() => {
                            setOpen(true);
                            console.log(open);
                        }}
                    >
                        <LessonDescription>{l.description}</LessonDescription>
                        <LessonDate>{l.date}</LessonDate>
                    </Lesson>
                    {open && (
                        <View>
                            <Test>
                                <Title>{l.date}</Title>
                                <Data>{l.conclusion}</Data>
                            </Test>
                        </View>
                    )}
                </div>
            ))}
        </div>
    );
};
