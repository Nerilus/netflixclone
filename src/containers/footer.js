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
                    <Footer.Link></Footer.Link>
                    <Footer.Link></Footer.Link>
                    <Footer.Link></Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}