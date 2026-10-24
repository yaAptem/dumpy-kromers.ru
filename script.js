document.addEventListener('DOMContentLoaded', function () {
  // Перенаправление недоступных страниц
  var unavailablePages = ['borrow.html', 'call.html', 'deals.html'];

  document.querySelectorAll('a.menu-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (unavailablePages.indexOf(href) !== -1) {
        e.preventDefault();
        window.location.href = 'unavaible.html';
      }
    });
  });

  // Вставка блока "Соединения" на каждой странице
  var detailsContainer = document.getElementById('connections');
  if (detailsContainer) {
    detailsContainer.innerHTML =
  '<details>' +
    '<summary>[[Соединения]]</summary>' +
    '<p class="blocked">* [[Гиперссылка заблокирована]]</p>' +
    '<a href="index.html">* [[Главная страница]]</a><br>' +
    '<a href="unavaible.html">* ЗАНЯТЬ</a><br>' +
    '<a href="unavaible.html">* ЗАНЯТЬ ЕЩЕ</a><br>' +
    '<a href="unavaible.html">* ЗВОНИ</a><br>' +
    '<a href="unavaible.html">* [[Сделки]]</a><br>' +
    '<a href="about.html">* насчет</a><br>' +
    '<a href="battat-p-m.html">* П.М. Баттат</a><br>' +
    '<a href="https://yaaptem.github.io/dumpy-kromers.ru/images/banner.png">* [[Реклама]]</a><br>' +
  '</details>';
  }
});