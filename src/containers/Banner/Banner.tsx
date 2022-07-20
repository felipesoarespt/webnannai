import React from 'react';
import Image from 'next/image'
import image from '@public/icons/wave-2.svg'

import { Main, Header, Footer, Box, Title, Icon } from './styles';

interface IBanner {
  header: React.ReactNode
  footer: React.ReactNode
}

const Banner: React.FC<IBanner> = ({ header, footer }) => {
  return (<Main id="home">
    <Header>{header}</Header>
    <Box>
      <Icon>
        <Image src={image} alt="wave-2.svg" layout="fill" />
      </Icon>
      <Title>Venha conhecer  uma parte do paraíso</Title>
    </Box>
    <Footer>{footer}</Footer>
  </Main>)
}

export default Banner;