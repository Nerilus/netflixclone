import { FaqsContainer } from '../containers/faqs'
import React from 'react';
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/header';
import { OptForm,Feature } from '../components';


export default function Home() {
    return (
    <>
        <HeaderContainer>
        <Feature>
            <Feature.Title>
            Films, séries TV et bien plus en illimité.
            </Feature.Title>
            <Feature.SubTitle>
            Où que vous soyez. Annulez à tout moment.
            </Feature.SubTitle>
        </Feature>
        <OptForm>
            <OptForm.Input placeholder="email adress" />
            <OptForm.Button>
                Commercer
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
            Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
            </OptForm.Text>
        </OptForm>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer/>
        <FooterContainer/>
       
    </>
    );
}
