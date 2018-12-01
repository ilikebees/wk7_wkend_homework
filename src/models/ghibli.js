const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Ghibli = function () {
  this.ghibliData = [];
  this.films = [];

};

Ghibli.prototype.getData = function () {
  const request = new RequestHelper('https://ghibliapi.herokuapp.com');
  request.get()
    .then((data) => {
      this.ghibliData = data;
      this.films = this.uniqueFilmList();
      PubSub.publish('Ghibli:ghibli-ready', this.ghibliData);
      PubSub.publish('Ghibli:films-ready', this.films);
    });
}



module.exports = Ghibli;
