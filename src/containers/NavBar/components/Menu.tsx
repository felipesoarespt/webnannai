import React from 'react';

import { Main, Box } from './styles';

interface IMenu {
  open: boolean;
  children: any
}

const Menu: React.FC<IMenu> = ({ open, children }) => {
  if (open) {
    return (
      <Main>
        <Box>
          {children}
        </Box>
      </Main>
    )
  }
  return null
}

export default Menu;