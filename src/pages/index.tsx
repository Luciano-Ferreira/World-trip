import { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import TravelPackages from '../components/TravelPackages';
import Separator from '../components/Separator';
import Slider from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Flex 
      direction='column'
    >
      <Header />
      <Banner />
      <TravelPackages />
      <Separator />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?<br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}

export default Home;
