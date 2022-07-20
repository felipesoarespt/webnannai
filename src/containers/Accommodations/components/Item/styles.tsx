import ImageNext from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
    display: block;
    margin: 0 1.5rem;
    @media(max-width: 800px) {
        margin: 0;
    }
`

export const Box = styled.div`
    display: block;
    margin-top: 1rem;
`

export const Title = styled.p`
    margin: auto;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
`

export const Capacity = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.secondary?.dark};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
`

export const Description = styled.p`
    font-size: .9rem;
    color: ${({ theme }) => theme.text?.primary};
    font-family: ${({ theme }) => theme.typography?.font};
`

export const Image = styled(ImageNext)`
    position: relative;
    border-radius: 0px 60px;
`

export const Icon = styled(ImageNext)`
    position: relative;
`

export const Info = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
`

export const Include = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    color: ${({ theme }) => theme.common?.black};
    font-family: ${({ theme }) => theme.typography?.fontMedium};
    & span {
        display: block;
        margin-right: 10px;
    }
`


