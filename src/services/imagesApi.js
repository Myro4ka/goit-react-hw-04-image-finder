import axios from 'axios';

export const getSearchedImages = (query, page) => {
  axios.defaults.baseURL = 'https://pixabay.com';
  const USER_KEY = '32431010-caf7a3962f7fe8b7dd9329d8c';

  return axios
    .get('/api/?', {
      params: {
        q: query,
        page,
        key: USER_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
    .then(res => res.data);
};
