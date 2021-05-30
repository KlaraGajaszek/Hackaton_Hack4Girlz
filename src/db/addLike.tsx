import firebase from 'firebase';
import { db } from '../firebase';

export const addLike = async (likesCount, id, userId) => {
    const isSussess = await db.doc('Posts/' + id).update({
        likes: Number(likesCount) + 1,
        likedBy: firebase.firestore.FieldValue.arrayUnion(userId)
    });
    return isSussess;
};
