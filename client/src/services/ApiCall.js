// export const getProduct = id => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => console.log(data));

// }

import {baseUrl} from './baseUrl';

export const baseService = {
  get: async (url) => {
      let response = [];

      await fetch(baseUrl + url)
          .then(res => res.json())
          .then(data => {
              response = data
          })

      return response;
  },
  post: async (url, data) => {
      let response = {};
      let requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      }

      await fetch(baseUrl + url, requestOptions)
          .then(res => res.json())
          .then(data => {
              response = data
          })

      return response;
  },
  delete: async (url) => {
      let response = {};
      let requestOptions = {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
      }

      await fetch(baseUrl + url, requestOptions)
          .then(res => res.json())
          .then(data => {
              response = data
          })

      return response;
  }
};