import Button from './Button';
import NewsCard from './NewsCard';
import './newsApp.scss';

const template = '<div class="app-container"><ul class="buttons-container"><li class="back-btn">Back</li></ul><ul class="news-container"></ul></div>';
const newsUrlTemplate = 'https://newsapi.org/v2/top-headlines?sources={{SOURCES}}&apiKey=1d8434c04862439692cc773aa6bfc026';

export default class NewsApp {
  constructor() {
    this.sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=1d8434c04862439692cc773aa6bfc026';
    const mainContainer = document.querySelector('.app');
    mainContainer.innerHTML = template;
  }

  get newUrl() {
    return newsUrlTemplate.replace('{{SOURCES}}', this.source);
  }

  setSource(source) {
    this.source = source;
    console.log('New Source:', source);

    this.render();
  }

  async getSources() {
    const response = await fetch(this.sourcesUrl);
    const data = await response.json();
    console.log(data);
    this.sources = data.sources.map((source) => ({ id: source.id, name: source.name }));
  }

  async getNews() {
    const responce = await fetch(this.newUrl);
    const data = await responce.json();
    console.log('news', data);
    this.news = data.articles;
  }

  async render() {
    const buttonsContainer = document.querySelector('.app .buttons-container');
    const newsContainer = document.querySelector('.app .news-container');
    const backBtn = buttonsContainer.querySelector('.back-btn');

    if (!this.sources) {
      await this.getSources();
      buttonsContainer.classList.remove('display-news');
      this.sources.forEach((source) => {
        buttonsContainer.append(Button(source, () => this.setSource(source.id)));
      });
      newsContainer.innerHTML = '';
    } else {
      await this.getNews();
      buttonsContainer.classList.add('display-news');
      backBtn.addEventListener('click', () => this.setSource(null));
      this.news.forEach((newsInfo) => {
        newsContainer.append(NewsCard(newsInfo));
      });
    }
  }
}

// export { NewsApp, template };
