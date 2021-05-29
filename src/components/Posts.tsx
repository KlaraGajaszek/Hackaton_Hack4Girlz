import React from 'react';
import styled from 'styled-components';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Post } from './Post';
import Loader from './Loader';
import { db } from '../firebase';

const Posts = () => {
    const ref = db.collection('Posts');
    const [snapshot, loading, error] = useCollection(ref);

    if (loading) return <Loader />;
    if (error) return <span>Cos poszlo nie tak</span>;

    return (
        <div>
            {snapshot.docs.map(post => (
                <Post key={post.id} id={post.id} {...post.data()} />
            ))}
        </div>
    );
};

export { Posts };
