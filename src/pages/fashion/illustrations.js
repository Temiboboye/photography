import React from 'react';
import { Body, PortfolioContent2, ImageBox3 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Illustrations() {
    const imagelist = [1,2,3,4,5,6];
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / ILLUSTRATIONS</h1>
            <PortfolioContent2>
                <div className="wrapper4">
                    {imagelist.map((image,index)=>{
                        return (
                            <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../assets/images/fashion/illustrations/${image}.png`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent2>
        </Body>
    )
}

export default Illustrations;