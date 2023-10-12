// export const filterData = [
//   {
//     items: [
//       { name: 'Buy', value: 'for-sale' },
//       { name: 'Rent', value: 'for-rent' },
//     ],
//     placeholder: 'Purpose',
//     queryName: 'purpose',
//   },
//   {
//     items: [
//       { name: 'Daily', value: 'daily' },
//       { name: 'Weekly', value: 'weekly' },
//       { name: 'Monthly', value: 'monthly' },
//       { name: 'Yearly', value: 'yearly' },
//     ],
//     placeholder: 'Rent Frequency',
//     queryName: 'rentFrequency',
//   },
//   {
//     items: [
//       { name: '10,000', value: '10000' },
//       { name: '20,000', value: '20000' },
//       { name: '30,000', value: '30000' },
//       { name: '40,000', value: '40000' },
//       { name: '50,000', value: '50000' },
//       { name: '60,000', value: '60000' },
//       { name: '85,000', value: '85000' },
//     ],
//     placeholder: 'Min Price($)',
//     queryName: 'minPrice',
//   },
//   {
//     items: [
//       { name: '50,000', value: '50000' },
//       { name: '60,000', value: '60000' },
//       { name: '85,000', value: '85000' },
//       { name: '110,000', value: '110000' },
//       { name: '135,000', value: '135000' },
//       { name: '160,000', value: '160000' },
//       { name: '185,000', value: '185000' },
//       { name: '200,000', value: '200000' },
//       { name: '300,000', value: '300000' },
//       { name: '400,000', value: '400000' },
//       { name: '500,000', value: '500000' },
//       { name: '600,000', value: '600000' },
//       { name: '700,000', value: '700000' },
//       { name: '800,000', value: '800000' },
//       { name: '900,000', value: '900000' },
//       { name: '1000,000', value: '1000000' },
//     ],
//     placeholder: 'Max Price($)',
//     queryName: 'maxPrice',
//   },
//   {
//     items: [
//       { name: 'Lowest Price', value: 'price-low' },
//       { name: 'Highest Price', value: 'price-high' },
//       { name: 'Newest', value: 'date-new' },
//       { name: 'Oldest', value: 'date-old' },
//       { name: 'Verified', value: 'verified-score' },
//       { name: 'City Level Score', value: 'city-level-score' },
//     ],
//     placeholder: 'Sort',
//     queryName: 'sort',
//   },
//   {
//     items: [
//       { name: '1000', value: '1000' },
//       { name: '2000', value: '2000' },
//       { name: '3000', value: '3000' },
//       { name: '4000', value: '4000' },
//       { name: '5000', value: '5000' },
//       { name: '10000', value: '10000' },
//       { name: '20000', value: '20000' },
//     ],
//     placeholder: 'Max Area(sqft)',
//     queryName: 'areaMax',
//   },
//   {
//     items: [
//       { name: '1', value: '1' },
//       { name: '2', value: '2' },
//       { name: '3', value: '3' },
//       { name: '4', value: '4' },
//       { name: '5', value: '5' },
//       { name: '6', value: '6' },
//       { name: '7', value: '7' },
//       { name: '8', value: '8' },
//       { name: '9', value: '9' },
//       { name: '10', value: '10' },
//     ],
//     placeholder: 'Rooms',
//     queryName: 'roomsMin',
//   },
//   {
//     items: [
//       { name: '1', value: '1' },
//       { name: '2', value: '2' },
//       { name: '3', value: '3' },
//       { name: '4', value: '4' },
//       { name: '5', value: '5' },
//       { name: '6', value: '6' },
//       { name: '7', value: '7' },
//       { name: '8', value: '8' },
//       { name: '9', value: '9' },
//       { name: '10', value: '10' },
//     ],
//     placeholder: 'Baths',
//     queryName: 'bathsMin',
//   },
//   {
//     items: [
//       { name: 'Furnished', value: 'furnished' },
//       { name: 'Unfurnished', value: 'unfurnished' },
//     ],
//     placeholder: 'Furnish Type',
//     queryName: 'furnishingStatus',
//   },
//   {
//     items: [
//       { name: 'Apartment', value: '4' },
//       { name: 'Townhouses', value: '16' },
//       { name: 'Villas', value: '3' },
//       { name: 'Penthouses', value: '18' },
//       { name: 'Hotel Apartments', value: '21' },
//       { name: 'Villa Compound', value: '19' },
//       { name: 'Residential Plot', value: '14' },
//       { name: 'Residential Floor', value: '12' },
//       { name: 'Residential Building', value: '17' },
//     ],
//     placeholder: 'Property Type',
//     queryName: 'categoryExternalID',
//   },
// ];

// export const getFilterValues = (filterValues) => {
//   const {
//     purpose,
//     rentFrequency,
//     categoryExternalID,
//     minPrice,
//     maxPrice,
//     areaMax,
//     roomsMin,
//     bathsMin,
//     sort,
//     locationExternalIDs,
//     city,
//     state_code,
//   } = filterValues;

