app.controller('CountryCtrl', ['$scope', '$route', 'cacService', function($scope, $route, cacService) {
  cacService.getCountry($route.current.params.countryCode).then(function(result) {
    $scope.country = result.geonames[0];
  });

  cacService.getCapital($route.current.params.countryCode).then(function(result) {
    $scope.population = result.geonames[0].population;
  });

  cacService.getNeighbors($route.current.params.countryCode).then(function(result){
    $scope.neighbors = result.geonames;
  });
}]);
