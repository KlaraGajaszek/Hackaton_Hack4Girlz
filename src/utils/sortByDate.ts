export const sortByDate = (a, b) => b.data().createdAt?.seconds - a.data().createdAt?.seconds;
export const sortByDateData = (a, b) => a.createdAt?.seconds - b.createdAt?.seconds;
