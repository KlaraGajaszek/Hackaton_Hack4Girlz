import React, { FC } from 'react';
import { Avatar } from 'react-rainbow-components';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import Loader from './Loader';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';
import { sortByDate } from '../utils/sortByDate';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;
    width: 100%;
`;

const MyAvatar = styled(Avatar)`
    margin: 0 16px;
`;

const Bubble = styled.div`
    position: relative;
    background: ${props => props.theme.rainbow.palette.primary.light};
    color: ${props => props.theme.rainbow.palette.text.primary};
    font-size: 14px;
    font-family: Lato;
    line-height: 17px;
    font-weight: 400;
    box-shadow: 5px 5px 2px 0px #a3a3a3;
    text-align: center;
    width: 220px;
    min-height: 40px;
    border-radius: 15px;
    padding: 12px;
    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        z-index: 1;
        border-style: solid;
        border-width: 15px 0 0 30px;
        border-color: transparent transparent transparent ${props => props.theme.rainbow.palette.primary.light};
        top: 71%;
        right: -10px;
        margin-top: -8.5px;
    }
`;

const DateField = styled.div`
    margin-top: 4px;
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
    color: ${props => props.theme.rainbow.palette.text.gray};
    display: flex;
`;
const Icon = styled(FaCheck)`
    margin-left: 4px;
    color: ${props => props.theme.rainbow.palette.primary.main};
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Comment: FC = ({ children, photoURL, createdAt }) => {
    const date = createdAt ? format(createdAt.toDate(), 'dd-MM-RR HH:mm') : '';
    return (
        <div>
            <Container>
                <Main>
                    <Bubble>{children}</Bubble>
                    <DateField>
                        <span>{date}</span> <Icon />
                    </DateField>
                </Main>
                <MyAvatar src={photoURL} />
            </Container>
        </div>
    );
};

const Comments = ({ postId }) => {
    const ref = db.collection('Comments').where('postId', '==', postId);
    const [snapshot, loading, error] = useCollection(ref);

    if (loading) return <Loader />;
    if (error) return <span>Cos poszlo nie tak</span>;

    return (
        <>
            {snapshot.docs.sort(sortByDate).map(comment => (
                <Comment key={comment.id} photoURL={comment.data().photoURL} createdAt={comment.data().createdAt}>
                    {comment.data().text}
                </Comment>
            ))}
        </>
    );
};

export { Comments };
