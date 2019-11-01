import React from 'react';
import { Body, AboutContent, AboutImage, AboutText, Button1 } from '../style';
import Navigation from '../components/navigation';

function About(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title animated fadeIn">ABOUT</h1>
            <AboutContent className="animated fadeIn delay-1s">
                <AboutImage />
                <AboutText>
                    <p>Isa Israel’s work is driven by contemporary & abstract minimalism, Esoteric Aesthetics and modern cool, with an injection of pop and youth culture.</p>
                    <p>The designer & artistic director got his break into the industry, managing styling & Personal shopping for celebrities such as Runtown, Mr Eazi, Dj Neptune, Yung 6ix, Do2dtun, Sarz, Wizkid & Davido.</p> 
                    <p>Isa Israel is the founder of TVSTEMVKERS, a creative studio & apparel production company where he maintains the roles of creative direction & design development.</p>
                    <p>He currently serves as Owner & Chief buyer at 7 SVPPLY, a multi-brand retail outlet & online store, Isa Israel has been at the forefront of urban & streetwear culture in Nigeria, known not  just for his discerning eye in coveted footwear & clothing items from reputable international brands but also to have been a part of the pioneering new-gen streetwear designers in Nigeria.</p>
                    <div className="button-group">
                        <Button1 stroke="#4B4B4B" width="48%" onClick={()=>props.history.push('/portfolio')}>VIEW WORK</Button1>
                        <Button1 stroke="#4B4B4B" width="48%" onClick={()=>props.history.push('/connect')}>CONNECT</Button1>
                    </div>
                </AboutText>
            </AboutContent>
        </Body>
    )
}

export default About;