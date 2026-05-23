const langBtn = document.querySelector('.button-lang');
const langList = document.querySelector('.button-list');

langBtn.addEventListener('click', () => {
  langList.classList.toggle('active');
});
