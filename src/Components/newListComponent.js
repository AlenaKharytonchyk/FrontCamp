const template = '<div class="news-container"><ul class="buttons-container"></ul><ul class="news-container"></ul></div>';
const newsUrlTemplate = 'https://newsapi.org/v2/top-headlines?sources={{SOURCES}}&apiKey=1d8434c04862439692cc773aa6bfc026';

export default class NewsApp {
  constructor() {
    this.sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=1d8434c04862439692cc773aa6bfc026';
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
    if (!this.sources) {
      await this.getSources();

      const mainContainer = document.querySelector('.app');
      mainContainer.innerHTML = template;

      const list = mainContainer.querySelector('.buttons-container');
      this.sources.forEach((source) => {
        const li = document.createElement('li');
        li.addEventListener('click', () => this.setSource(source.id));
        li.innerHTML = source.name;
        list.append(li);
      });
    } else {
      await this.getNews();

      const buttonsContainer = document.querySelector('.app .buttons-container');
      buttonsContainer.style.display = 'none';
      const newsContainer = document.querySelector('.app .news-container');
      this.news.forEach((newsInfo) => {
        const li = document.createElement('li');
        li.className = 'news-card';
        li.innerText = newsInfo.title;
        newsContainer.append(li);
      });
    }
  }
}

// export { NewsApp, template };
