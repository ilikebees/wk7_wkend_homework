const PubSub = require('../helpers/pub_sub');


const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Ghibli:films-ready', (evt) => this.populateSelect(evt.detail));

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (films) {
  films.forEach((film, index) => {
    const option = this.createFilmOption(film, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createFilmOption = function (film, index) {
  const option = document.createElement('option');
  option.textContent = film;
  option.value = index;
  return option;
};

module.exports = SelectView;
