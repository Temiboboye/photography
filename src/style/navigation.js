import styled from 'styled-components';

var navigationColor = {
    "textColor": "#000",
    "dark": "#4B4B4B"
}

export const Nav = styled.div`
    width: inherit;
    height: 80px;
    display: flex;
    justify-content: center;
`

export const NavContent = styled.div`
    width: 420px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: ${props=>props.color};
        font-size: 18px;
    }
    @media only screen and (max-width: 464px) {
        display: none;
    }
`

NavContent.defaultProps = {
    color: navigationColor.textColor
}

export const NavContentMobile = styled.div`
    width: inherit;
    height: inherit;
    display: none;
    align-items: center;
    justify-content: space-between;
    .hamburguer {
        position: fixed;
        width: 35px;
        height: 24.82px;
        z-index: 9999999999999;
        padding: 0 10px;
        cursor: pointer;
    }
    .hamburguer:hover {
        -webkit-animation: zoom 300ms ease-in;
        animation: zoom 300ms ease-in;
    }
    .lines {
        background-color: ${props=>props.color};
        width: 100%;
        height: 5px;
        margin: 5px 0;
        transition: all 200ms ease-in;
    }
    .close-hamburguer {
        position: fixed;
        width: 35px;
        height: 24.82px;
        z-index: 9999999999999;
        cursor: pointer;
        padding: 0 10px;
    }
    .close-hamburguer .lines {
        cursor: pointer;
        background-color: ${navigationColor.textColor};
    }
    .close-hamburguer>.line-top {
        -webkit-transform: translateY(200%) rotate(45deg);
        transform: translateY(200%) rotate(45deg);
    }
    .close-hamburguer>.line-mid {
        opacity: 0;
    }
    .close-hamburguer>.line-bottom {
        -webkit-transform: translateY(-200%) rotate(135deg);
        transform: translateY(-200%) rotate(135deg);
    }
    .mobile-content {
        width: 100%;
        background: white;
        position: fixed;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        z-index: 999999999;
        padding: 0 10px;
        box-sizing: border-box;
        padding-top: 100px;
        a {
            text-decoration: none;
            color: ${navigationColor.dark};
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 25px;
            letter-spacing: 2px;
        }
        .last-link {
            margin-bottom: 90px;
        }
        .social {
            display: flex;
            width: 100%;
            align-items: center;
            img {
                width: 30px;
                height: 30px;
                object-fit: contain;
                margin-right: 34px;
                cursor: pointer;
            }
        }
    }
    @media only screen and (max-width: 464px) {
        display: flex;
    }
`

NavContentMobile.defaultProps = {
    color: navigationColor.textColor
}