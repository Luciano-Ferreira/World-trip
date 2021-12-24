import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftLine } from 'react-icons/ri';

export default function Header() {
  const { asPath } = useRouter();
  const isNotHomePage = asPath !== '/';

  return (
    <Flex
      as='header'
      bg='white'
      align='center'
      justify='center'
      w='100%'
      mx='auto'
      px='1rem'
      h={['50px', '100px']}
    >
      <Grid
        h='100%'
        templateColumns='repeat(3, 1fr)'
        maxW='1160px'
        alignItems='center'
        justifyContent='center'
      >
        {isNotHomePage &&
          <Link href='/'>
            <a>
              <Icon as={RiArrowLeftLine} fontSize={['20','40']} justifySelf='start' />
            </a>
          </Link>}
        <Image
          w={['81px', '184px']}
          src='images/Logo.svg'
          alt='World trip'
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  )
}