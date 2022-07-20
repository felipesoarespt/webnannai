import React from 'react';
import Slider from "react-slick";

import Item from './components/Item'

import { Main, Title, Body } from './styles'

import image0 from '@public/img/bedroon/image0.jpeg'
import image1 from '@public/img/bedroon/image1.jpeg'
import image2 from '@public/img/bedroon/image2.jpeg'

import wifi from '@public/icons/wi-fi.svg'
import cutlery from '@public/icons/cutlery.png'
import balcony from '@public/icons/balcony.png'
import airConditioner from '@public/icons/air-conditioner.png'

import bed from '@public/icons/bed.png'
import bunkBed from '@public/icons/bunk-bed.png'
import television from '@public/icons/television.png'

const Accommodations: React.FC = () => {

  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  };

  return (
    <Main id="flat">
      <Title>Conheça a nossa acomodação</Title>
      <Body>
        <Slider {...settings}>
          <Item
            image={image0}
            capacity={8}
            title="Flat 2 quartos"
            description="O flat possui 60m2, com dois quartos, um sendo suíte, um banheiro social, cozinha equipada, sala climatizada e varanda gourmet com cervejeira e churrasqueira."
            info={[
              { text: 'Cozinha equipada', icon: cutlery },
              { text: 'Varanda gourmet', icon: balcony },
              { text: 'Sala climatizada', icon: airConditioner },
              { text: 'Wi-fi', icon: wifi }]}
          />
          <Item
            image={image1}
            capacity={8}
            title="Flat 2 quartos"
            description="Nossa suite master dispõe de internet, TV a cabo, Netflix, uma cama de casal super confortável, uma bicama e ar-condicionado."
            info={[
              { text: 'Televisão 40 polegadas', icon: television },
              { text: 'Cama de casal', icon: bed },
              { text: 'Bicama', icon: bunkBed },
              { text: 'Ar condicionado', icon: airConditioner }]}
          />
          <Item
            image={image2}
            capacity={8}
            title="Flat 2 quartos"
            description="O segundo quarto possui ar condicionado, uma cama de casal, uma bicama, um beliche, acomodando até 4 pessoas."
            info={[
              { text: 'Cama de casal', icon: bed },
              { text: 'Bicama', icon: bed },
              { text: 'Beliche', icon: bunkBed },
              { text: 'Ar condicionado', icon: airConditioner }]}
          />
        </Slider>
      </Body>
    </Main>
  )
}

export default Accommodations;