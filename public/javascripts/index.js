const btn = document.querySelector('.js-btn-toggle');

const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  document.body.classList.add('theme-mode');
}

btn.addEventListener('click', function () {
  document.body.classList.toggle('theme-mode');

  let theme = 'light';
  if (document.body.classList.contains('theme-mode')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});