/* в этот файл добавляет скрипты*/
const toggleButton = document.getElementById('nav-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('main-nav--close');
});
