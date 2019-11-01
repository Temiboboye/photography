import React from 'react';
import { Body, PortfolioContent, ImageBox4 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Others() {
    const imagelist = [1,2,3];
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / OTHERS</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    {imagelist.map((image,index)=>{
                        return (
                            <ImageBox4 key={index} style={{backgroundImage: `url(${require(`../../assets/images/others/${image}.png`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Others;