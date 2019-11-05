import React from 'react';
import { Body, PortfolioContent2, ImageBox3, Button3, ButtonContainer } from '../../../style';
import Navigation from '../../../components/navigation';
import { Link } from 'react-router-dom';
import ImageContent from './data';


function FashionDesignCollection(props) {
    return (
        <Body>
            <Navigation />
            <h1 className="pagination"><Link to="/portfolio">PORTFOLIO</Link> / <Link to="/portfolio/fashion">FASHION</Link> / DESIGN</h1>
            <PortfolioContent2>
                <div className="wrapper4">
                    {ImageContent.map((image,index)=>{
                        return (
                            <React.Fragment>
                            <ButtonContainer>
                                <ImageBox3 onClick={()=>props.history.push(`/portfolio/fashion/design/${index}`)} key={index} style={{backgroundImage: `url(${require(`../../../assets/images/fashion/design/${image.f_image}.jpg`)})`, border: '2px solid green'}} />
                                <Button3 onClick={()=>props.history.push(`/portfolio`)}>VIEW</Button3>
                            </ButtonContainer>
                            </React.Fragment>
                        )
                    })}
                </div>
            </PortfolioContent2>
        </Body>
    )
}

export default FashionDesignCollection;
