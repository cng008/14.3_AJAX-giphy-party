console.log("Let's get this party started!");

const apiKey = '1hWyguDasbRNDfI7r0gL48WV3GP5EzU0';

//prettier-ignore
async function getGif(term, api) {
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { q: term, api_key: api }});
  // const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchItem}&api_key=${apiKey}`);
  console.log(res);
}

// PICK RANDOM GIF FROM ARRAY

// GET URL FROM RANDOM ARRAY

// SEARCH FOR GIF ON SUBMIT
const form = document.getElementById('searchForm');
form.addEventListener('submit', e => {
  const searchItem = document.getElementById('searched').value;
  e.preventDefault();
  getGif(searchItem, apiKey);
});
