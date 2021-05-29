import { useContext } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { Animals, Industries, Specials } from '../constants/user';
import { AuthContext } from '../contexts/Auth';
import { db } from '../firebase';

export type UserData = {
    description: string;
    industry: Industries | string;
    specialization: Specials | string;
    animal: Animals;
    isSetupCompleted: boolean;
    displayName: string;
    photoURL: string;
    email: string;
};

export const useUserData = () => {
    const { uid } = useContext(AuthContext);
    const ref = db.doc(`Users/${uid}`);
    const [userData, loading, error] = useDocumentData<UserData>(ref);

    if (error) console.log('🚀 ~ file: useUserData.ts ~ line 10 ~ useUserData ~ error', error);

    return { userData, loading, error };
};
