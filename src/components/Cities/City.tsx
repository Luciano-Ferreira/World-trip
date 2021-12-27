import { Box, Flex, Heading, Image, Text } from  '@chakra-ui/react';

export default function City() {
  return(
    <Box borderRadius='4px' overflow='hidden'>
      <Image src='/ukplace.jpg' alt='ukplace' h='160px' w='100%' />
      <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderColor='yellow.300' borderTop='0' >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>London</Heading>
          <Text mt='3' fontSize='md' color='gray.500' fontWeight='500'>United Kingdom</Text>
        </Flex>
        <Image src='/uk.png' alt='uk' borderRadius='50%' w='30px' h='30px' objectFit='cover' />
      </Flex>
    </Box>
  )
}