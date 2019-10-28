import './button.scss';

export default function Button(source, onClick) {
  const li = document.createElement('li');
  li.className = 'source-btn';
  li.addEventListener('click', () => {
    onClick();
    window.scrollTo(0, 0);
  });
  li.innerHTML = source.name;
  return li;
}
