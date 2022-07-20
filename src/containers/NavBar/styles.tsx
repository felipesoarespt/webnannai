import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.p`
    font-size: 20px;
    margin-left: 10px;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.fontLight};
    & strong {
        display: block;
    }
`

export const List = styled.ul`
    width: 100%;
    display: flex;
    list-style-type: none;
    @media(max-width: 800px) {
        padding: 0;
        flex-direction: column;
    }
`

export const Box = styled.ul`
    @media(max-width: 800px) {
        display: none;
    }
`

export const Item = styled.li`
    cursor: pointer;
    font-size: 16px;
    margin-left: 3rem;
    color: ${({ theme }) => theme.common?.white};
    font-family: ${({ theme }) => theme.typography?.fontBold};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.common?.white};
        font-family: ${({ theme }) => theme.typography?.fontBold};
    }

    @media(max-width: 800px) {
        margin: 0;
        padding: 1.5rem;
        font-size: 1.4rem;
        border-bottom: solid 1px ${({ theme }) => theme.common?.white};
    }
`

export const Hamburger = styled.span`
    right: 15px;
    width: 20px;
    height: 4px;
    z-index: 15;
    display: none;
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    background-color: #fff;
    transition-duration: 0.1s;
    transition-property: transform, -webkit-transform;
    transition-property: opacity, filter, -webkit-filter;
    &::before {
      content: "";
      top: 13px;
      left: 0px;
      width: 30px;
      height: 4px;
      border-radius: 4px;
      position: absolute;
      background-color: #fff;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
    }
    &::after {
      left: 0px;
      width: 30px;
      height: 4px;
      content: "";
      bottom: 13px;
      position: absolute;
      border-radius: 4px;
      background-color: #fff;
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    @media(max-width: 800px) {
        display: block;
    }
    &.active {
      height: 0;
      &::after {
        left: 0px;
        width: 35px;
        transform: translate3d(0px, 15px, 0px) rotate(-135deg);
      }
      &::before {
        left: 0px;
        width: 35px;
        transform: translate3d(0px, -15px, 0px) rotate(135deg);
      }
    }
`