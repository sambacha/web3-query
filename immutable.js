module.exports = extend;

const hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  let target = {};

  for (let i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (let key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
