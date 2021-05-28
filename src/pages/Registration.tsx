import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { db } from '../firebase';
import 'firebase/auth';
import { LogWithGoogle } from '../components/Googlelogin';

const SignUp = ({ history }) => {
	const [ currentUser, setCurrentUser ] = useState(null);

	const [ firstname, setName ] = useState('');
	const [ lastname, setLastName ] = useState('');

	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await db.app.auth().createUserWithEmailAndPassword(email.value, password.value).then(
					db.app.auth().onAuthStateChanged((user) => {
						if (user) {
							setCurrentUser(user.uid);
						}
					})
				);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[ history ]
	);

	const insertDetails = async (e) => {
		await db.app.auth().onAuthStateChanged((user) => {
			e.preventDefault();
			if (user) {
				setCurrentUser(user.uid);
                db.collection('Users').add({ email: user.email, displayName: firstname + ' ' + lastname });
			}
		});
	};

	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSignUp}>
				<label>
					Imie
					<input name="firstname" value={firstname} type="text" onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Nazwisko
					<input name="lastName" value={lastname} type="text" onChange={(e) => setLastName(e.target.value)} />
				</label>
				<label>
					Email
					<input name="email" type="email" placeholder="Email" />
				</label>
				<label>
					Hasło
					<input name="password" type="password" placeholder="Password" />
				</label>
				<button type="submit" onClick={insertDetails}>
					Sign Up
				</button>
			</form>
			<LogWithGoogle />
		</div>
	);
};

const Registration = withRouter(SignUp);

export { Registration };
