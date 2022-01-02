import { Flex, Heading, Text, Popover, PopoverTrigger, Icon, PopoverArrow, PopoverContent, PopoverCloseButton, PopoverBody } from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function Infos({continent}: ContinentProps) {
  return(
    <Flex
      align='center'
      justifyContent='space-between'
    >
      <Flex 
        direction='column' 
        justify='center' 
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          {continent.countries}
        </Heading>
        <Text
          fontWeight='600'
          fontSize={['md', 'xl']}
          color='gray.700'
        >
          countries
        </Text>
      </Flex>
      <Flex 
        direction='column' 
        justify='center' 
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          {continent.languages}
        </Heading>
        <Text
          fontWeight='600'
          fontSize={['md', 'xl']}
          color='gray.700'
        >
          languages
        </Text>
      </Flex>
      <Flex 
        direction='column' 
        justify='center' 
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          color='yellow.400'
          fontWeight='500'
        >
          {continent.cities}
        </Heading>
        <Text
          fontWeight='600'
          fontSize={['md', 'xl']}
          color='gray.700'
        >
          cities +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon as={RiInformationLine} ml='1' color='gray.400' w={['10px', '16px']} h={['10px', '16px']} cursor='pointer' />
              </span>
            </PopoverTrigger>
            <PopoverContent bg='gray.700' color='yellow.400' >
              <PopoverArrow bg='gray.700' />
              <PopoverCloseButton />
              <PopoverBody fontWeight='400' fontSize='lg'>
                {continent.cities_list}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}