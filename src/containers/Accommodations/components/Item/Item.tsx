import React from 'react';

import { Main, Box, Title, Capacity, Description, Image, Icon, Info, Include } from './styles';

interface IAccommodationsItem {
  image: any
  title: string;
  capacity: number;
  description: string;
  info: any[];
}

const AccommodationsItem: React.FC<IAccommodationsItem> = ({ image, title, capacity, description, info }) => {

  const include = (icon, text): React.ReactNode => {
    return (
      <Include>
        <span>
          <Icon
            src={icon}
            width={25}
            height={25}
            alt="icons"
          />
        </span>
        {text}
      </Include>
    )
  }

  return (
    <Main>
      <Image src={image} layout='responsive' alt="batroom" />
      <Box>
        <Title>{title}</Title>
        <Capacity>
          <strong>Capacidade</strong> {capacity} pessoas
        </Capacity>
        <Info>
          {info.map((item, index) => include(item.icon, item.text))}
        </Info>
        <Description>{description}</Description>
      </Box>
    </Main>
  )
}

export default AccommodationsItem;