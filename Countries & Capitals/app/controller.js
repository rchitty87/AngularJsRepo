app.controller('HomeCtrl', function($scope) {

});

app.controller('CountriesCtrl', ['$scope', 'cacService', function($scope, cacService) {
  $scope.isWaiting = true;

  cacService.getCountries().then(function(result) {
    $scope.countries = result.geonames;
    $scope.isWaiting = false;
  })
}]);

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
