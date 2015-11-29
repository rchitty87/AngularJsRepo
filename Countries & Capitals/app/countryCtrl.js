app.controller('CountryCtrl', ['$scope', 'cacService', function($scope, cacService) {
  cacService.getCountry().then(function(result) {
    $scope.country = result.geonames[0];
  });

  cacService.getCapital().then(function(result) {
    $scope.population = result.geonames[0].population;
  });

  cacService.getNeighbors().then(function(result){
    $scope.neighbors = result.geonames;
  });
}]);
