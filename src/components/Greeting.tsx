import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Szpila from '../assets/png/cat/Head.png';
import Lila from '../assets/png/dog/Head.png';
import { Animals } from '../constants/user';
import { useAuthContext } from '../contexts/Auth';
import Cookies from 'universal-cookie';
import SzpilaJump from '../assets/png/cat/Kitty.png';
import { OnboardingContext } from '../contexts/OnboardingContext';

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
    height: 'auto',
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

const StyledButton = styled.button`
    color: ${props => props.theme.rainbow.palette.primary.main};
    text-transform: uppercase;
    padding: 30px 20px 0 20px;
    font-size: 18px;
`;

const StyledButton2 = styled.button`
    color: ${props => props.theme.rainbow.palette.text.lightGray};
    text-transform: uppercase;
    font-size: 18px;
    padding: 30px 20px 0 20px;
`;

const Greeting = props => {
    const {
        user,
        userData: { animal }
    } = useAuthContext();
    const firstName = user.displayName.split(' ')[0];

    const [onboarding, setOnboarding] = useState(true);
    const [open, setOpen] = useState(true);
    const cookies = new Cookies('registered');
    const [text, setText] = useState(
        'Cze????! Jestem tutaj aby pom??c Ci w zaplanowaniu i realizacji Twoich cel??w zawodowych. Nie martw si??, je??i nie wiesz jak si?? do tego zabra??! Mentorki ch??tnie Ci w tym pomog??, masz tak??e do dyspozycji spo??eczno???? dost??pn?? na tablicy i czacie. Zaraz wszystko stanie si?? jasne!'
    );
    const [onBoard, setOnboard] = useContext(OnboardingContext);

    const handleClick = () => {
        let clicks = 0;
        clicks += 1;
        const messageBox = document.getElementById('test');
        console.log(messageBox.innerHTML);
        const message = `Cze????! Jestem tutaj aby pom??c Ci w zaplanowaniu i realizacji Twoich cel??w zawodowych. Nie martw si??, je??i nie wiesz jak si?? do tego zabra??! Mentorki ch??tnie Ci w tym pomog??, masz tak??e do dyspozycji spo??eczno???? dost??pn?? na tablicy i czacie. Zaraz wszystko stanie si?? jasne!`;
        const message1 = `Przed ustaleniem swoich cel??w mo??esz u??y?? czatu i znale???? Mentork??. Skorzystaj z do??wiadczenia innych dziewczyn!`;
        const message2 = `Wybierz tablic??, aby poszuka?? inspiracji w??r??d naszej spo??eczno??ci. Mo??esz zada?? pytanie lub poprosi?? o wsparcie. Jeste??my tu po to, by wzajemnie motywowa?? si?? do dzia??ania!`;
        const message3 =
            'Twoim pierwszym celem nie musi by?? lot na ksi????yc! Zacznij od przeczytania artyku????w bran??owych i wys??uchania wyk??ad??w. Wszystko w swoim czasie!';
        if (messageBox.innerHTML == message) {
            setText(message1);
            setOnboard('Czat');
            console.log(onBoard);
        } else if (messageBox.innerHTML == message1) {
            setText(message2);
            setOnboard('Tablica');
        } else if (messageBox.innerHTML == message2) {
            setText(message3);
            setOnboard('Cele');
        } else if (messageBox.innerHTML == message3) {
            setOpen(false);
            setOnboard('');
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
                        <p id="test">{text}</p>
                        <div style={{ marginLeft: '35px' }}>
                            <StyledButton
                                onClick={() => {
                                    setOpen(false);
                                    setOnboard('');
                                }}
                            >
                                Pomi??
                            </StyledButton>
                            <StyledButton2 onClick={handleClick}>Dalej</StyledButton2>
                        </div>
                    </div>
                    <img style={onboarding ? imgStyle : styledBack} src={SzpilaJump} />
                </div>
            )}
            <Top>
                <span>
                    Cze???? <Span>{firstName}!</Span>
                </span>
                <AnimalImage src={animal === Animals.Szpila ? Szpila : Lila} />
            </Top>
            <Bottom>Podziel si?? z innymi swoimi osi??gni??ciami lub poszukaj tematu, kt??ry Ci?? interesuje.</Bottom>
        </Container>
    );
};

export { Greeting };
