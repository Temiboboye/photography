import React, {Component} from 'react';
import { Body, PortfolioContent,ImageBox3 } from '../../../style';
import Navigation from '../../../components/navigation';
import ImageContent from './data';

class DigitalArtsContent extends Component {
    render() {
        const n = this.props.match.params.id;
        const folder = ImageContent[n].id;
        return (
            <Body>
                <Navigation />
                <h1 className="title2">{ImageContent[n].title}</h1>
                <PortfolioContent>
                    <div className="wrapper2">
                        {ImageContent[n].images.map((image,index)=>{
                            if (n == 0) {
                                return (
                                    <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../../assets/images/arts/digitalarts/${folder}/${image}.jpg`)})`,border: '1px solid #333',backgroundPosition: '50%'}} />
                                )
                            }
                            return (
                                <ImageBox3 key={index} style={{backgroundImage: `url(${require(`../../../assets/images/arts/digitalarts/${folder}/${image}.jpg`)})`}} />
                            )
                        })}
                    </div>
                </PortfolioContent>
            </Body>
        )
    }
}

export default DigitalArtsContent;