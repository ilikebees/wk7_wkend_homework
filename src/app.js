const Ghibli = require('./models/ghibli.js');
const SelectView = require('./views/select_view.js');
const GhibliListView = require('./views/ghibli_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#ghibli-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();
});
