export default function NewsCard(newsInfo) {
  const li = document.createElement('li');
  li.className = 'news-card';
  li.innerText = newsInfo.title;
  return li;
}
