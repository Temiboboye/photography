import React from 'react';
import { Body, PortfolioContent2, ImageBox3 } from '../../../style';
import Navigation from '../../../components/navigation';
import { Link } from 'react-router-dom';
import ImageContent from './data';

function ArchiveFashionCollections(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/archive">ARCHIVE</Link> / FASHION COLLECTIONS</h1>
            <PortfolioContent2>
                <div className="wrapper4">
                    {ImageContent.map((image,index)=>{
                        return (
                            <ImageBox3 onClick={()=>props.history.push(`/archive/fashion/${index}`)} key={index} style={{backgroundImage: `url(${require(`../../../assets/images/fashion/collections/${image.f_image}.png`)})`}} />
                        )
                    })}
                </div>
            </PortfolioContent2>
        </Body>
    )
}

export default ArchiveFashionCollections;