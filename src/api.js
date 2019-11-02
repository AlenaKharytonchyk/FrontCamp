import constants from './constants';
import placeholder from './assets/images/placeholder.jpg';

const sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${constants.MY_API_KEY}`;
const newsUrlTemplate = `https://newsapi.org/v2/top-headlines?sources={{SOURCES}}&apiKey=${constants.MY_API_KEY}`;

const monitor = (obj) => new Proxy(obj, {
  get(target, propKey) {
    const origMethod = target[propKey];
    if (!origMethod) return null;
    return (...args) => {
      console.log(`Trying to ${propKey}`);
      const result = origMethod.apply(this, args);
      return result.then((out) => {
        console.log(`${propKey} received ${out.length} records.`);
        return out;
      })
        .catch((error) => console.warn('Failed to fetch data', error.message));
    };
  },
});

const SourceFactory = {
  makeSource: (source) => ({ id: source.id, name: source.name }),
};

const NewsFactory = {
  makeNews: (articles) => ({
    title: articles.title,
    imgUrl: articles.urlToImage || placeholder,
    url: articles.url,
    description: articles.description,
  }),
};

class NewsService {
  static async getSources() {
    const response = await fetch(sourcesUrl);
    const data = await response.json();
    return data.sources.map(SourceFactory.makeSource);
  }

  static async getNews(source) {
    const response = await fetch(newsUrlTemplate.replace('{{SOURCES}}', source));
    const { articles } = await response.json();
    return articles.map(NewsFactory.makeNews);
  }
}

export default monitor(NewsService);
