import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { ContinentProps } from '../../pages';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {

}

export default function Slider({ continents }: ContinentProps) {
  return (
    <Flex w='100%' maxW='1240px' mx='auto' mb={['5', '10']} h={['250px', '450px']}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {
          continents.map(continent => (
            <SwiperSlide key={continent.title}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url(${continent.image})`}
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
              >
                <Link href={`/continent/${continent.slug}`}>
                  <a>
                    <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">{continent.title}</Heading>
                    <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>{continent.summary}</Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Flex>
  )
}