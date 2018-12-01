const Ghibli = require('./models/ghibli.js');
const FilmListView = require('./views/film_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#film-list');
  const filmListView = new FilmListView(listContainer);
  filmListView.bindEvents();

  const ghibli = new Ghibli;
  ghibli.getData();
});
