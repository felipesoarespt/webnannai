import styled from 'styled-components'

export const Button = styled.button`
    height: 45px;
    cursor: pointer;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    user-select: none;
    text-align: center;
    white-space: nowrap;
    padding: 0.5rem 1rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    color: ${({theme}) => theme.common.white};
    font-family: ${({theme}) => theme.typography.fontBold};
    background-color: ${({secondary, theme}) => secondary ? theme.secondary.main : theme.primary.main};
    &:hover {
        background-color: ${({secondary, theme}) => secondary ? theme.secondary.dark : theme.primary.dark};
    }
`