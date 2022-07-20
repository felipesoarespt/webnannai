import React, { useState } from 'react';
import Image from 'next/image'

import Container from '@components/Container';

import Menu from './components/Menu'

import { Content, Logo, Text, List, Item, Box, Hamburger } from './styles';

import logo from '@public/icons/logo.svg'

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  const component = (callback): React.ReactNode => {
    return (
      <List>
        <Item onClick={callback}>
          <a href="#home">
            Home
          </a>
        </Item>
        <Item onClick={callback}>
          <a href={process.env.NEXT_PUBLIC_BASE_URL_RESERVE} target="_blank" >
            Reservar
          </a>
        </Item>
        <Item onClick={callback}>
          <a href="#flat">
            O Flat
          </a>
        </Item>
      </List>
    )
  }

  return (
    <>
      <Container>
        <Content>
          <Logo>
            <Image src={logo} />
            <div>
              <Text>Alugue Flat<strong>Nannai Residence</strong></Text>
            </div>
          </Logo>
          <Box>
            {component(() => true)}
          </Box>
          <Hamburger
            className={open ? 'active' : ''}
            onClick={() => setOpen(!open)}
          />
        </Content>
      </Container>
      <Menu open={open}>{component(toggle)}</Menu>
    </>
  )
}

export default NavBar;