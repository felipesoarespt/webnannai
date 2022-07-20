import React from 'react';

import { Main, Input, Label, Message } from './styles';

interface IInput {
  label: string,
  message?: string,
  feedback?: string,
}

const InputComponent = React.forwardRef((props: IInput, ref) => {
  const {label, feedback, message} = props;
  return (
    <Main feedback={feedback}>
      <Label>{label}</Label>
      <Input ref={ref} {...props} />
      <Message>{message}</Message>
    </Main>
  )
})

export default InputComponent;