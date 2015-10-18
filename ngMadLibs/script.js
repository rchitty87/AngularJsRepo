var app = angular.module('madLibsApp', []);

app.controller('mainCtrl', function($scope){
  $scope.gender = 'male';
  $scope.submitted = false;

  $scope.submitForm = function(){
    $scope.submitted = true;
  }
});
