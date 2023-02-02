import axios from 'axios';

export const getSearchedImages = query => {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  const USER_KEY = '32431010-caf7a3962f7fe8b7dd9329d8c';

  return axios
    .get('/?', {
      params: {
        q: query,
        page: 1,
        key: USER_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
    .then(res => res.data);
};
