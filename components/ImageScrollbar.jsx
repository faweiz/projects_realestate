import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent='center' alignItems='center' marginRight='1'>
//       <Icon
//         as={FaArrowAltCircleLeft}
//         onClick={() => scrollPrev()}
//         fontSize='2xl'
//         cursor='pointer'
//         d={['none','none','none','block']}
//       />
//     </Flex>
//   );
// }

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Flex justifyContent='center' alignItems='center' marginLeft='1'>
//       <Icon
//         as={FaArrowAltCircleRight}
//         onClick={() => scrollNext()}
//         fontSize='2xl'
//         cursor='pointer'
//         d={['none','none','none','block']}
//     />
//     </Flex>
//   );
// }

const LeftArrow = () => {
  const { 
    isFirstItemVisible,
    scrollPrev,
    items,
    scrollToItem,
    getItemElementById
  } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => {
          if (isFirstItemVisible) {
            scrollToItem(getItemElementById(items.toArr().slice(-1)?.[0]?.[0]));
          } else {
            scrollPrev();
          }
        }}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const RightArrow = () => {
  const { 
    isLastItemVisible,
    scrollNext,
    items,
    scrollToItem,
    getItemElementById 
  } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => {
          if (isLastItemVisible) {
            scrollToItem(getItemElementById(items.toArr()?.[0]?.[0]));
          } else {
            scrollNext();
          }
        }}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}

export default function ImageSrollbar({ data }) {
  return (
    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        // <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
        <Box width='350px' itemId={item.id} overflow='hidden' p='1'>
          {/* <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" /> */}
          {/* <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={400} height={260}  sizes="(max-width: 500px) 200px, (max-width: 1024px) 300px, 400px" /> */}
        {/* <Image placeholder="blur" blurDataURL={item.href} src={item.href} width={400} height={260}  sizes="(max-width: 500px) 200px, (max-width: 1024px) 300px, 400px" /> */}
          <Image placeholder="blur" blurDataURL={item.href} src={item.href} 
            width={420} 
            height={260} 
            style={{
            maxWidth: '100%',
            maxHeight: '260px',
            }}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
