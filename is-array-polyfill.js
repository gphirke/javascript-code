if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object().toString.call(arg) === '[object Array]';
  };
}
