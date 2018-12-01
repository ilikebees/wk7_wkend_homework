const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

  const Ghibli = function () {
    this.ghibliData = [];
    this.films = [];
  };

  Ghibli.prototype.getData = function () {
    const request = new RequestHelper('https://ghibliapi.herokuapp.com/films')
    request.get()
    .then(data => {
      this.GhibliData = data;
      PubSub.publish('Ghibli:films-ready', this.GhibliData);
    });
  };


module.exports = Ghibli;
