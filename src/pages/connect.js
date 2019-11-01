import React from 'react';
import { Body, ConnectContent, SocialBox } from '../style';
import Navigation from '../components/navigation';

function Connect() {
    return (
        <Body>
            <Navigation />
            <ConnectContent>
                <div className="wrapper">
                    <SocialBox className="animated fadeInUp" href="https://www.instagram.com/isvisrvel/">
                        <img src={require('../assets/images/social/ig.svg')} alt="IG" />
                        <p>INSTAGRAM</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp" href="https://www.behance.net/israelisa/">
                        <img src={require('../assets/images/social/behance.svg')} alt="behance" />
                        <p>BEHANCE</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp" href="https://vsco.co/isvisrvel/journal/p/1  ">
                        <img src={require('../assets/images/social/2.svg')} alt="vsco" />
                        <p>VSCO</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                    <SocialBox className="animated fadeInUp" href="mailto:isaisrael@tvstemvkers.com">
                        <img src={require('../assets/images/social/email.svg')} alt="email" />
                        <p>E-MAIL</p>
                        <img className="arrow" src={require('../assets/images/rightalrrow.svg')} alt="arrow" />  
                    </SocialBox>
                </div>
            </ConnectContent>
        </Body>
    )
}

export default Connect;