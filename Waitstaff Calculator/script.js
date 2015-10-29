var app = angular.module('waitStaffCalc', []);

app.controller('mainCtrl', function($scope){
  $scope.reset() = function() {
    $scope.mealDetails = { mealPrice: 0.0, tax: 0.0, tip: 0.0 };
    $scope.customerCharges = { subTotal: 0.0, tip: 0.0 };
    $scope.earnings = { totalTips: 0.0, numMeals: 0 }
  }

  $scope.reset();
});
