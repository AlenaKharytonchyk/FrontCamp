import constants from './constants';

const sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${constants.MY_API_KEY}`;
const newsUrlTemplate = `https://newsapi.org/v2/top-headlines?sources={{SOURCES}}&apiKey=${constants.MY_API_KEY}`;

class NewsService {
  static async getSources() {
    const response = await fetch(sourcesUrl);
    const data = await response.json();
    return data.sources.map((source) => ({ id: source.id, name: source.name }));
  }

  static async getNews(source) {
    const response = await fetch(newsUrlTemplate.replace('{{SOURCES}}', source));
    const { articles } = await response.json();
    return articles;
  }
}

export default NewsService;
