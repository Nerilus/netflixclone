/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} al="netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            L'histoire se déroule en 1981, à Gotham City. Arthur Fleck travaille dans une agence de clowns. Méprisé et
            incompris par ceux qui lui font face, il mène une morne vie en marge de la société et habite dans un
            immeuble miteux avec sa mère Penny. Un soir, il se fait agresser dans le métro par trois traders de Wayne
            Enterprise alcoolisés qui le brutalisent, le poussant à les tuer en retour. Son geste inspire à une partie
            de la population l'idée de s'en prendre eux aussi aux puissants. Dans cette société décadente, Arthur
            bascule peu à peu dans la folie et finit par devenir le Joker, un dangereux tueur psychopathe victime
            d'hallucinations et le plus grand criminel de Gotham City.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
