// import 'dotenv/config';
const fetch = require('node-fetch');

// console.log(process.env.MY_API_KEY);
const url = 'https://newsapi.org/v2/top-headlines?'
  + 'country=us&'
  + 'apiKey=1d8434c04862439692cc773aa6bfc026';


const promise = fetch(Channel.url)
  .then((response) => response.json())
  .then((data) => console.log(data.articles))
  .catch((error) => console.warn(error));
console.log(promise);
