const card = document.querySelector('.card'),
      cinput = document.querySelector('.cinput'),
      cline2 = document.querySelector('.cline2');
document.querySelector('.cform').addEventListener('submit', function(e) {
  cinput.blur();
  card.classList.add('saving');
  e.preventDefault();
});
cline2.addEventListener('animationend', function(e) {
  setTimeout(() => {
    card.classList.add('done');
  }, 1000);
});
