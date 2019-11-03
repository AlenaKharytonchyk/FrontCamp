import './newsApp.scss';
import NewsPage from '../../Pages/NewsPage';
import SourcePage from '../../Pages/SourcePage';

const template = '<div class="app-container"></div>';

class NewsApp {
  constructor() {
    const mainContainer = document.querySelector('.app');
    mainContainer.innerHTML = template;
    this.container = mainContainer.querySelector('.app-container');
  }

  setSource(source) {
    this.source = source;
    this.render();
  }

  async render() {
    if (!document || !document.querySelector('.app')) {
      return null;
    }

    if (!this.source) {
      return SourcePage(this.container, ({ id }) => this.setSource(id));
    }
    return NewsPage(this.source, this.container, () => this.setSource(null));
  }
}

const NewsAppSingleton = (function () {
  return new NewsApp();
}());

export default NewsAppSingleton;
