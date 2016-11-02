import model = require('./model');
import helper = require('./util/helper');
import $ = require('jquery');

console.log('__dirname: ' + __dirname);
console.log('__filename: ' + __filename);

export = {
  render: function () {
    return 'view.render() works';
  },
  model: model,
  helper: helper,
  $: $
};
