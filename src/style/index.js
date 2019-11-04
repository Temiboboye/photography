import styled from 'styled-components';

var colors = {
    "textColor": "#ED4119",
    "dark": "#4B4B4B"
}

export const Body = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${props=>props.color};
    .title {
        font-size: 20px;
        padding: 0 100px;
        a {
            text-decoration: none;
            color: #676767;
        }
        @media only screen and (max-width: 938px) {
            padding: 0 50px;
        }
        @media only screen and (max-width: 837px) {
            padding: 0 10px;
        }
    }
    .pagination {
        font-size: 20px;
        padding: 0 100px;
        a {
            text-decoration: none;
            color: #676767;
        }
        @media only screen and (max-width: 938px) {
            padding: 0 50px;
        }
        @media only screen and (max-width: 837px) {
            padding: 0 10px;
        }
    }
    .title2 {
        font-size: 20px;
        padding: 0 240px;
        text-align: center;
        @media only screen and (max-width: 938px) {
            padding: 0 50px;
        }
        @media only screen and (max-width: 837px) {
            padding: 0 10px;
        }
    }
`

Body.defaultProps = {
    color: '#FFF'
}

export const Content = styled.div`
    flex: 1;
    background-color: #F9F9F9;
`

/**
 * @param { PropTypes.string } width
 * @param { PropTypes.string } height
 * @param { PropTypes.string } stroke
 */
export const Button1 = styled.button`
    width: ${props=>props.width};
    height: ${props=>props.height};
    border: 2px solid ${props=>props.stroke};
    background: transparent;
    color: ${props=>props.stroke};
    outline: none;
    font-family: 'Niramit', sans-serif;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    :hover {
        transition: .2s ease-in-out;
        background-color: rgba(0,0,0,0.2);
    }
    @media only screen and (max-width: 464px) {
        width: 170px;
        height: 45px;
        font-size: 15px;
        /* position: absolute; */
        top: 50%;
    }
`

Button1.defaultProps = {
    "width": "200px",
    "height": "59.2px",
    "stroke": "#FFFFFF"
}

// Home Styles

export const HomeContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    background-color: #FE1E03 !important;
    background: url(${require('../assets/images/featuredart2.png')});
    background-position: left bottom;
    background-size: 50%;

    background-repeat: no-repeat;
    @media only screen and (max-width: 464px) {
        align-items: flex-start;
        padding-top: 40px;
        background-size: 100%;
        background-position: left 80%;
    }
`

export const FeaturedAlbumArt = styled.div`
    width: 620.57px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: white;
        font-size: 48px;
        @media only screen and (max-width: 464px) {
            font-size: 27px;
        }
    }
    @media only screen and (max-width: 464px) {
        height: 400px;
    }
`

// About Styles

export const AboutContent = styled.div`
    flex: 1;
    display: flex;
    padding: 40px 100px;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 20px;
    }
    @media only screen and (max-width: 778px) {
        flex-wrap: wrap;
    }
`

export const AboutImage = styled.div`
    flex-basis: 25%;
    height: 511.37px;
    background: url(${require('../assets/images/person.jpg')});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media only screen and (max-width: 778px) {
        flex-basis: 100%;
        margin-bottom: 30px;
    }
`

export const AboutText = styled.div`
    flex-basis: 75%;
    padding: 0 30px;
    font-size: 20px;
    color: ${colors.dark};
    @media only screen and (max-width: 778px) {
        flex-basis: 100%;
        padding: 0;
        font-size:  16px;
    }
    p {
        margin: 0;
        margin-bottom: 30px;

    }
    .button-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width: 464px) {
            flex-wrap: wrap;
            button {
                width: 100%;
                margin-bottom: 20px;
                height: 59.2px;
            }
        }
    }
`

// Connect Styles

export const ConnectContent = styled.div`
    display: flex;
    padding: 40px 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 20px;
    }
    .wrapper {
        width: 400px;
        display: flex;
        flex-wrap: wrap;
        div:nth-child(2) {
            animation-delay: .2s;
        }
        div:nth-child(3) {
            animation-delay: .4s;
        }
        div:nth-child(4) {
            animation-delay: .6s;
        }
        div:nth-child(5) {
            animation-delay: .8s;
        }
        div:nth-child(6) {
            animation-delay: 1s;
        }
    }
`

