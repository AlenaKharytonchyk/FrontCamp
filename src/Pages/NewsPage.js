import api from '../api';
import Button from '../Components/button/Button';
import NewsCard from '../Components/newsCard/NewsCard';
import LazyImageService from '../Services/LazyImageService';

const template = '<ul class="buttons-container"></ul><ul class="news-container"></ul>';
const NewsPage = async (source, domContainer, handelOnBackBtnClick) => {
  const container = domContainer;
  container.innerHTML = template;
  const newsContainer = container.querySelector('.news-container');
  const backBtn = new Button({ name: 'Back' }, handelOnBackBtnClick);
  container.querySelector('.buttons-container').append(backBtn);

  const news = await api.getNews(source);
  news.forEach((newsInfo) => {
    newsContainer.append(NewsCard(newsInfo));
  });

  LazyImageService.initObserver(document.querySelectorAll('img.lazy'));
};

export default NewsPage;
