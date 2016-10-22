import _ = require('lodash');

export = function () {
  console.log('_:', _.camelCase('hello yay'));
  return 'helper is ready';
}
