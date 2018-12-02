const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

  const Ghibli = function () {
    this.ghibliData = [];
    this.directors = [];
  };

  Ghibli.prototype.getData = function () {
    const request = new RequestHelper('https://ghibliapi.herokuapp.com/films')
    request.get()
    .then(data => {
      this.ghibliData = data;
      this.directors = this.uniqueDirectorList();
      PubSub.publish('Ghibli:films-ready', this.ghibliData);
      PubSub.publish('Ghibli:directors-ready', this.directors);
    });
  };

  //new

  Ghibli.prototype.uniqueDirectorList = function () {
  const allDirectors = this.ghibliData.map(film => film.director);
  return allDirectors.filter((director, index, array) => {
    return array.indexOf(director) === index;
  });
}

Ghibli.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    const directorIndex = evt.detail;
    this.publishFilmsByDirector(directorIndex);
  })
};

Ghibli.prototype.publishFilmsByDirector = function (directorIndex) {
  const filteredFilms = this.filterAllFilmsByDirector(directorIndex);
  PubSub.publish('Ghibli:films-ready', filteredFilms);
};

Ghibli.prototype.filterAllFilmsByDirector = function (directorIndex) {
  const selectedFilm = this.directors[directorIndex];
  return this.ghibliData.filter(film => film.director === selectedFilm);
};
 //

module.exports = Ghibli;
