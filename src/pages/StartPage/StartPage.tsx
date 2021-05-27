
import React, { useState } from 'react';
import { Button } from 'react-rainbow-components';
import { db } from '../../firebase';

export const StartPage = () => {
	const [ currentUser, setCurrentUser ] = useState(null);

	db.app.auth().onAuthStateChanged((user) => {
		if (user) {
			setCurrentUser(user.uid);
		}
	});
	return (
		<div>
			<Button onClick={() => db.collection('User').add({ name: 'value' })}>START</Button>
			<p>Witaj userID: {currentUser}</p>
			<button onClick={() => db.app.auth().signOut()}>Sign out</button>
		</div>
	);

};
