import React from 'react';
import { Body, PortfolioContent, ImageBox5 } from '../style';
import Navigation from '../components/navigation';

function Archive(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title">ARCHIVE</h1>
            <PortfolioContent>
                <div className="wrapper4">
                    <ImageBox5 onClick={()=>props.history.push('/archive/fashion')}>
                        <p>FASHION COLLECTIONS</p>
                        <span>Series of previous fashion collections, designed by Isa Israel</span>
                    </ImageBox5>
                    <ImageBox5 onClick={()=>props.history.push('/archive/photography')}>
                        <p>PHOTOGRAPHY</p>
                        <span>Series of iphone photography, shot and edited by Isa Israel</span>
                    </ImageBox5>
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Archive;