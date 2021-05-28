import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import {db} from '../firebase';
import {AuthContext} from '../FirebaseDB/Auth';
import {LogWithGoogle} from '../components/Googlelogin';
import {SectionTitle} from "../components/SectionTitle";
import {Button, Input} from "react-rainbow-components";
import {Box} from "@chakra-ui/react";
import {Center, Container} from "@chakra-ui/react";
import styled from "@emotion/styled";

const inputStyle = {
  maxWidth: 700,
  border: 1,
  paddingBottom: 20
}

const buttonStyles = {
  paddingLeft: 30,
  paddingRight: 30
}

const StyledDiv = styled.div`
  padding: 10px;
    font-weight: 400;
        font-size: 14px;
    line-height: 40px;
  `
const StyledLink = styled.a`
  padding: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 40px;
    color: #01B6F5;
    cursor: pointer;
  `


const Login = ({history}) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await db.app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  
  const {currentUser} = useContext(AuthContext);
  
  if (currentUser) {
    return <Redirect to="/"/>;
  }
  
  return (
    <Container pr={8} pl={8} centerContent>
      <div>
        <SectionTitle subtitle="Wpisz swoje dane lub zaloguj się za pomocą:" title="Logowanie"/>
        <LogWithGoogle/>
        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            labelAlignment="left"
            style={inputStyle}
            name="email"
            type="email"/>
          <Input
            label="Hasło"
            labelAlignment="left"
            style={inputStyle}
            name="password"
            type="password"/>
          <Center pt={10}>
            <Button
              style={buttonStyles}
              shaded
              label="Zaloguj"
              variant="brand"
              type="submit"
            />
          </Center>
          <Box d="flex" position="relative" w="100%" justifyContent="center" paddingTop="20px">
            <StyledDiv>Nie masz konta?</StyledDiv>
            <StyledLink href="/rejestracja">Zarejestruj się</StyledLink>
          </Box>
        </form>
      </div>
    </Container>
  );
};

const SignIn = withRouter(Login);

export {SignIn as Login};
