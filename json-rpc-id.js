module.exports = IdIterator;

function IdIterator(opts) {
  opts = opts || {};
  const max = opts.max || Number.MAX_SAFE_INTEGER;
  const idCounter =
    typeof opts.start !== 'undefined'
      ? opts.start
      : Math.floor(Math.random() * max);

  return function createRandomId() {
    idCounter = idCounter % max;
    return idCounter++;
  };
}
