import React from 'react';
import { Body, PortfolioContent, ImageBox3b } from '../../../style';
import Navigation from '../../../components/navigation';
import { Link } from 'react-router-dom';
import ImageContent from './data';

function DigitalArtsCollections(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">ARTS</Link> / DIGITAL ART</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    {ImageContent.map((image,index)=>{
                        return (
                            <ImageBox3b onClick={()=>props.history.push(`/portfolio/arts/digitalarts/${index}`)} key={index}>
                                <p>{image.title}</p>
                            </ImageBox3b>
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default DigitalArtsCollections;