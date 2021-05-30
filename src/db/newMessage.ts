import firebase from 'firebase';
import { db } from '../firebase';

export type Message = {
    sender: string;
    recipent: string;
    content: string;
    createdAt: firebase.firestore.FieldValue;
};

export const getChatDocId = (id, id2) => (id > id2 ? `${id} - ${id2}` : `${id2} - ${id}`);

export const newMessage = async (me, counterParty, content) => {
    try {
        const messages = db.collection('Chat').doc(getChatDocId(me, counterParty)).collection('Messages');
        const message: Message = {
            sender: me,
            recipent: counterParty,
            content,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        await messages.add(message);
    } catch (ex) {
        console.log(ex);
    }
};
