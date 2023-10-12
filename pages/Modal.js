// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';


// import * as search_data from '.././pages/json/search_data_reduced.json'
// import { Box, Flex, Text, HStack, Center, Square, Badge } from '@chakra-ui/layout';
// import Image from 'next/image';
// import millify from 'millify';

// // const App = () => {
// //   const [open, setOpen] = useState(false);

// //   const onOpenModal = () => setOpen(true);
// //   const onCloseModal = () => setOpen(false);

// //   return (
// //     <div>
// //       <button onClick={onOpenModal}>Open modal</button>
// //       <Modal open={open} onClose={onCloseModal} center>
// //         <h2>Simple centered modal</h2>
// //       </Modal>
// //     </div>
// // };

// //ReactDOM.render(<App />, document.getElementById('app'));

// export default function Home() {

//   return <App />;
// }

// function App() {

//     return (
//       //<Box w='300px' padding="6" boxShadow="lg" bg="white" mt={16}> 
//       <Box borderWidth='1px' boxShadow="lg" borderRadius='lg' overflow='hidden'> 
//         <Flex>
//           {search_data.properties.map((search_data) => (
//             <Flex w='300px'>
//               <Center>
//                 <Image src={search_data.thumbnail} width={100} height={100} />
//               </Center>
              
//               <Box p='2'>
//                 <Box><h1><b>${millify(search_data.price)}</b></h1> </Box>
//                 <Box>{search_data.beds} beds &bull; {search_data.baths} baths </Box>
//                 <Box>{search_data.address ? search_data.address.line : '-'}</Box>
//                 <Box>{search_data.address ? search_data.address.city : '-'}{','} {search_data.address ? search_data.address.state_code : '-'} {search_data.address ? search_data.address.postal_code : '-'}</Box>
//               </Box>
//             </Flex>
//           ))}
//         </Flex>
//       </Box>
        

//      //{search_data.map((search_data) => <Property property={property} key={property.id} />)}

//     );


// };



import {useRef} from 'react';

export default function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>

      <div style={{height: '155rem'}} />

      <div ref={ref}>Some content here</div>

      <div style={{height: '155rem'}} />
    </div>
  );
}