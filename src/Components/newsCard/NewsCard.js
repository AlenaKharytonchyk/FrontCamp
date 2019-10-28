import './newsCard.scss';

const templateForCard = ' <div class="card-image">'
  + '          <img src="{{imgUrl}}" alt="{{title}}">'
  + '          <span class="card-title">{{title}}</span>'
  + '        </div>'
  + '        <div class="card-content">'
  + '          <p>{{description}}</p>'
  + '        </div>'
  + '        <div class="card-action">'
  + '          <a href="{{url}}" target="_blank">Open the news</a>'
  + '        </div>';

export default function NewsCard(newsInfo) {
  const li = document.createElement('li');
  li.className = 'card';
  li.innerHTML = templateForCard.replace('{{url}}', newsInfo.url)
    .replace(/{{title}}/g, newsInfo.title)
    .replace('{{description}}', newsInfo.description)
    .replace('{{imgUrl}}', newsInfo.urlToImage);
  return li;
}
