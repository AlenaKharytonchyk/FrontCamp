import NewsApp from './Components/app/NewsApp';

const app = new NewsApp();

document.onreadystatechange = async function funcComplete() {
  if (document.readyState === 'complete') {
    await app.render();
  }
};
