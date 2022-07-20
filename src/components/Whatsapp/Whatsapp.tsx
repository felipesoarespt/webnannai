import React, { useState } from 'react'

import { Main, Badge, Content, Header, Body, Item, Icon } from './styles';

import whatsapp from '@public/icons/whatsapp.svg'
import whatsapp_o from '@public/icons/whatsapp_o.svg'

const Whatsapp: React.FC = () => {
  const [open, setOpen] = useState(false)

  const numbers = [
    {
      number: '+55 81 98275-0722',
      text: 'Fazer Reserva',
    },
  ]

  const getNumber = (number = '') => {
    return String(number).replace(/ g/, '').replace('+', '')
  }

  const component = () => {
    if (open) {
      return (
        <Content>
          <Header>
            Fale com a gente pelo Whatsapp
          </Header>
          <Body>
            {numbers.map((item, index) => (
              <Item
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send?phone=${getNumber(item.number)}&text=${item.text}`}
              >
                <strong>{item.text}</strong>
                <span>
                  {item.number}
                  <Icon
                    width={20}
                    height={20}
                    alt="icons"
                    src={whatsapp}
                  />
                </span>
              </Item>
            ))}
          </Body>
        </Content>
      )
    }
  }

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Main onClick={toggle}>
      <Badge>
        <Icon
          width={30}
          height={30}
          alt="icons"
          src={whatsapp_o}
        />
      </Badge>
      {component()}
    </Main>
  )
}

export default Whatsapp
