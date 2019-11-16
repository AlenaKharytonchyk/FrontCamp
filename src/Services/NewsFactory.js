import placeholder from '../assets/images/placeholder.jpg';

const NewsFactory = {
  makeNews: (article = {}) => {
    const {
      title, url, description, urlToImage,
    } = article;
    return ({
      title: title || 'No title',
      imgUrl: urlToImage || placeholder,
      url: url || '#',
      description: description || 'No description',
    });
  },
};

export default NewsFactory;
