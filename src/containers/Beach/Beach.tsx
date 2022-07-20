import React from 'react';

import Container from '@components/Container';

import Item from './components/Item';

import { Main } from './styles'

import image1 from '@public/img/praia-do-muro-alto.jpg'
import image2 from '@public/img/porto-galinhas.jpg'

const Beach: React.FC = () => {
  return (
    <Main>
      <Container>
        <Item
          revert
          image={image1}
          title='A praia de Muro Alto'
          description={["A Praia de Muro Alto tem cerca de 3 km de extensão e é formada por um extenso arrecife que cria uma imensa piscina natural com águas calmas, mornas e transparentes."]}
        />
        <Item
          image={image2}
          title='As belezas de Porto de Galinhas'
          description={["Porto de Galinhas possui piscinas de águas claras e mornas formadas entre corais, além de estuários, mangues, areia branca e coqueirais.", 
          'Toda a região é muito frequentada por turistas e surfistas de diversas nacionalidades, tendo sido eleita pela revista Viagem e Turismo, da Editora Abril, como a "Melhor Praia do Brasil" por dez vezes consecutivas']}
        />
      </Container>
    </Main>
  )
}

export default Beach;