import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export const useUserData = () => {
    const { userData, loading, error } = useContext(AuthContext);

    if (error) console.log('🚀 ~ file: useUserData.ts ~ line 10 ~ useUserData ~ error', error);

    return { userData, loading, error };
};
