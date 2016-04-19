var makeCurry = function (fn) {
  var slice;
  if (typeof fn !== 'function') {
    throw Error('No function provided');
  }

  slice = [].slice;
  return function curriedFn() {
    var args = slice.call(arguments);
    return fn.apply(null, args);
  };
};