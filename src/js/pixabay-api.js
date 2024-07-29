import axios from 'axios';

export async function getImagesByUserSearch(searchText) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '45077643-3bb964d60cb084522e3de8d92',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
