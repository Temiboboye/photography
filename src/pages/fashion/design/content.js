import React, {Component} from 'react';
import { Body, PortfolioContent, ImageBox3b,ImageBox3 } from '../../../style';
import Navigation from '../../../components/navigation';
import ImageContent from './data';

class FashionDesignContent extends Component {
    state = {
        showView: false,
        type: ""
    }
    _changeView = type => {
        this.setState({
            showView: true,
            type
        })
    }
    render() {
        const n = this.props.match.params.id;
        const folder = ImageContent[n].id;
        return (
            <Body>
                <Navigation />
                {this.state.showView === false ? 
                <React.Fragment>
                    <h1 className="title2">{ImageContent[n].title}</h1>
                    <PortfolioContent>
                        <div className="wrapper">
                            <ImageBox3b onClick={()=>this._changeView("clothing")}>
                                <h1>FASHION DESIGN</h1>
                            </ImageBox3b>
                        </div>
                    </PortfolioContent>
                </React.Fragment> :
                <React.Fragment>
                    <h1 className="title2">{ImageContent[n].title}</h1>
                    <PortfolioContent>
                        <div className="wrapper2">
                            {ImageContent[n].sub_images[`${this.state.type}`].map((image,index)=>{
                                return (
                                    <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../../assets/images/fashion/design/${folder}/${this.state.type}/${image}.jpg`)})`}} />
                                )
                            })}
                        </div>
                    </PortfolioContent>
                </React.Fragment>
                }
            </Body>
        )
    }
}

export default FashionDesignContent;