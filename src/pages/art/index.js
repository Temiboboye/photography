import React from 'react';
import { Body, PortfolioContent, ImageBox } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import Arts_Route from './route';

function Arts(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/portfolio">PORTFOLIO</Link> / ARTS</h1>
            <PortfolioContent>
                <div className="wrapper">
                    {Arts_Route.map((r,i)=>{
                        return (
                            <ImageBox key={i} onClick={()=>props.history.push(`/portfolio/arts/${r.id}`)}>
                                <div className="text">
                                    <p>{r.title.toUpperCase()}</p>
                                    <span>Series of digital art works designed by isa israel</span>
                                </div>
                            </ImageBox>
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Arts;