export default function Button(source, onClick) {
  const li = document.createElement('li');
  li.className = 'sourse-btn';
  li.addEventListener('click', onClick);
  li.innerHTML = source.name;
  return li;
}
