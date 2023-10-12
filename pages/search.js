import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import { RealtyUrl, RealtyFetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg'
import Link from 'next/link'

import * as search_data from '.././pages/json/search_data.json'

//import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      {properties.length == 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const city = query.city || 'Hanover'; 
  const state_code = query.state_code || 'MD'; 
  const offset = '0'; 
  const limit = "100"; 
  const prop_type = query.prop_type || 'single_family'; 
  const price_min = query.price_min || '0'; 
  const price_max = query.price_max || '10000000'; 
  const beds_min = query.beds_min || '1'; 
  const baths_min = query.baths_min || '1'; 
  const sqft_min = query.sqft_min || '500'; 
  const sqft_max = query.sqft_max || '10000'; 
  const sort = query.sort || 'price_low'; 

  // const RealtyUrlNew = new URL(`/properties/v2/list-for-sale?city=${city}&state_code=${state_code}&offset=${offset}&limit=${limit}
  //                               &prop_type=${prop_type}&price_min=${price_min}&price_max=${price_max}&beds_min=${beds_min}&baths_min=${baths_min}
  //                               &sqft_min=${sqft_min}&sqft_max=${sqft_max}&sort=${sort}`, RealtyUrl );
  // const res= await fetch(RealtyUrlNew.href, RealtyFetchApi);
  // const data = await res.json();

  // http://localhost:5000/properties/v2/list-for-sale?zipcode=21076&limit=10&sort=pricea&price_max=900000&beds_min=2&baths_min=2&sqft_min=1000&sqft_max=7500&lotSize_min=1000&yearbuilt_min=2000
  
  return {
    props: {
      //properties: data?.properties,
      properties: search_data?.properties,
    },
  };
}

export default Search;
