angular.module('testApp').filter('reversing', function() {
  return function(text) {
    return text.split("").reverse().join("");
  };
});