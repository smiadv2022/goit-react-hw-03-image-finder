const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35460498-2829e60f1755bf2084387bda6';

export async function fetchGallery({ search, page, perPage }) {
  // search = 'cat';
  const response = await fetch(
    `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  console.log('resp', response);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}
