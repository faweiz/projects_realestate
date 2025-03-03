import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { RealtyUrl, RealtyFetchApi } from '../utils/fetchApi';


export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
      <Button fontSize='xl'>
        <Link legacyBehavior href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);

// export async function getStaticProps() {
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }


export async function getStaticProps() {
  // const RealtyUrlNew = new URL('${RealtyUrl}/properties/v2/list-for-sale?city=New%20York%20City&state_code=NY&offset=0&limit=2', RealtyUrl );
  // const res= await fetch(RealtyUrlNew.href, RealtyFetchApi);

  //const RealtyUrlNew = 'https://api.rentcast.io/v1/properties?address=2212%20nottoway%20dr%20Hanover%20MD%2021076';
  const RealtyUrlNew = 'https://api.rentcast.io/v1/listings/sale?city=Hanover&state=MD&status=Active&limit=10';
  const res= await fetch(RealtyUrlNew, RealtyFetchApi);

  //const propertyForSale = await res.json();
  const propertyForSale = await res.json();

  return {
    props: {
      // propertiesForSale: propertyForSale?.properties,
      propertiesForSale: propertyForSale
    },
  };
}

export default function Home({ propertiesForSale, propertiesForRent })
{
  // console.log(propertiesForSale, propertiesForRent);
  console.log(propertiesForSale);

  return (
    <>
    <Box>
      <h1>Hello!</h1>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {/* Fetch the properties for rent and map over them... */}
        {/* {propertiesForRent.map((property) => <Property property={property} key={property.id} />)} */}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap'>
        {/* Fetch the properties for sale and map over them... */}
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
  
    </Box>
    </>
  )
}

