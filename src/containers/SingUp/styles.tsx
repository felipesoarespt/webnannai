import styled from 'styled-components'

export const Main = styled.div`
    margin: auto;
    display: grid;
    grid-gap: 10px;
    max-width: 1000px;
    padding: 2rem 3rem;
    border-radius: 10px;
    margin-bottom: -4rem;
    grid-template-columns: 200px 1fr;
    box-shadow: 0px 4px 54px -10px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.common?.white};
    @media(max-width: 800px) {
        grid-gap: 20px;
        padding: 1.5rem;
        margin: 0 1.5rem;
        margin-bottom: 0rem;
        grid-template-columns: 1fr
    }
`

export const Form = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    & button {
        margin-top: 20px;
    }
    @media(max-width: 800px) {
        grid-template-columns: 1fr
    }
`

export const Text = styled.p`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    & strong {
        display: block;
        font-family: ${({ theme }) => theme.typography?.fontBold};
    }
    @media(max-width: 800px) {
        margin: 0;
    }
`

