import React, { useContext } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Routes } from '../routing/router';
import { RiCalendarEventLine, RiDashboardLine, RiWechat2Line } from 'react-icons/ri';
import { AiOutlineTrophy } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { OnboardingContext } from '../contexts/OnboardingContext';

const Container = styled.div`
    min-height: 100vh;
`;

const Menu = styled(Card)`
    position: sticky;
    bottom: 0;
    left: 0;
    height: 72px;
    width: 100vw;
    border-radius: 0;
    border-bottom: none;
    border-left: none;
    border-right: none;
    z-index: 9999;
    display: flex;
    background-color: ${props => props.theme.rainbow.palette.background.white};
`;

const Item = styled.div<{ isActive: boolean; onboard: boolean }>`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props =>
        props.isActive ? props.theme.rainbow.palette.primary.main : props.theme.rainbow.palette.primary.main};
    border-top: ${props => (props.isActive ? props.theme.rainbow.palette.primary.main + ' solid' : 'none')};
    background-color: ${props => (props.onboard ? props.theme.rainbow.palette.primary.light : 'white')};
`;

type Props = {
    to: Routes;
    name: string;
    Icon: any;
};

const LinkItem: FC<Props> = ({ to, Icon, name }) => {
    const history = useHistory();
    const match = useRouteMatch(to);
    const [onBoard, setOnboard] = useContext(OnboardingContext);

    return (
        <Item onboard={onBoard == name} isActive={!!match} onClick={() => history.push(to)}>
            <Icon size="2em" />
            <div>{name}</div>
        </Item>
    );
};

const Layout: FC = ({ children }) => {
    return (
        <Container>
            <div style={{ minHeight: 'calc(100vh - 72px)' }}>{children}</div>
            <Menu>
                <LinkItem key={Routes.Home} to={Routes.Home} name="Tablica" Icon={RiDashboardLine} />
                <LinkItem key={Routes.Goals} to={Routes.Goals} name="Cele" Icon={AiOutlineTrophy} />
                <LinkItem key={Routes.Events} to={Routes.Events} name="Wydarzenia" Icon={RiCalendarEventLine} />
                <LinkItem key={Routes.Chat} to={Routes.Chat} name="Czat" Icon={BsChatDots} />
                <LinkItem key={Routes.Profile} to={Routes.Profile} name="Profil" Icon={FaRegUserCircle} />
            </Menu>
        </Container>
    );
};

export { Layout };
