import React from 'react';
import Navigation from '../components/navigation';
import { Body, HomeContent, FeaturedAlbumArt, Button1 } from '../style';

function Home(props) {
    return (
        <Body color="#FE1E03">
            <Navigation color="#FFF" />
            <HomeContent>
                <FeaturedAlbumArt className="animated fadeInUp">
                    <Button1 onClick={()=>props.history.push('/portfolio')}>VIEW</Button1>
                </FeaturedAlbumArt>
            </HomeContent>
        </Body>
    )
}

export default Home;

