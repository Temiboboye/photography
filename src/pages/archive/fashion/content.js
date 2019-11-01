import React, {Component} from 'react';
import { Body, PortfolioContent, ImageBox3b,ImageBox3 } from '../../../style';
import Navigation from '../../../components/navigation';
import ImageContent from './data';

class ArchiveFashionCollectionsContent extends Component {
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
                        <div className="wrapper4">
                            <ImageBox3b onClick={()=>this._changeView("editorial")}>
                                <h1>EDITORIAL</h1>
                            </ImageBox3b>
                            <ImageBox3b onClick={()=>this._changeView("look_book")}>
                                <h1>LOOK BOOK</h1>
                            </ImageBox3b>
                        </div>
                    </PortfolioContent>
                </React.Fragment> :
                <React.Fragment>
                    <h1 className="title2">{ImageContent[n].title}</h1>
                    <PortfolioContent>
                        <div className="wrapper2">
                            {ImageContent[n].id === "figtree_drop1" && this.state.type === "editorial" ? 
                            <ImageBox3 className="fit" style={{backgroundImage: `url(${require(`../../../assets/images/fashion/collections/${folder}/${this.state.type}/1.JPG`)})`}} /> : null}

                            {ImageContent[n].sub_images[`${this.state.type}`].map((image,index)=>{
                                return (
                                    <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../../assets/images/fashion/collections/${folder}/${this.state.type}/${image}.JPG`)})`}} />
                                )
                            })}

                            {ImageContent[n].id === "figtree_drop1" && this.state.type === "editorial" ? 
                            <ImageBox3 className="fit" style={{backgroundImage: `url(${require(`../../../assets/images/fashion/collections/${folder}/${this.state.type}/5.JPG`)})`}} /> : null}
                        </div>
                    </PortfolioContent>
                </React.Fragment>
                }
            </Body>
        )
    }
}

export default ArchiveFashionCollectionsContent;