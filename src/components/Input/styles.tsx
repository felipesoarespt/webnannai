import styled from 'styled-components'

export const Main = styled.div`
    position: relative;
    & label {
        color: ${({ theme, feedback }) => feedback === 'error' ? theme.error.primary : ''};  
    }
    & input {
        border-color: ${({ theme, feedback }) => feedback === 'error' ? theme.error.primary : ''}; 
    }
`

export const Input = styled.input`
    width: 100%;
    height: 45px;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.secondary.main};
`

export const Label = styled.label` 
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.secondary.main};
    font-family: ${({ theme }) => theme.typography.fontBold};
`

export const Message = styled.span`
    bottom: -18px;
    display: block;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    color: ${({ theme }) => theme.error.primary};
    font-family: ${({ theme }) => theme.typography.fontMedium};
`