//   const values = [
//     {
//       name: 'purpose',
//       value: purpose,
//     },
//     {
//       name: 'rentFrequency',
//       value: rentFrequency,
//     },
//     {
//       name: 'minPrice',
//       value: minPrice,
//     },
//     {
//       name: 'maxPrice',
//       value: maxPrice,
//     },
//     {
//       name: 'areaMax',
//       value: areaMax,
//     },
//     {
//       name: 'roomsMin',
//       value: roomsMin,
//     },
//     {
//       name: 'bathsMin',
//       value: bathsMin,
//     },
//     {
//       name: 'sort',
//       value: sort,
//     },
//     {
//       name: 'locationExternalIDs',
//       value: locationExternalIDs,
//     },
//     {
//       name: 'city',
//       value: city,
//     },
//     {
//       name: 'state_code',
//       value: state_code,
//     },
//     {
//       name: 'categoryExternalID',
//       value: categoryExternalID,
//     },
//   ];

//   return values;
// };


export const filterData = [
  {
    items: [
      { name: 'Single Family', value: 'single_family' },
      //{ name: 'Townhouses', value: 'townhouse' },
      { name: 'Condo/Co-ops', value: 'condo' },
      { name: 'Lots/Land', value: 'land' },
      { name: 'Multi-Family', value: 'multi_family' },
      { name: 'Mobile', value: 'mobile' },
      { name: 'other', value: 'other' },
    ],
    placeholder: 'Home Type',
    queryName: 'prop_type',
  },
  {
    items: [
      { name: '$0', value: '0' },
      { name: '$100,000', value: '100000' },
      { name: '$200,000', value: '200000' },
      { name: '$300,000', value: '300000' },
      { name: '$400,000', value: '400000' },
      { name: '$500,000', value: '500000' },
      { name: '$600,000', value: '600000' },
      { name: '$700,000', value: '700000' },
      { name: '$800,000', value: '800000' },
      { name: '$900,000', value: '900000' },
    ],
    placeholder: 'Min Price($)',
    queryName: 'price_min',
  },
  {
    items: [
      { name: '$100,000',   value: '100000' },
      { name: '$200,000',   value: '200000' },
      { name: '$300,000',   value: '300000' },
      { name: '$400,000',   value: '400000' },
      { name: '$500,000',   value: '500000' },
      { name: '$600,000',   value: '600000' },
      { name: '$700,000',   value: '700000' },
      { name: '$800,000',   value: '800000' },
      { name: '$900,000',   value: '900000' },
      { name:'$1,000,000',  value:'1000000' },
      { name:'$1,250,000',  value:'1250000' },
      { name:'$1,500,000',  value:'1500000' },
      { name:'$1,750,000',  value:'1750000' },
      { name:'$2,000,000',  value:'2000000' },
      { name:'$10,000,000', value:'10000000' },
    ],
    placeholder: 'Max Price($)',
    queryName: 'price_max',
  },
  {
    items: [
      { name: '1+', value: '1' },
      { name: '2+', value: '2' },
      { name: '3+', value: '3' },
      { name: '4+', value: '4' },
      { name: '5+', value: '5' },
    ],
    placeholder: 'Bedrooms',
    queryName: 'beds_min',
  },
  {
    items: [
      { name: '1+', value: '1' },
      { name: '2+', value: '2' },
      { name: '3+', value: '3' },
      { name: '4+', value: '4' },
    ],
    placeholder: 'Baths',
    queryName: 'baths_min',
  },
  {
    items: [
      { name:  '500', value: '500' },
      { name: '1000', value: '1000' },
      { name: '1500', value: '1500' },
      { name: '2000', value: '2000' },
      { name: '2500', value: '2500' },
      { name: '3000', value: '3000' },
      { name: '3500', value: '3500' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '7000', value: '7000' },
    ],
    placeholder: 'Min Area(sqft)',
    queryName: 'sqft_min',
  },
  {
    items: [
      { name:  '500', value: '500' },
      { name: '1000', value: '1000' },
      { name: '1500', value: '1500' },
      { name: '2000', value: '2000' },
      { name: '2500', value: '2500' },
      { name: '3000', value: '3000' },
      { name: '3500', value: '3500' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '7000', value: '7000' },
      { name:'10000', value: '10000' },
    ],
    placeholder: 'Max Area(sqft)',
    queryName: 'sqft_max',
  },
  {
    items: [
      { name: 'Relevance', value: 'relevance' },
      { name: 'Newest', value: 'newest' },
      { name: 'Lowest Price', value: 'price_low' },
      { name: 'Highest Price', value: 'price_high' },
      { name: 'Have Photos', value: 'photos' },
      { name: 'Large House', value: 'sqft_high' },
      { name: 'Price Reduced', value: 'price_reduced_date' },
    ],
    placeholder: 'Sort',
    queryName: 'sort',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    //purpose,
    //rentFrequency,
    prop_type, price_max, price_min, beds_min, baths_min, sqft_min, sqft_max, sort,
    // categoryExternalID,, 
    // minPrice,
    // maxPrice,
    // areaMax,
    // roomsMin,
    // bathsMin,
    // sort,
    // locationExternalIDs,
    city,
    state_code,
  } = filterValues;

  const values = [
    {
      name: 'prop_type',
      value: prop_type,
    },
    {
      name: 'price_min',
      value: price_min,
    },
    {
      name: 'price_max',
      value: price_max,
    },
    {
      name: 'beds_min',
      value: beds_min,
    },
    {
      name: 'baths_min',
      value: baths_min,
    },
    {
      name: 'sqft_min',
      value: sqft_min,
    },
    {
      name: 'sqft_max',
      value: sqft_max,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'city',
      value: city,
    },
    {
      name: 'state_code',
      value: state_code,
    },
  ];

  return values;
};


