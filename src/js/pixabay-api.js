export function getImagesByUserSearch(searchText) {
  const requestParams = new URLSearchParams({
    key: '45077643-3bb964d60cb084522e3de8d92',
    q: searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${requestParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
