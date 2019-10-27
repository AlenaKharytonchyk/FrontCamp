// import 'dotenv/config';
// const fetch = require('node-fetch');
import NewsApp from './Components/newListComponent';

const app = new NewsApp();

document.onreadystatechange = async function funcComplete() {
  if (document.readyState === 'complete') {
    await app.render();
  }
};
