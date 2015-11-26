app.service('cacService', ['$http', '$route', function($http, $route){
  this.getCountries = getCountries;
  this.getCountry = getCountry;
  this.getCapital = getCapital;
  this.getNeighbors = getNeighbors;

  function getCountries() {
    var url = 'http://api.geonames.org/countryInfoJSON?username=rchitty87';
    return $http.get(url).then(callback, errback);
  }

  function getCountry() {
    var url = 'http://api.geonames.org/countryInfoJSON?username=rchitty87&country=' + $route.current.params.countryCode;
    return $http.get(url).then(callback, errback);
  }

  function getCapital() {
    var url = 'http://api.geonames.org/searchJSON?formatted=true&username=rchitty87&q=capital&&style=full&country=' + $route.current.params.countryCode;
    return $http.get(url).then(callback, errback);
  }

  function getNeighbors() {
    var url = 'http://api.geonames.org/neighboursJSON?username=rchitty87&country=' + $route.current.params.countryCode;
    return $http.get(url).then(callback, errback);
  }

  function callback(response) {
    return response.data;
  }

  function errback(error) {
    return { Message: 'An unknown error had occurred.' };
  }
}]);
