import React from 'react'

import Container from '@components/Container'
import Whatsapp from '@components/Whatsapp'

import Banner from '@containers/Banner'
import NavBar from '@containers/NavBar'
import SingUp from '@containers/SingUp'
import About from '@containers/About'
import Beach from '@containers/Beach'
import Accommodations from '@containers/Accommodations'
import Carousel from '@containers/Carousel'
import NewsLatest from '@containers/NewsLatest'
import Footer from '@containers/Footer'

export default function Home() {
  return (<>
    <Banner header={<NavBar />} footer={<SingUp />} />
    <Container>
      <About />
      <Accommodations />
      <Beach />
      <Carousel />
      <NewsLatest/>
    </Container>
    <Footer/>
    <Whatsapp />
  </>)
}
