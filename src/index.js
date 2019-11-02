import NewsAppSingleton from './Components/app/NewsApp';

document.onreadystatechange = async function funcComplete() {
  if (document.readyState === 'complete') {
    await NewsAppSingleton.render();
  }
};
