import React from "react";
import { Footer } from "../components";


export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Des questions ? Appelez le (+33) 0805-543-063</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link>Relations Investisseurs</Footer.Link>
                    <Footer.Link>Modes de lecture</Footer.Link>
                    <Footer.Link>Mentions légales</Footer.Link>
                    <Footer.Link>Seulement sur Netflix</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link>Centre d'aide</Footer.Link>
                    <Footer.Link>Recrutement</Footer.Link>
                    <Footer.Link>Conditions d'utilisation</Footer.Link>
                    <Footer.Link>Nous contacter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link>Compte</Footer.Link>
                    <Footer.Link>Utiliser des cartes cadeaux</Footer.Link>
                    <Footer.Link>Confidentialité</Footer.Link>
                    <Footer.Link>Test de vitesse</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link>Presse</Footer.Link>
                    <Footer.Link>Acheter des cartes cadeaux</Footer.Link>
                    <Footer.Link>Préférences de cookies</Footer.Link>
                    <Footer.Link>Informations légales</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix France</Footer.Text>
        </Footer>
    )
}