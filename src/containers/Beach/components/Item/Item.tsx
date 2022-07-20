import React from 'react';

import { Main, Content, Box, Image, Title, Description } from './styles';

interface IBeachItem {
  image: any,
  title: string,
  revert?: boolean,
  description: string[]
}

const BeachItem: React.FC<IBeachItem> = ({ image, revert, title, description = [] }) => {
  return (
    <Main revert={revert}>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Box>
        <Image src={image} layout='fill' />
      </Box>
      <Content>
        {description.map((item, index) => <Description key={index}>{item} </Description>)}
      </Content>
    </Main>
  )
}

export default BeachItem;