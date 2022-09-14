import React from 'react';
import Image from 'next/image'

import Container from '@components/Container';

import { Main, Box, Content, Logo, Text } from './styles';

import logo from '@public/icons/logo.svg'

const NavBar: React.FC = () => {
  return (
    <Main>
      <Container>
        <Content>
          <Logo>
            <Image src={logo} />
            <div>
              <Text>Alugue Flat<strong>Nannai Residence</strong></Text>
            </div>
          </Logo>
          <Box>
            <strong>2022. Todos os direitos reservados</strong>
            <p>(81) 98275-0722</p>
          </Box>
        </Content>
      </Container>
    </Main>)
}

export default NavBar;