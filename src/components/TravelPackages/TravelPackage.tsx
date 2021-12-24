import { Flex, useBreakpointValue, Image, Text } from '@chakra-ui/react';

interface TravelPackagesProps {
  icon: string;
  legend: string;
}

export default function TravelPackage({icon, legend}: TravelPackagesProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={['row', 'column']} align='center' justify='center'>
      {isMobile ? <Image src={`/icons/${icon}.svg`} alt={legend} w='85px' h='85px' /> : <Text color='yellow.700' fontSize='4xl' mr='2'>•</Text>}
      <Text fontWeight='600' color='gray.700' fontSize={['md', 'xl', '2xl']}>{legend}</Text>
    </Flex>
  );
}