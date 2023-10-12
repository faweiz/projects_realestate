import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import { RealtyUrl, RealtyFetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

import Link from 'next/link';

// const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
//   <Box maxWidth='1000px' margin='auto' p='4'>
//     {photos && <ImageScrollbar data={photos} />}
//     <Box w='full' p='6'>
//       <Flex paddingTop='2' alignItems='center'>
//         <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
//         <Text fontWeight='bold' fontSize='lg'>
//           ${price} {rentFrequency && `/${rentFrequency}`}
//         </Text>
//         <Spacer />
//         {/* <Avatar size='sm' src={agency?.logo?.url}></Avatar> */}
//       </Flex>
//       <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
//         {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
//       </Flex>
//     </Box>
//     <Box marginTop='2'>
//       <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
//       <Text lineHeight='2' color='gray.600'>{description}</Text>
//     </Box>
//     <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
//       <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
//         <Text>Type</Text>
//         <Text fontWeight='bold'>{type}</Text>
//       </Flex>
//       <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
//         <Text>Purpose</Text>
//         <Text fontWeight='bold'>{purpose}</Text>
//       </Flex>
//       {furnishingStatus && (
//         <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
//           <Text>Furnishing Status</Text>
//           <Text fontWeight='bold'>{furnishingStatus}</Text>
//         </Flex>
//       )}
//     </Flex>
//     <Box>
//       {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
//         <Flex flexWrap='wrap'>
//           {amenities?.map((item) => (
//               item?.amenities?.map((amenity) => (
//                 <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
//                   {amenity.text}
//                 </Text>
//               ))
//           ))}
//         </Flex>
//     </Box>
//   </Box>
// );


function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}


const PropertyDetails = ({ propertyDetails: { photos, address, price, beds, baths, building_size, description, listing_status, list_date, prop_type, year_built, lot_size, mls, rdc_web_url} }) => (

  <Box maxWidth='1000px' margin='auto' p='4'>
    {photos && <ImageScrollbar data={photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'>
        <Text fontWeight='bold' fontSize= '3xl'> ${price} </Text>
        <Spacer />
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='black.400'>
        <FaBed/> {beds} Beds | <FaBath/> {baths} Baths | <BsGridFill/> {building_size ? building_size.size : '-'} {building_size ? building_size.units : 'sqft'}
      </Flex>
      <Flex paddingTop='2' alignItems='center'>
        <Text fontWeight='bold' fontSize= 'lg'> {address ? address.line : '-'}{','} {address ? address.city : '-'}{','} {address ? address.state_code : '-'} {address ? address.postal_code : '-'} </Text>
        <Spacer />
      </Flex>
      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{"About This Home"}</Text>
        <Text lineHeight='2' color='gray.600'>{description}</Text>
      </Box>

      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{"Home Facts"}</Text>
        <Flex flexWrap='wrap' justifyContent='space-between'>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Status: </Text>
            <Text>{listing_status?'Active':'Closed'}</Text>
          </Flex>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Time on Market#: </Text>
            <Text>{list_date? getNumberOfDays(list_date, Date.now()): 0}</Text>
          </Flex>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Property Type: </Text>
            <Text>{prop_type}</Text>
          </Flex>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Year Built: </Text>
            <Text>{year_built}</Text>
          </Flex>
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Lot Size: </Text>
            <Text>{lot_size ? lot_size.size : '-'} {lot_size ? lot_size.units : 'sqft'}</Text>
          </Flex>
          {/* <Link href={rdc_web_url} target="_blank" passHref>
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                <Text>MLS#: </Text>
                <Text>{mls ? mls.id : '-'}</Text>
            </Flex>
          </Link> */}
        </Flex>
      </Box>

      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{"Price Insights"}</Text>

      </Box>
      
    </Box>
 </Box>
);



const PropertyPageDetails = ({ pageDetail }) => {

  return (
    <Box>
      <Flex flexWrap='wrap'>
        {pageDetail.map((propertyDetails) => <PropertyDetails propertyDetails={propertyDetails} key={propertyDetails.id} />)}
      </Flex>
    </Box>
  );
};


export async function getServerSideProps({ params: { id } }) {
  //const RealtyUrlNew = new URL(`/properties/v2/detail?property_id=M9905702642`, RealtyUrl );
  //const RealtyUrlNew = new URL(`/properties/v2/detail?property_id=${id}`, RealtyUrl );

  const RealtyUrlNew = `https://api.rentcast.io/v1/properties?address=${id}`;


  // http://localhost:5000/properties/v2/detail?property_id=2067028093
  const res= await fetch(RealtyUrlNew, RealtyFetchApi);
  const data = await res.json();

  return {
    props: {
       //pageDetail: data?.properties,
      pageDetail: data,
    },
  };
  
}

export default PropertyPageDetails;