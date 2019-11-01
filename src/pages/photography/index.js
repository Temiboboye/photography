import React from 'react';
import { Body, PortfolioContent, ImageBox } from '../../style';
import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import Photography_Route from './route';

function Arts(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="title"><Link to="/archive">ARCHIVE</Link> / PHOTOGRAPHY</h1>
            <PortfolioContent>
                <div className="wrapper">
                    {Photography_Route.map((r,i)=>{
                        return (
                            <ImageBox key={i} onClick={()=>props.history.push(`/archive/photography/${r.id}`)}>
                                <p>{r.title.toUpperCase()}</p>
                            </ImageBox>
                        )
                    })}
                </div>
            </PortfolioContent>
        </Body>
    )
}

export default Arts;