export const SocialBox = styled.a`
    flex-basis: 100%;
    height: 60px;
    border: 2px solid ${colors.dark};
    background: transparent;
    margin-bottom: 25px;
    display: flex;
    text-decoration: none;
    color: #000;
    align-items: center;
    justify-content: space-between;
    padding: 0 29px;
    cursor: pointer;
    :hover {
        background: rgba(245,245,245,1)
    }
    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }
    .arrow {
        width: 20px;
        height: 18px;
        object-fit: contain;
    }
    p {
        margin: 0;
        font-size: 18px;
    }
`

// Portfolio Styles

export const PortfolioContent = styled.div`
    display: flex;
    padding: 40px 100px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 10px;
    }
    .wrapper {
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        div {
            margin-right: 20px;
        }
        /* div:before{
            position: absolute;
            content:" ";
            top:0;
            left:0;
            width:100%;
            height:100%;
            display: block;
            z-index:0;
            background-color: rgba(0,0,0,0.45);
        } */
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;
        }
    }
    .wrapper3 {
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        flex-wrap: wrap;
        div {
            margin-right: 20px;
        }
        div:before{
            position: absolute;
            content:" ";
            top:0;
            left:0;
            width:100%;
            height:100%;
            display: block;
            z-index:0;
            /* background-color: rgba(0,0,0,0.45); */
        }
        p {
            color: #333 !important;
            font-size: 14px;
            z-index: 999999999999
        }
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;
        }
    }
    .wrapper2 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;
        }
        .fit {
            background-size: 150%;
        }
    }
    .wrapper4 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;
        }
    }
`

export const PortfolioContent2 = styled.div`
    display: flex;
    padding: 40px 240px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 938px) {
        padding: 40px 50px;
    }
    @media only screen and (max-width: 837px) {
        padding: 40px 10px;
    }
    .wrapper4 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        @media only screen and (max-width: 670px) {
            flex-wrap: wrap;
        }
    }
`

export const ImageBox = styled.div`
    flex-basis: 48%;
    height: 248px;
    /* background-color: rgb(250, 245, 127); */
    border: 1px solid #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 14px;
        color: #333;
        font-weight: 700;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 5px;
    }
    span {
        margin: 0 auto;
        font-size: 14px;
        color: #333;
        text-align: center;
    }
    @media only screen and (max-width: 670px) {
        flex-basis: 100%;
        margin-bottom: 7px;
        margin-right: 0px !important;
        height: 200px;
    }
`

export const ImageBox3 = styled.div`
    flex-basis: 49.5%;
    height: 601px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
    cursor: pointer;
    @media only screen and (max-width: 670px) {
        margin-bottom: 3px;
        height: 300px;
        flex-basis: 100%;
    }
`

export const ImageBox3b = styled.div`
    flex-basis: 49.5%;
    height: 601px;
    /* background-color: rgb(250, 245, 127); */
    border: 1px solid #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
    cursor: pointer;
    h1 {
        color: #333;
        font-size: 14px;
        z-index: 9999;
    }
    @media only screen and (max-width: 670px) {
        margin-bottom: 3px;
        height: 301px;
        flex-basis: 100%;
    }
`

export const ImageBox5 = styled.div`
    flex-basis: 48%;
    height: 248px;
    /* background-color: rgb(250, 245, 127); */
    border: 1px solid #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 20px;
        color: #333;
        font-weight: 700;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 5px;
    }
    span {
        margin: 0;
        font-size: 14px;
        color: #333;
        text-align: center;
    }
    @media only screen and (max-width: 670px) {
        // flex-basis: 48.5%;
        flex-basis: 100%;
        margin-bottom: 7px;
        height: 200px;
        p {
            font-size: 14px;
        }
    }
`

export const ImageBox4 = styled.div`
    flex-basis: 32.5%;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    @media only screen and (max-width: 670px) {
        margin-bottom: 7px;
       /* height: 193px; */
       height: 100vh;
        flex-basis: 100%;
    }
`

export const ImageBox2 = styled.div`
    flex-basis: 100%;
    height: 248px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    margin-bottom: 20px;
    border: 1px solid ${colors.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 24px;
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
        z-index: 999999;
        text-align: center;
        margin-bottom: 5px;
    }
    .sub {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0;
    }
    @media only screen and (max-width: 670px) {
        height: 200px;
    }
`
