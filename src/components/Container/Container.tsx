import React from 'react';

import { Container } from './styles';

interface IBanner {
  children: React.ReactNode
}

const ContainerComponent: React.FC<IBanner> = ({ children }) => {
  return (<Container>
      {children}
    </Container>)
}

export default ContainerComponent;