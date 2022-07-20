import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    margin-top: 4rem;
    &::before {
        content: '';
        width: 100%;
        height: 300px;
        position: absolute;
        border-radius: 60px 0px;
        background-color: ${({ theme }) => theme.primary?.main};
    }
    @media(max-width: 800px) {
        margin: 2rem 0;
        &::before {
            height: 250px;
            border-radius: 20px 0px;
        }
    }
`

export const Body = styled.div`
    margin: 0 4rem;
    @media(max-width: 800px) {
        margin: 0 2rem;
    }
`

export const Title = styled.p`
    margin: 0;
    padding: 3rem;
    font-size: 2rem;
    text-align: center;
    position: relative;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    @media(max-width: 800px) {
        padding: 2rem;
        font-size: 1.5rem;
    }
`