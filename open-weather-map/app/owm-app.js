var app = angular.module('OWMApp', ['ngRoute']);

app.value('owmCities', ['New York', 'Dallas', 'Chicago']);

app.run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function() {
    $location.path('/error');
  });
});

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl : 'home.html',
        controller : 'HomeCtrl'
    })
    .when('/cities/:city', {
      templateUrl: 'city.html',
      controller: 'CityCtrl',
      resolve: {
        city: function(owmCities, $route, $location) {
          var city = $route.current.params.city;
          city = city.replace('_', ' ');
          if(owmCities.indexOf(city) == -1) {
            $location.path('/error');
            return;
          }
          return city;
        }
      }
    })
    .when('/error', {
      template: '<p>Error - Page not found</p>'
    })
    .otherwise('/error');
}]);

app.controller('HomeCtrl', ['$scope', function($scope) {
        //empty for now
}]);

app.controller('CityCtrl', function($scope, city) {
  $scope.city = city;
});
