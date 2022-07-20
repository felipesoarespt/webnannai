import React from 'react';

import { Main, Title, Description, Image, Banner, Content } from './styles';

interface ICarouselItem {
  image: any
  title: string;
  description: string;
}

const CarouselItem: React.FC<ICarouselItem> = ({ image, title, description }) => {
  return (
    <Main>
      <Banner>
        <Image src={image} layout='responsive' alt="batroom" />
      </Banner>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Main>
  )
}

export default CarouselItem;