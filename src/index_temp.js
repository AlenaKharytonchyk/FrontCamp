// import 'dotenv/config';
const fetch = require('node-fetch');

// console.log(process.env.MY_API_KEY);

const channelCard = `<li class='channelCard'>\n<button class='channel_btn'>{{channel_name}}</button>\n</li>`;

class Channel{
  constructor(config) {

  }
  get url() {
    const url = 'https://newsapi.org/v2/top-headlines?'
      + 'country=us&'
      + 'apiKey=1d8434c04862439692cc773aa6bfc026';

  }

  fetch(){
    const promise = fetch(Channel.url)
      .then((response) => response.json())
      .then((data) => console.log(data.articles))
      .catch((error) => console.warn(error));
    console.log(promise);
  }

  render() {
    this.fetch();
  }
}

const config = {
  template: channelCard,
  container: document.getElementsByClassName('channels')[0]
};
const channelsApp = new Channel(config);

document.onreadystatechange = function funcComplete() {
  if (document.readyState === 'complete') {
    channelsApp.render();
  }
};
