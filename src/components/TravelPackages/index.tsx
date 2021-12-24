import { Grid, GridItem } from '@chakra-ui/react';
import TravelPackage from './TravelPackage';

export default function TravelPackageList() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w='100%'
      justifyContent='space-between'
      align='center'
      mt={['10', '32']}
      mx='auto'
      maxW='1160px'
      gap={[1, 5]}
    >
      <GridItem>
        <TravelPackage icon='cocktail' legend='Nightlife' />
      </GridItem>
      <GridItem>
        <TravelPackage icon='surf' legend='Beach' />
      </GridItem>
      <GridItem>
        <TravelPackage icon='building' legend='Modern' />
      </GridItem>
      <GridItem>
        <TravelPackage icon='museum' legend='Classic' />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelPackage icon='earth' legend='More' />
      </GridItem>
    </Grid>
  );
}