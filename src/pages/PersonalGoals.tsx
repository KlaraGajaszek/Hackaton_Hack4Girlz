import React, { useState, useEffect } from 'react';
import { Button } from 'react-rainbow-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Szpila from '../assets/png/cat/Head.png';
import Lila from '../assets/png/dog/Head.png';
import SzpilaJump from '../assets/gifs/cat_jumping.gif';
import LilaJump from '../assets/gifs/dog_jumping.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '@chakra-ui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineUser } from 'react-icons/ai';
import { Avatar } from 'react-rainbow-components';
import { useHistory } from 'react-router-dom';
import { Routes } from '../routing/router';
import 'firebase/auth';
import 'firebase/firestore';
import { AchievementsComponent } from '../components/AchievementsComponent';
import { useAuthContext } from '../contexts/Auth';
import { Animals } from '../constants/user';
import styled from 'styled-components';
import { Goal } from '../components/Goal';
import { db } from '../firebase';
import { useCurrentGoalContext } from '../contexts/CurrentGoal';

export const Goals = () => {
    const [docx, setDoc] = useState([]);
    const history = useHistory();
    const { currentGoal, setGoal } = useCurrentGoalContext();

    const {
        user: { displayName, uid },
        userData: { animal }
    } = useAuthContext();
    const [achievements, setAchievements] = useState(false);

    useEffect(() => {
        db.collection('Goals')
            .where('userId', '==', uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc): any => {
                    console.log(doc.data());
                    setDoc([...docx, doc.data()]);
                });
            })
            .catch(error => {
                console.log('Error getting documents: ', error);
            });
    }, []);

    // db.collection('Goals')
    //     .doc('diceC0e4DwYyVKH00FtN')
    //     .update({ nested: firebase.firestore.FieldValue.arrayUnion('12') });

    const firstName = displayName.split(' ')[0];

    const styleTab = {
        boxShadow: 'none',
        color: '#576574',
        borderBottom: 'none'
    };

    const Container = styled.div`
        background-color: ${props => props.theme.rainbow.palette.background.grey};
    `;

    const moreStyledTab = {
        color: '#01B6F5',
        fontWeight: 900,
        borderBottom: 'none'
    };

    const icon = {
        fontSize: 10
    };

    const styleBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    };

    const achieveSet = [
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
            description: 'Wniosek - zbyt wiele zadań',
            date: '29.05.2021 - 30.05.2021',
            conclusion:
                'Nie brać na siebie zbyt wielu zadań i skupić się na priorytetyzowaniu tych najważniejszych. Podczas realizacji celu czułam się przytłoczona nadmiarem kroków, które sobie założyłam i nie byłam w stanie ukończyć zadania.'
        },
        {
            description: 'Podwyżka w pracy',
            date: '28.05.2021 - 29.05.2022',
            conclusion:
                'Nie brać na siebie zbyt wielu zadań i skupić się na priorytetyzowaniu tych najważniejszych. Podczas realizacji celu czułam się przytłoczona nadmiarem kroków, które sobie założyłam i nie byłam w stanie ukończyć zadania.'
        }
    ];

    console.log(docx);

    return (
        <div>
            <Tabs isFitted variant="enclosed">
                <Container>
                    <div style={{ display: 'flex' }}>
                        <p
                            style={{
                                fontWeight: 900,
                                color: '#01B6F5',
                                marginLeft: 20,
                                marginTop: 10,
                                marginRight: 5,
                                fontSize: 23
                            }}
                        >
                            {firstName}
                        </p>
                        <Avatar
                            style={{ width: 40, height: 40, backgroundColor: 'white', marginTop: 10 }}
                            icon={<AiOutlineUser size="small" />}
                            src={animal === Animals.Szpila ? Szpila : Lila}
                        />
                    </div>
                    <p
                        style={{
                            fontSize: 14,
                            marginBottom: 20,
                            fontFamily: 'Lato',
                            color: '#000000',
                            padding: 20
                        }}
                    >
                        Nie od razu Rzym zbudowano, ale cegły noszono codziennie! Zaplanuj swoje cele i drogę do ich
                        osiagnięcia.
                    </p>
                    <TabList>
                        <Tab
                            style={achievements ? styleTab : moreStyledTab}
                            _hover={{ color: '#01B6F5', fontWeight: 700 }}
                            onClick={() => setAchievements(false)}
                            _selected={{ bg: 'white' }}
                        >
                            TWOJE CELE
                        </Tab>
                        <Tab
                            style={achievements ? moreStyledTab : styleTab}
                            _hover={{ color: '#01B6F5', fontWeight: 700 }}
                            onClick={() => setAchievements(true)}
                            _selected={{ bg: 'white' }}
                        >
                            TWÓJ POSTĘP
                        </Tab>
                    </TabList>
                </Container>
                {!achievements && docx.length > 0 && <Goal goals={docx} />}
                {achievements && (lessons.length > 0 || achieveSet.length > 0) && (
                    <AchievementsComponent lessons={lessons} achievements={achieveSet} />
                )}
                {achievements && lessons.length == 0 && achieveSet.length == 0 && (
                    <TabPanels>
                        <TabPanel style={styleBox as React.CSSProperties}>
                            <Image src={RunCat} alt="run cat" boxSize="180px" marginTop="10" />
                            <p style={{ maxWidth: 200, marginBottom: 20 }}>
                                Nie masz jeszcze wyznaczonych żadnych celów
                            </p>
                            <Button
                                variant="brand"
                                className="rainbow-m-around_medium"
                                onClick={() => {
                                    history.push(Routes.AddTask);
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
                                Dodaj cel
                            </Button>
                        </TabPanel>
                        <TabPanel style={styleBox as React.CSSProperties}>
                            <Image src={RunCat} alt="run cat" boxSize="180px" marginTop="10" />
                            <p style={{ maxWidth: 200, marginBottom: 20 }}>Wszystko co najlepsze jeszcze przed Tobą!</p>
                            <Button
                                onClick={() => {
                                    history.push(Routes.AddTask);
                                }}
                                variant="brand"
                                className="rainbow-m-around_medium"
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
                                Dodaj cel
                            </Button>
                        </TabPanel>
                    </TabPanels>
                )}
                {!achievements && docx.length == 0 && (
                    <TabPanels>
                        <TabPanel style={styleBox as React.CSSProperties}>
                            <Image
                                src={animal === Animals.Szpila ? SzpilaJump : LilaJump}
                                alt="run cat"
                                boxSize="180px"
                                marginTop="10"
                            />
                            <p style={{ maxWidth: 200, marginBottom: 20 }}>
                                Nie masz jeszcze wyznaczonych żadnych celów
                            </p>
                            <Button
                                variant="brand"
                                className="rainbow-m-around_medium"
                                onClick={() => {
                                    history.push(Routes.AddTask);
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
                                Dodaj cel
                            </Button>
                        </TabPanel>
                        <TabPanel style={styleBox as React.CSSProperties}>
                            <Image
                                src={animal === Animals.Szpila ? SzpilaJump : LilaJump}
                                alt="run cat"
                                boxSize="180px"
                                marginTop="10"
                            />
                            <p style={{ maxWidth: 200, marginBottom: 20 }}>Wszystko co najlepsze jeszcze przed Tobą!</p>
                            <Button
                                onClick={() => {
                                    history.push(Routes.AddTask);
                                }}
                                variant="brand"
                                className="rainbow-m-around_medium"
                            >
                                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
                                Dodaj cel
                            </Button>
                        </TabPanel>
                    </TabPanels>
                )}
            </Tabs>
        </div>
    );
};
