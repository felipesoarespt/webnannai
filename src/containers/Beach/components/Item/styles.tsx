import ImageNext from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
    direction: ${({ revert }) => revert ? 'rtl' : 'ltr'};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-areas:
    "a  banner" 
    "title  banner" 
	"content banner"
	"b banner"
    ;
    @media(max-width: 800px) {
        grid-gap: 1rem;
        padding: 1.5rem 1.5rem 0 1.5rem;
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
    margin: 0 5rem;
    text-align: left;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    & strong {
        font-family: ${({ theme }) => theme.typography?.fontBold};
    }
    @media(max-width: 800px) {
        margin: 0;
        font-size: 1.5rem;
    }
`

export const Content = styled.div` 
    display: block;
    grid-area: content;
    margin: 0 5rem;
    text-align: left;
    @media(max-width: 800px) {
        margin: 0;
    }
`

export const Description = styled.p` 
    font-size: 1rem; 
    color: ${({ theme }) => theme.text?.primary};
    font-family: ${({ theme }) => theme.typography?.font};
`

export const Box = styled.div`
    width: 100%;
    height: 100%;
    height: 350px;
    grid-area: banner;
    position: relative;
    @media(max-width: 800px) {
        height: 200px;
    }
`

export const Image = styled(ImageNext)`
    border-radius: 0px 60px;
    @media(max-width: 800px) {
        border-radius: 0px 20px;
    }
`

