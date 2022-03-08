import { Flex } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import Cities from '../../components/Cities';
import Content from '../../components/Content';
import ContinentBanner from '../../components/ContinentBanner';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/dist/client/router';
import Loading from '../../components/Loading';


export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[]
  }
}

interface City100Prop {
  city: string; 
  country: string; 
  thumbnail: { url: string; }; 
  flag: { url: string; }; 
}

export default function Continent({continent}: ContinentProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex direction='column'>
      <Head>
        <title>WorldTrip - {continent.title}</title>
        <meta property='og:title' content={`WorldTrip ${continent.title}`} />
        <meta property='og:description' content={continent.description} />
        <meta name='twitter:title' content={`WorldTrip ${continent.title}`} />

        <meta name='twitter:image' content={continent.banner_image} />
        <meta name='twitter:image:src' content={continent.banner_image} />
        <meta property='og:image' content={continent.banner_image} />
        <meta property='og:image:secure_url' content={continent.banner_image} />
      </Head>

      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
        <Content continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continent'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  
  const params = context.params;
  const slug = params?.slug;
  const res = await prismic.getByUID('continent', String(slug), {});


  const continent = {
    slug: res.uid,
    title: res.data.title,
    description: RichText.asText(res.data.description),
    banner_image: res.data.banner_image.url,
    countries: res.data.countries,
    languages: res.data.languages,
    cities: res.data.cities,
    cities_list: res.data.cities_list,
    cities100: res.data.cities100.map((city: City100Prop) => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url,
      };
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}