import ImageNext from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-content: center; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    @media(max-width: 800px) {
        grid-gap: 0px;
    }
`

export const Content = styled.div`
    display: block;
    padding: 4rem;
    @media(max-width: 800px) {
        padding: 1.5rem;
    }
`

export const Title = styled.p`
    margin: auto;
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    @media(max-width: 800px) {
        font-size: 1.5rem;
    }
`

export const Description = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.text?.primary};
    font-family: ${({ theme }) => theme.typography?.font};
`

export const Image = styled(ImageNext)`
    position: relative;
    border-radius: 0px 60px;
    @media(max-width: 800px) {
        margin-top: 3rem;
    }
`

export const Banner = styled.div`
    width: 100%;
    padding: 3rem;
    position: relative;
    &::before {
        top: 0;
        left: 0;
        content: '';
        width: 450px;
        height: 450px;
        position: absolute;
        border-radius: 45px 0px;
        background-color: ${({ theme }) => theme.primary?.main};
    }
    @media(max-width: 800px) {
        padding: 3rem 1.5rem 0 1.5rem;
        &::before {
            width: 100%;
            height: 200px;
            border-radius: 20px 0px;
        }
    }
`