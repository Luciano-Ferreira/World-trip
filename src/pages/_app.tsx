import App, { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../../styles/slider.scss';


import NextNProgress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress 
        color='ffba08'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  return { ...appProps }
}

export default MyApp