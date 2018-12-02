const PubSub = require('../helpers/pub_sub.js');
const FilmDetailView = require('./film_detail_view');

const FilmListView = function (container) {
  this.container = container;
};

FilmListView.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:films-ready', (evt) => {
    this.clearList(); //new
    this.renderFilmDetailViews(evt.detail);
  });
};

//new

FilmListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};
//

FilmListView.prototype.renderFilmDetailViews = function (films) {
  films.forEach((film) => {
    const filmItem = this.createFilmListItem(film);
    this.container.appendChild(filmItem);
  });
};

FilmListView.prototype.createFilmListItem = function (film) {
  const filmDetailView = new FilmDetailView();
  const filmDetail = filmDetailView.createFilmDetail(film);
  return filmDetail;
};

module.exports = FilmListView;
