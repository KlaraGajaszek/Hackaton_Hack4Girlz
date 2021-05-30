export const sortByDate = (a, b) => b.data().createdAt?.seconds - a.data().createdAt?.seconds;
