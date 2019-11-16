import api from '../api';
import Button from '../Components/button/Button';

const template = '<ul class="buttons-container"></ul>';
let sources = [];
const SourcePage = async (domContainer, handleClick) => {
  const container = domContainer;
  container.innerHTML = template;
  const buttonsContainer = container.querySelector('.buttons-container');
  if (sources.length === 0) {
    sources = await api.getSources();
  }
  sources.forEach((source) => {
    buttonsContainer.append(Button(source, () => handleClick(source)));
  });
};

export default SourcePage;
