import ImageNext from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
    margin: auto;
    display: grid;
    padding-top: 4rem;
    max-width: 1200px;
    grid-gap: 10px 8rem;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-areas:
    "a  banner" 
    "title  banner" 
	"content banner"
	"b banner";

    @media(max-width: 800px) {
        grid-gap: 1rem;
        margin: 1.5rem 0;
        padding: 2.5rem 1.5rem 0 1.5rem;
        grid-template-areas:
        "title" 
        "banner" 
        "content";
    }
`

export const Title = styled.p`
    margin: 0;
    font-size: 2rem;
    grid-area: title;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    & strong {
        font-family: ${({ theme }) => theme.typography?.fontBold};
    }
    @media(max-width: 800px) {
        font-size: 1.5rem 0;
    }
`

export const Description = styled.p` 
    font-size: 1rem; 
    color: ${({ theme }) => theme.text?.primary};
    font-family: ${({ theme }) => theme.typography?.font};
`

export const Image = styled(ImageNext)`
    position: relative;
`

export const Content = styled.div`
    display: block;
    grid-area: content;
`

export const Banner = styled.div`
    width: 100%;
    height: 100%;
    grid-area: banner;
    position: relative;
    &::before {
        top: -12px;
        content: '';
        right: -12px;
        width: 200px;
        height: 100px;
        position: absolute;
        border-radius: 45px 0px;
        background-color: ${({ theme }) => theme.secondary?.main};
    }
    &::after {
        content: '';
        bottom: 20px;
        right: 70px;
        width: 100%;
        height: 40px;
        position: absolute;
        background-repeat: no-repeat;
        background-image: url('/icons/wave-1.svg');
    }
    @media(max-width: 800px) {
        padding: 25px;
        padding-bottom: 0;
        &::before {
            top: 0px;
            right: 0px;
            width: 150px;
            height: 100px;
        }
        &::after {
            right: 10px;
        }
    }
`

