var app = angular.module('myApp', []);

app.directive('optIn', function() {
  return {
    restrict: 'E',
    templateUrl: './opt-in.html',
    transclude: true
  }
});
