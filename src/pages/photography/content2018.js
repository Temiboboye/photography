import React from 'react';
import { Body, PortfolioContent, ImageBox4 } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';

function Content2018() {
    const imagelist = [1,2,3,4]
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/archive">ARCHIVE</Link> / <Link to="/archive/photography">PHOTOGRAPHY</Link> / 2018</h1>
            <PortfolioContent>
                <div className="wrapper2">
                    {imagelist.map((image,index)=>{
                        return (
                            <ImageBox4 key={index} style={{backgroundImage: `url(${require(`../../assets/images/photography/2018/${image}.JPG`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Content2018;