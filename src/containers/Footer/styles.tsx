import styled from 'styled-components'

export const Main = styled.div`
   padding: 1rem;
   margin-top: 6rem;
   border-radius: 20px 20px 0px 0px;
   background-color: ${({ theme }) => theme.primary?.dark};
   @media(max-width: 800px) {
       z-index: 10;
       padding: 2rem;
       margin-top: -1rem;
       position: relative;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 800px) {
        margin-bottom: 2rem;
    }
`

export const Text = styled.p`
    font-size: 20px;
    margin-left: 10px;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.fontLight};
    & strong {
        display: block;
    }
    @media(max-width: 800px) {
        margin: 0;
        margin-left: 10px;
    }
`

export const Box = styled.div`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.font};
    & strong {
        display: block;
        margin-bottom: 1rem;
    }
    & p {
        margin: 0;
    }
`