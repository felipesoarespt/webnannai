import styled from 'styled-components'
import ImageNext from 'next/image'

export const Main = styled.div`
    z-index: 100;
    display: flex;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
    padding: 10px;
    position: fixed;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    background-color: #27ae60;
    box-shadow: 0 0.5rem 1.6rem rgba(39, 174, 96, 0.4);
`

export const Badge = styled.div`
    cursor: pointer;
`

export const Content = styled.div`
    right: 0;
    top: -10rem;
    width: 14rem;
    z-index: 100;
    border-radius: 5px;
    position: absolute;
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 0.5rem 1.6rem rgba(0, 0, 0, 0.15);
    font-family: ${({ theme }) => theme.typography.fontMedium};
`

export const Header = styled.div`
     color: #fff;
    font-size: 14px;
    text-align: center;
    padding: 10px 15px;
    font-family: $font-bold;
    border-radius: 5px 5px 0 0;
    background-color: rgba(39, 174, 96, 1);
`

export const Body = styled.div`
    padding: 10px 20px;
`

export const Item = styled.a`
    color: black;
    display: block;
    cursor: pointer;
    padding-top: 5px;
    text-decoration: none;
    border-bottom: solid 1px #dddddd;
    font-family: ${({ theme }) => theme.typography.fontMedium};
    strong{
        display: block;
        font-size: 12px;
        margin-bottom: 5px;
        text-align: center;
    }
    span{
        display: flex;
        padding-bottom: 10px;
        justify-content: space-between;
    }
`

export const Icon = styled(ImageNext)`
    position: relative;
`
