app.controller('CountriesCtrl', ['$scope', 'cacService', function($scope, cacService) {
  $scope.isWaiting = true;

  cacService.getCountries().then(function(result) {
    $scope.countries = result.geonames;
    $scope.isWaiting = false;
  });
}]);
