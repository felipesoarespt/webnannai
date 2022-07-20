import React from 'react';
import Slider from "react-slick";

import Item from './components/Item'

import { Main } from './styles'

import image1 from '@public/img/carrocel/image0.jpeg'
import image2 from '@public/img/carrocel/image1.jpeg'
import image3 from '@public/img/carrocel/image2.jpg'

const Carousel: React.FC = () => { 

  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Main>
      <Slider {...settings}>
        <Item
          image={image2}
          title="Conheça nosso flat no Nannai Residence"
          description="Um parque aquático com 36 piscinas, restaurante, loja de conveniência, bar na praia, academia, sauna, arena de vôlei e quadra tênis. Dispõe de serviço de quarto, segurança 24h e estacionamento privativo. "
        />
        <Item
          image={image3}
          title="Conheça nosso flat no Nannai Residence"
          description="O apartamento dispõe de 2 quartos, 2 banheiros, roupa de cama, toalhas, TV de tela plana a cabo, cozinha totalmente equipada e varanda com vista da piscina. "
        />
        <Item
          image={image1}
          title="Conheça nosso flat no Nannai Residence"
          description="O nannai residence fica a 2,8 km da Praia do Cupe e a 9 km da Praia de Merepe. O aeroporto mais próximo é o Aeroporto Internacional do Recife/Guararapes - Gilberto Freyre, a 49 km do Flat no Nannai Residence - Muro Alto - Porto de Galinhas."
        />
      </Slider>
    </Main>
  )
}

export default Carousel;