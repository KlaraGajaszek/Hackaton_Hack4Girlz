import { db } from '../firebase';

export const addLike = async (likesCount, id) => {
    const isSussess = await db.doc('Posts/' + id).update({ likes: Number(likesCount) + 1 });
    return isSussess;
};
