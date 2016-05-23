var changeCase = require('change-case');

var firstMethods = {
  'ucFirst': 'upperCaseFirst',
  'upperFirst': 'upperCaseFirst',
  'lcFirst': 'lowerCaseFirst',
  'lowerFirst': 'lowerCaseFirst',
};

module.exports = function(filename, type) {
  var methodName;
  if (type.indexOf('First') >= 0) {
    methodName = firstMethods[type];
  } else {
    methodName = type + 'Case';
  }
  return changeCase[methodName](filename);
}
