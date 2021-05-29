import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Szpila from '../assets/png/cat/Head.png';
import Lila from '../assets/png/dog/Head.png';
import { Animals } from '../constants/user';
import { useAuthContext } from '../contexts/Auth';
import Cookies from 'universal-cookie';
import SzpilaJump from '../assets/png/cat/Kitty.png';

const Container = styled.div`
    padding: 30px 30px 0 30px;
    position: relative;
`;

const Top = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 23px;
    line-height: 100%;
    color: ${props => props.theme.rainbow.palette.text.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Span = styled.span`
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const Bottom = styled.div`
    font-size: 14px;
    font-weight: 400;
`;

const AnimalImage = styled.img`
    height: 50px;
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

const box = {
    width: '311px',
    height: '283px',
    position: 'absolute',
    borderRadius: '15px',
    top: '300',
    backgroundColor: 'white',
    padding: '30px',
    zIndex: 4,
    color: 'black',
    marginTop: '310px',
    fontSize: '15px'
};

const imgStyle = {
    zIndex: 6,
    position: 'fixed',
    width: 'auto',
    height: 'auto',
    marginLeft: '-31px',
    marginTop: '-5px'
};

const Greeting = () => {
    const {
        user,
        userData: { animal }
    } = useAuthContext();
    const firstName = user.displayName.split(' ')[0];

    const [onboarding, setOnboarding] = useState(true);
    const [open, setOpen] = useState(true);
    const cookies = new Cookies('registered');

    const handleClick = () => {
        let clicks = 0;
        clicks += 1;
        let message = '';
        if (clicks == 1) {
            message =
                'Przed ustaleniem swoich celów możesz użyć czatu i znaleźć Mentorkę. Skorzystaj z doświadczenia innych dziewczyn!';
        } else if (clicks == 2) {
            message =
                'Wybierz tablicę, aby poszukać inspiracji wśród naszej społeczności. Możesz zadać pytanie lub poprosić o wsparcie. Jesteśmy tu po to, by wzajemnie motywować się do działania!';
        } else if (clicks == 3) {
            //for 6 clicks and above
            message =
                'Twoim pierwszym celem nie musi być lot na księżyc! Zacznij od przeczytania artykułów branżowych i wysłuchania wykładów. Wszystko w swoim czasie!';
        } else {
            setOpen(false);
        }
        document.getElementById('test').innerHTML = message;
    };
    useEffect(() => {
        if (cookies.get('registered')) {
            setOnboarding(false);
        } else if (!cookies.get('registered')) {
            cookies.set('registered', 'true', {
                path: '/'
            });
            setOnboarding(true);
        }
    }, []);
    return (
        <Container>
            {open && (
                <div>
                    <div style={onboarding ? covered : styledBack}></div>
                    <div style={onboarding ? box : styledBack}>
                        <p id="test">
                            Cześć! Jestem tutaj aby pomóc Ci w zaplanowaniu i realizacji Twoich celów zawodowych.
                            <br /> Nie martw się, jeśi nie wiesz jak się do tego zabrać! Mentorki chętnie Ci w tym
                            pomogą, masz także do dyspozycji społeczność dostępną na tablicy i czacie. Zaraz wszystko
                            stanie się jasne!
                        </p>
                        <div>
                            <button onClick={() => setOpen(false)}>Pomiń</button>
                            <button onClick={handleClick}>Dalej</button>
                        </div>
                    </div>
                    <img style={onboarding ? imgStyle : styledBack} src={SzpilaJump} />
                </div>
            )}
            <Top>
                <span>
                    Cześć <Span>{firstName}!</Span>
                </span>
                <AnimalImage src={animal === Animals.Szpila ? Szpila : Lila} />
            </Top>
            <Bottom>Podziel się z innymi swoimi osiągnięciami lub poszukaj tematu, który Cię interesuje.</Bottom>
        </Container>
    );
};

export { Greeting };
