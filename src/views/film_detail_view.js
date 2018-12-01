const FilmDetailView = function () {};

FilmDetailView.prototype.createFilmDetail = function (film) {

  const filmDetail = document.createElement('div');
  filmDetail.classList.add('film-detail');

  const title = document.createElement('h3');
  title.textContent = film.title;
  filmDetail.appendChild(title);

  const detailsList = document.createElement('ul');
  
  const description = this.createDetailListItem('Description', film.description);
  detailsList.appendChild(description);

  const director = this.createDetailListItem('Director', film.director)
  detailsList.appendChild(director);

  const release_date = this.createDetailListItem('Release Date', film.release_date)
  detailsList.appendChild(release_date);

  filmDetail.appendChild(detailsList);
  return filmDetail;
};

FilmDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};


module.exports = FilmDetailView;
