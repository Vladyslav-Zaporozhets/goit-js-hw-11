import axios from 'axios';

export async function getImagesByQuery(query) {
  const API_KEY = '52394561-eb0a207b23eead48d5392c952';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
}
