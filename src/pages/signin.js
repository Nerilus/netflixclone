import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, SetError] = useState('');

  const isInValid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();

    // firebase work here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })

      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        SetError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>S'identifier</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              S'identifier
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Première visite sur Netflix <Form.Link to="/signup">Inscrivez-vous</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. En savoir plus
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
