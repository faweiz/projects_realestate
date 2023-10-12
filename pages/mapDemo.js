import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { icons } from "react-icons";
import { BsWindowSidebar } from "react-icons/bs";
import * as search_data from '.././pages/json/search_data.json'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import millify from 'millify';
import { Box, Flex, Text, Center, Button, IconButton } from '@chakra-ui/layout';
import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import noresult from '../assets/images/noresult.svg'
import { RealtyUrl, RealtyFetchApi } from '../utils/fetchApi';

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
  const sort = query.sort || 'relevance'; 

  const RealtyUrlNew = new URL(`/properties/v2/list-for-sale?city=${city}&state_code=${state_code}&offset=${offset}&limit=${limit}
                                &prop_type=${prop_type}&price_min=${price_min}&price_max=${price_max}&beds_min=${beds_min}&baths_min=${baths_min}
                                &sqft_min=${sqft_min}&sqft_max=${sqft_max}&sort=${sort}`, RealtyUrl );
  const res= await fetch(RealtyUrlNew.href, RealtyFetchApi);
  const data = await res.json();

  return {
    props: {
      //properties: data?.properties,
      properties: search_data?.properties,
    },
  };
}

var center = { lat: 39.139550, lng: -76.741990 }; 
const containerStyle = {
  width: '60%',
  height: '90vh'
};

function mapDemo({ properties }) {
  const { isLoaded } = useLoadScript({
      //googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      googleMapsApiKey: "AIzaSyAePfxdWErt-qkBKosEqMKSze2Aa8t_v3Q",
  });

  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  // var center = useMemo(() => ({ lat: 39.139550, lng: -76.741990 }), []);
  //var center = { lat: 39.139550, lng: -76.741990 }; 

  const icon_red = "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
  const icon_blue = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  const [icon, setIcon] = useState("https://maps.google.com/mapfiles/ms/icons/red-dot.png");
  const [infoWindow, setInfoWindow] = useState(false);

  const [ModalData, setModalData] = useState(null);
  const [open, setmodal] = useState(false);
  const onOpenModal = () => setmodal(true);
  const onCloseModal = () => setmodal(false);
  const iconChange = () => {
    setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
  }

  if (!isLoaded) return <div>Google Map Loading...</div>;
  return(
    

    <Flex
      width={"100vw"}
      height={"80vh"}
      maxWidth={"100vw"}
      maxHeight={"90vh"}
      position={"relative"}
    >
        {/* <Map /> */}
        {/* <Box overflowY="auto" width="40vw" height = "100vh" padding="2" marginTop="3">
          <Flex flexWrap='wrap'>
            {search_data.properties.map((property) => 
              <Property property={property} key={property.id} />)}
          </Flex>
        </Box> */}

      <Box overflowY="auto" width="40vw" height = "100vh" padding="2" marginTop="3">
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
        </Flex>
        {searchFilters && <SearchFilters />}
        <Text fontSize='2xl' p='4' fontWeight='bold'>
          Properties {router.query.purpose}
        </Text>
        <Center onClick={() => getPosition()}>
          Current Location
        </Center>

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

      { properties.map( (property, index) => {      // Get first value of the lat and lon from the map set array

        return(
          index === 0 ? (
            center = {
              lat: property.address.lat,
              lng: property.address.lon,
            },
            console.log("center: "),
            console.log(center)
          ) : (
            null  // ignore other
          )
        )
      })}

      <GoogleMap zoom={12} center={center} mapContainerStyle={containerStyle} options={{gestureHandling: "greedy"}}>
        {properties.map((properties, childClicked) => (
          <MarkerF
            key={properties.property_id}
            position={{
              lat: properties.address.lat,
              lng: properties.address.lon
            }}
            label = {{text: `${millify(properties.price)}`, color: "White", fontSize: "9px", fontWeight: "bold"}}  
            onMouseOver={() => {
              iconChange,
              setInfoWindow(properties)
            }}
            onClick={() => {
              setmodal(true),
              setModalData(properties),
              console.log({childClicked});
            }}
          />
        ))}
      
        {infoWindow ?
            <InfoWindow
              position={{
                  lat: infoWindow.address.lat + 0.003,
                  lng: infoWindow.address.lon + 0.003
              }}
              onCloseClick={() => setInfoWindow(null)}
            >
              <Flex>
                <Center>
                  <Image src={infoWindow.thumbnail} width={100} height={100} 
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100px',
                    }}/>
                </Center>
                <Box p='2'>
                  <Box><h1><b>${millify(infoWindow.price)}</b></h1> </Box>
                  <Box>{infoWindow.beds} Beds | {infoWindow.baths} Baths | {infoWindow.building_size ? infoWindow.building_size.size : '-'} {infoWindow.building_size ? infoWindow.building_size.units : 'sqft'}</Box>
                  <Box>{infoWindow.address ? infoWindow.address.line : '-'} </Box>
                  <Box>{infoWindow.address ? infoWindow.address.city : '-'}{','} {infoWindow.address ? infoWindow.address.state_code : '-'} {infoWindow.address ? infoWindow.address.postal_code : '-'}</Box>
                </Box>
              </Flex>
              </InfoWindow> 
        : null}

        {ModalData ?
              <Modal open={open} onClose={onCloseModal}>
                <div className="flex">
                    <div className="w-full">
                        <img src={ModalData.thumbnail} style={{ width: '300px', height: '300px' }} />
                    </div>
                    <div className="w-full ml-3">
                        <h1>{ModalData.address.line}</h1>
                        <p>{ModalData.address.city}{','} {ModalData.address.state_code} {ModalData.address.postal_code}</p>
                    </div>
                </div>
            </Modal>
          : null}  
      </GoogleMap>
      
    </Flex>
  ) 
}

