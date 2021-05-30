import firebase from 'firebase/app';
import { db } from '../firebase';

export const newGoal = async ({ name, industry, uid, photoURL }) => {
    try {
        const user = await db.collection('Goals').doc(uid).get();
        if (user.exists) return;

        const data = {
            name,
            industry,
            photoURL
        };

        await db.collection('Users').doc(uid).set(data);
    } catch (error) {
        console.log('🚀 ~ file: newUser.ts ~ line 16 ~ newUser ~ error', error);
    } finally {
        return;
    }
};
