import firebase from 'firebase/app';
import { db } from '../firebase';

export const newUser = async ({ displayName, email, uid, photoURL }: firebase.User) => {
    try {
        const user = await db.collection('Users').doc(uid).get();
        if (user.exists) return;

        const data = {
            email,
            displayName,
            photoURL
        };

        await db.collection('Users').doc(uid).set(data);
    } catch (error) {
        console.log('🚀 ~ file: newUser.ts ~ line 16 ~ newUser ~ error', error);
    } finally {
        return;
    }
};
