import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31487679-f74d16d66b223008c42dbbdd0';

export async function fetchImages(query, page) {
  const response = await axios(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.data.hits);
  return response;
}