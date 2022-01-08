const results = document.getElementById('results');
/* use ajax result to add a gif */
async function addGif(term) {
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: term,
      api_key: '1hWyguDasbRNDfI7r0gL48WV3GP5EzU0'
    }
  });
  const obj = res.data.data;
  const randomKey = obj[randomProperty(obj)];

  // APPEND GIF TO RESULTS SECTION
  try {
    const newGif = document.createElement('img');
    newGif.classList.add('rounded', 'm-2');
    newGif.setAttribute('height', '200px');
    newGif.src = randomKey.images.original.url; //returns URL from random array
    results.append(newGif);
  } catch (error) {
    alert("that's not a word!");
  }
}

// PICK RANDOM KEY FROM OBJECT ARRAY
randomProperty = obj => {
  const objArr = Object.keys(obj); //turns object keys into array
  return objArr[Math.floor(Math.random() * objArr.length)]; //returns a random number
};

// SEARCH FOR GIF ON SUBMIT
const form = document.getElementById('searchForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const searchVal = document.getElementById('searched').value;
  addGif(searchVal);
});

// REMOVE ALL IMAGES BUTTON
const removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', e => {
  results.innerHTML = '';
});

// ANIMATE HEADER
function randomRGB() {
  const r = Math.floor(Math.random() * 256); //put 256 to include 255 bc this will give a num between 0, 254.999~
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// change each letter color independently every .5s
const letters = document.querySelectorAll('span');
setInterval(function () {
  for (let letter of letters) {
    letter.style.color = randomRGB();
  }
}, 1000);
