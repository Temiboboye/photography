import React from 'react';
import { Body, PortfolioContent, ImageBox } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import Fashion_Route from './route';

function Fashion(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / FASHION</h1>
            <PortfolioContent>
                <div className="wrapper3">
                    {Fashion_Route.map((r,i)=>{
                        return (
                            <ImageBox key={i} style={{backgroundColor: '#FAF57F' }} onClick={()=>props.history.push(`/portfolio/fashion/${r.id}`)}>
                                <p>FASHION {r.title.toUpperCase()}</p>
                            </ImageBox>
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Fashion;