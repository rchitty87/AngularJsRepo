var app = angular.module('ccApp', ['ngAnimate', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  }).when('/countries', {
    templateUrl: 'countries.html',
    controller: 'CountriesCtrl'
  }).when('/countries/:countryCode', {
    templateUrl: 'country.html',
    controller: 'CountryCtrl'
  }).otherwise('/');
}]);

app.run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function() {
    $location.path('/');
  });
});
