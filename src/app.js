const Ghibli = require('./models/ghibli.js');
const SelectView = require('./views/select_view.js');
const FilmListView = require('./views/film_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#director-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#film-list');
  const filmListView = new FilmListView(listContainer);
  filmListView.bindEvents();

  const ghibli = new Ghibli;
  ghibli.bindEvents();
  ghibli.getData();
});
