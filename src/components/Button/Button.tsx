import React from 'react';

import { Button } from './styles';

const ButtonComponent: React.FC<any> = (props) => {
  return (<Button {...props} />)
}

export default ButtonComponent;