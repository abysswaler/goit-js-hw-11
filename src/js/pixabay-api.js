export function fetchImages(query) {
  const apiKey = '46359106-f72dd377f08be81b63b245749';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
}