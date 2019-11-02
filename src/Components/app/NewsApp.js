import Button from '../button/Button';
import NewsCard from '../newsCard/NewsCard';
import './newsApp.scss';
import NewsService from '../../api';

const template = '<div class="app-container"><ul class="buttons-container"><li class="back-btn">Back</li></ul><ul class="news-container"></ul></div>';

class NewsApp {
  constructor() {
    const mainContainer = document.querySelector('.app');
    mainContainer.innerHTML = template;
  }

  setSource(source) {
    this.source = source;
    this.render();
  }

  async render() {
    if (!document || !document.querySelector('.app')) {
      return;
    }

    const buttonsContainer = document.querySelector('.app .buttons-container');
    const newsContainer = document.querySelector('.app .news-container');
    const backBtn = buttonsContainer.querySelector('.back-btn');

    if (!this.source) {
      buttonsContainer.classList.remove('display-news');
      newsContainer.style.display = 'none';
      newsContainer.innerHTML = '';
      this.sources = await NewsService.getSources();
      this.sources.forEach((source) => {
        buttonsContainer.append(Button(source, () => this.setSource(source.id)));
      });
    } else {
      this.news = await NewsService.getNews(this.source);
      buttonsContainer.classList.add('display-news');
      newsContainer.style.display = 'flex';
      backBtn.addEventListener('click', () => this.setSource(null));
      this.news.forEach((newsInfo) => {
        newsContainer.append(NewsCard(newsInfo));
      });
    }
  }
}

export default NewsApp;
