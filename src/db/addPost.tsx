import { db } from '../firebase';

export const addPost = async (user: any, values: any) => {
    const isSussess = await db.collection('Posts').add({ ...user, ...values, likes: 0 });
    return isSussess;
};
