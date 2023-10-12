import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '8b2a997d46mshf1069c821e8aefep1186f0jsn9121e3552cba'
    },
  });
    
  return data;
}

// export const RealtyUrl = 'https://realty-in-us.p.rapidapi.com';
// // export const RealtyFetchApi = {
// //   method: 'GET',
// //   headers: {
// //     'X-RapidAPI-Key': '8b2a997d46mshf1069c821e8aefep1186f0jsn9121e3552cba',
// //     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
// //   }
// // };

// export const RealtyFetchApi = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'd5f4b32608msh3f8b4a7644b5067p1e53c1jsn6aaaac6ca56b',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   }
// };



export const RealtyUrl = 'https://realty-in-us.p.rapidapi.com';
// export const RealtyFetchApi = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '8b2a997d46mshf1069c821e8aefep1186f0jsn9121e3552cba',
//     'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
//   }
// };

export const RealtyFetchApi = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
    'X-Api-Key': 'e3407a8c5cb84d0ea17d635747dc9198'
  }
};