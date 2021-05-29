import { Animals, Industries, Specials } from '../constants/user';
import { db } from '../firebase';

export type UserSetupOptions = {
    description: string;
    industry: Industries | string;
    specialization: Specials | string;
    animal: Animals;
};

export const userSetup = async (userId: string, options: UserSetupOptions) => {
    try {
        await db.collection('Users').doc(userId).update(options);
        return true;
    } catch (ex) {
        console.log(ex);
        return false;
    }
};