function Map() {
  const center = useMemo(() => ({ lat: 39.139550, lng: -76.741990 }), []);
  const icon_red = "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
  const icon_blue = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  const [icon, setIcon] = useState("https://maps.google.com/mapfiles/ms/icons/red-dot.png");
  const [infoWindow, setInfoWindow] = useState(false);

  const [ModalData, setModalData] = useState(null);
  const [open, setmodal] = useState(false);
  const onOpenModal = () => setmodal(true);
  const onCloseModal = () => setmodal(false);

//   const iconChange = (data) => {
//     if (icon && data.property_id == icon.property_id) {
//     //   return "https://storage.googleapis.com/support-kms-prod/SNP_2752129_en_v0"
//         return "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
//     } else {
//     //   return "https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0"
//         return "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
//     }
//   }

  const iconChange = () => {
    setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
  }

  const containerStyle = {
    width: '60%',
    height: '90vh'
  };
  
  return (
    // <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle} options={{gestureHandling: "greedy"}}>
    //   <MarkerF position={center} label = {{text: "abc", color: "white"}} />
    // </GoogleMap>
  
 

    <GoogleMap zoom={15} center={center} mapContainerStyle={containerStyle} options={{gestureHandling: "greedy"}}>
      {search_data.properties.map((search_data, childClicked) => (
        <MarkerF
          key={search_data.property_id}
          position={{
            lat: search_data.address.lat,
            lng: search_data.address.lon
          }}
          label = {{text: `${millify(search_data.price)}`, color: "White", fontSize: "9px", fontWeight: "bold"}}  
          onMouseOver={() => {
            iconChange,
            setInfoWindow(search_data)
          }}
          onClick={() => {
            setmodal(true),
            setModalData(search_data),
            console.log({childClicked});
          }}
        />
      ))}
      {infoWindow ?
          <InfoWindow
            position={{
                lat: infoWindow.address.lat + 0.001,
                lng: infoWindow.address.lon + 0.001
            }}
            onCloseClick={() => setInfoWindow(null)}
          >
            <Flex>
              <Center>
                <Image src={infoWindow.thumbnail} width={100} height={100} 
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100px',
                  }}/>
              </Center>
              <Box p='2'>
                <Box><h1><b>${millify(infoWindow.price)}</b></h1> </Box>
                <Box>{infoWindow.beds} Beds | {infoWindow.baths} Baths | {infoWindow.building_size ? infoWindow.building_size.size : '-'} {infoWindow.building_size ? infoWindow.building_size.units : 'sqft'}</Box>
                <Box>{infoWindow.address ? infoWindow.address.line : '-'} </Box>
                <Box>{infoWindow.address ? infoWindow.address.city : '-'}{','} {infoWindow.address ? infoWindow.address.state_code : '-'} {infoWindow.address ? infoWindow.address.postal_code : '-'}</Box>
              </Box>
            </Flex>
            </InfoWindow> 
      : null}
      {ModalData ?
            <Modal open={open} onClose={onCloseModal}>
              <div className="flex">
                  <div className="w-full">
                      <img src={ModalData.thumbnail} style={{ width: '300px', height: '300px' }} />
                  </div>
                  <div className="w-full ml-3">
                      <h1>{ModalData.address.line}</h1>
                      <p>{ModalData.address.city}{','} {ModalData.address.state_code} {ModalData.address.postal_code}</p>
                  </div>
              </div>
          </Modal>
        : null} 

    </GoogleMap>
  );
};



// If browser supports navigator.geolocation, generate Lat/Long else let user know there is an error
const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, posError); // Passing in a success callback and an error callback fn
  } else {
    alert("Sorry, Geolocation is not supported by this browser."); // Alert is browser does not support geolocation
  }
}
// Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
const posError = () => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(res => {
      if (res.state === 'denied') {
        alert('Enable location permissions for this website in your browser settings.')
      }
    })
  } else {
    alert('Unable to access your location. You can continue by submitting location manually.') // Obtaining Lat/long from address necessary
  }
}
// Geolocation success callback fn
const showPosition = (position) => {
  let lat = position.coords.latitude // You have obtained latitude coordinate!
  let long = position.coords.longitude // You have obtained longitude coordinate!
  //convertToAddress(lat, long) // Will convert lat/long to City, State, & Zip code
  center = {
    lat: lat,
    lng: long,
  },
  console.log("center: "),
  console.log(center)
} 





export default mapDemo;