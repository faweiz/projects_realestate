import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/Coming-soon-full.jpg';

// const Property = ({ property: { property_id, thumbnail, price, beds, baths, building_size, address } }) => (
//   <Box maxW='350px' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden' margin='5px'> 
//   <Link href={`/property/${property_id}`} target="_blank" passHref>
//     <Flex flexWrap='wrap' w='350px' p='3' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
//     {/* <Flex flexWrap='wrap' w='420px' justifyContent='center' alignItems='center' m='10'> */}
//       <Box>
//         {/* <Image src={thumbnail ? thumbnail : DefaultImage} width={400} height={260}/> */}
//         <Image src={thumbnail ? thumbnail : DefaultImage} width={350} height={350}/>
//       </Box>
//       <Box w='full'>
//         <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
//           <Flex alignItems='center'>
//             <Text fontWeight='bold' fontSize='lg'>${price}</Text>
//           </Flex>
//         </Flex>
//         <Flex alignItems='center' p='1' justifyContent='space-between' w='300px' color='blue.400'>
//           <FaBed/> {beds} Beds | <FaBath/> {baths} Baths | <BsGridFill/> {building_size ? building_size.size : '-'} {building_size ? building_size.units : 'sqft'}
//         </Flex>
//         <Text fontSize='lg'>
//           {address ? address.line : '-'}
//         </Text>
//         <Text fontSize='lg'>
//           {address ? address.city : '-'}{','} {address ? address.state_code : '-'} {address ? address.postal_code : '-'}
//         </Text>
//       </Box>
//     </Flex>
//   </Link>
//   </Box>
// );

// const Property = ({ property: { property_id, thumbnail, price, beds, baths, building_size, address } }) => (
//   <Box maxW='350px' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden' margin='5px'> 
//    <Link href={`/property/${property_id}`} target="_blank" passHref>
//     <Flex flexWrap='wrap' w='350px' justifyContent='flex-start' cursor='pointer' >
//     {/* <Flex flexWrap='wrap' w='420px' justifyContent='center' alignItems='center' m='10'> */}
//       <Box height={233} borderWidth='1px'>
//         {/* <Image src={thumbnail ? thumbnail : DefaultImage} width={400} height={260}/> */}
//         <Image src={thumbnail ? thumbnail : DefaultImage} 
//           width={350} 
//           height={233}
//           style={{
//             maxWidth: '100%',
//             maxHeight: '233px',
//         }}/>
//       </Box>
//       <Box w='full' p='5' paddingTop='0px' >
//         <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
//           <Text fontWeight='bold' fontSize='lg'>${price}</Text>
//         </Flex>
//         <Flex alignItems='center' p='1' justifyContent='space-between' w='300px' color='blue.400'>
//           <FaBed/> {beds} Beds | <FaBath/> {baths} Baths | <BsGridFill/> {building_size ? building_size.size : '-'} {building_size ? building_size.units : 'sqft'}
//         </Flex>
//         <Text fontSize='lg'>
//           {address ? address.line : '-'}
//         </Text>
//         <Text fontSize='lg'>
//           {address ? address.city : '-'}{','} {address ? address.state_code : '-'} {address ? address.postal_code : '-'}
//         </Text>
//       </Box>
//     </Flex>
//    </Link>
//   </Box>
// );




const Property = ({ property: { id, thumbnail, price, bedrooms, bathrooms, squareFootage, lotSize, formattedAddress } }) => (
  <Box maxW='350px' borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden' margin='5px'> 
   <Link href={`/property/${id}`} target="_blank" passHref>
    <Flex flexWrap='wrap' w='350px' justifyContent='flex-start' cursor='pointer' >
    {/* <Flex flexWrap='wrap' w='420px' justifyContent='center' alignItems='center' m='10'> */}
      <Box height={233} borderWidth='1px'>
        {/* <Image src={thumbnail ? thumbnail : DefaultImage} width={400} height={260}/> */}
        <Image src={thumbnail ? thumbnail : DefaultImage} 
          width={350} 
          height={233}
          style={{
            maxWidth: '100%',
            maxHeight: '233px',
        }}/>
      </Box>
      <Box w='full' p='5' paddingTop='0px' >
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Text fontWeight='bold' fontSize='lg'>${price}</Text>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='300px' color='blue.400'>
          <FaBed/> {bedrooms} Beds | <FaBath/> {bathrooms} Baths | <BsGridFill/> {squareFootage} sqft
        </Flex>
        <Text fontSize='lg'>
          {formattedAddress}
        </Text>
      </Box>
    </Flex>
   </Link>
  </Box>
);

export default Property;