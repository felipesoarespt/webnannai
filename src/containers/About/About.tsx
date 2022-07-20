import React from 'react';

import { Main, Content, Title, Description, Banner, Image } from './styles';

import image from '@public/img/nanai-1.jpeg'

const About: React.FC = () => {
  return (
    <Main>
      <Title>Descanse em um dos melhores resorts do <strong>Nordeste</strong></Title>
      <Banner>
        <Image layout='responsive' src={image} />
      </Banner>
      <Content>
        <Description>
          O condomínio Nannai Residence está localizado no melhor trecho da praia de Muro Alto, em Porto de Galinhas.
        </Description>
        <Description>
          Dispõe de uma excelente infraestrutura de lazer, serviço de camareira e estacionamento privativo.
        </Description>
      </Content>
    </Main>
  )
}

export default About;