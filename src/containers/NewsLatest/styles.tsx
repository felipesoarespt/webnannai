import ImageNext from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    display: grid;
    margin-top: 4rem;
    padding: 3rem 8rem;
    align-items: center;
    justify-content: center;
    border-radius: 60px 0px;
    grid-template-columns: 1fr 2fr;
    background-color: ${({ theme }) => theme.secondary?.main};
    @media(max-width: 800px) {
        margin-top: 3rem;
        border-radius: 0px;
        padding: 2rem 1.5rem;
        padding-bottom: 4rem;
        grid-template-columns: 1fr;
        border-top-left-radius: 20px;
    }
`

export const Box = styled.div`
    display: block;
    max-width: 250px;
    @media(max-width: 800px) {
        max-width: 100%;
        margin-bottom: 20px;
    }
`

export const Form = styled.div`
    width: 100%;
    display: grid; 
    overflow: auto;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    button {
        max-width: 150px;
        margin-top: 20px;
    }
    input {
        border: 1px solid ${({ theme }) => theme.common.white};
    }
    input, label {
        color: ${({ theme }) => theme.common.white};
    }
    @media(max-width: 800px) {
        button {
            max-width: 100%;
        }
    }
`

export const Text = styled.p`
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.font};
    @media(max-width: 800px) {
        font-size: 1.4rem;
    }
`

export const Image = styled(ImageNext)``