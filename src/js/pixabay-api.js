const API_KEY = '46572597-f7ec836745a1e16eec9fbcb7b';
const BASE_URL = 'https://pixabay.com/api/';

function searchImages(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { searchImages };