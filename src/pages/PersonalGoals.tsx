import React, { useState } from 'react';
import { Button, ButtonIcon } from 'react-rainbow-components';
import { Tabs, TabList, TabPanels, Tab, TabPanel, extendTheme } from '@chakra-ui/react';
import RunCat from '../assets/png/cat/Run (8).png';
import UserCat from '../assets/png/cat/Walk (11).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '@chakra-ui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDocument } from 'react-firebase-hooks/firestore';
import { AiOutlineUser } from 'react-icons/ai';
import { Avatar } from 'react-rainbow-components';
import { db } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Goals = () => {

    const [docId, setDocId] = useState('');
    const [email, setEmail] = useState();
    db.app.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.email)

        }
    });


    db.collection("Users").where("email", "==", "pat.kowalczyk646@gmail.com")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setDocId(doc.id)
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })




    const styleTab = {
        boxShadow: 'none'
    };

    const icon = {
        fontSize: 10
    };

    const styleBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 14
    };

    return (
        <div>
            <Tabs isFitted variant="enclosed">
                <div>
                    <div style={{ display: 'flex' }}>
                        <p style={{ fontWeight: 900, color: '#01B6F5', marginRight: 5, marginBottom: 10 }}>

                        </p>
                        <Avatar
                            style={{ width: 30, height: 30, backgroundColor: 'white' }}
                            icon={<AiOutlineUser size="small" />}
                            src={UserCat}
                        />
                    </div>
                    <p style={{ fontSize: 14, marginBottom: 20, fontFamily: 'Lato' }}>
                        Nie od razu Rzym zbudowano, ale cegły noszono codziennie! Zaplanuj swoje cele i drogę do ich
                        osiagnięcia.
					</p>
                    <TabList>
                        <Tab style={styleTab} _hover={{ color: '#01B6F5', fontWeight: 700 }}>
                            TWOJE CELE
						</Tab>
                        <Tab style={styleTab} _hover={{ color: '#01B6F5', fontWeight: 700 }}>
                            TWÓJ POSTĘP
						</Tab>
                    </TabList>
                </div>
                <TabPanels>
                    <TabPanel style={styleBox as React.CSSProperties}>
                        <Image src={RunCat} alt="run cat" boxSize="180px" marginTop="10" />
                        <p style={{ maxWidth: 200, marginBottom: 20 }}>Nie masz jeszcze wyznaczonych żadnych celów</p>
                        <Button variant="brand" className="rainbow-m-around_medium">
                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
							Dodaj cel
						</Button>
                    </TabPanel>
                    <TabPanel style={styleBox as React.CSSProperties}>
                        <Image src={RunCat} alt="run cat" boxSize="180px" marginTop="10" />
                        <p style={{ maxWidth: 200, marginBottom: 20 }}>Wszystko co najlepsze jeszcze przed Tobą!</p>
                        <Button variant="brand" className="rainbow-m-around_medium">
                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: 5 }} />
							Dodaj cel
						</Button>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
};

export { Goals };
