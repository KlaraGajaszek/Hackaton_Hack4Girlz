import firebase from 'firebase';
import { db } from '../firebase';

export const addComment = async (user: any, postId, text: string) => {
    const isSussess = await db
        .collection('Comments')
        .add({ ...user, postId, text, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    return isSussess;
};
