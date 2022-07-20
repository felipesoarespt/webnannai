import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    display: flex;
    min-height: 600px;
    position: relative;
    align-items: center;
    margin-bottom: 4rem;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0px 0px 0px 60px;
    background-image: linear-gradient(0deg, rgba(35, 47, 95, 0.59), rgba(35, 47, 95, 0.59)), url(/img/banner.jpg);
    @media(max-width: 800px) {
        border-radius: 0 0 15px 15px;
        background-position: 40% 100%;
        background-image: linear-gradient(359.79deg,rgb(35 47 92 / 95%) 22.5%,rgba(0,0,0,0) 55.52%,rgb(35 47 92 / 95%) 88%),url(/img/banner.jpg);
    }
`

export const Box = styled.div`
    display: flex;
    max-width: 600px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 800px) {
        min-height: 350px;
    }
`

export const Icon = styled.div`
    width: 150px;
    height: 35px;
    position: relative;
    @media(max-width: 800px) {
        height: 20px;
        width: 80px;
    }
`

export const Title = styled.h1`
    margin: 20px;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    font-style: normal;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.font};
    @media(max-width: 800px) {
        font-size: 1.8rem;
        letter-spacing: 0.03em;
    }
`

export const Header = styled.div`
    top: 0;
    width: 100%;
    position: absolute;
    @media(max-width: 800px) {
        padding: 0 1.5rem;
        position: relative;
    }
`

export const Footer = styled.div`
    bottom: 0;
    width: 100%;
    position: absolute;
    @media(max-width: 800px) {
        position: relative;
        margin-bottom: -5rem;
    }
`
