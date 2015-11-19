var app = angular.module("waitStaffCalculator", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home.html'
  }).when('/new-meal', {
    templateUrl: 'new-meal.html'
  }).when('/my-earnings', {
    templateUrl: 'my-earnings.html'
  }).otherwise('/');
}]);

app.run(function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path('/');
  });

  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function() {
    $timeout(function() {
      $rootScope.isLoading = false;
    }, 1000);
  })
});

app.controller("mainCtrl", function($scope) {
    $scope.initialMeal = { price: 0.0, taxPercentage: 0, tipPercentage: 0 };
    $scope.initialCustomer = { subtotal: 0.0, tip: 0.0, total: 0.0 };
    $scope.initialEarnings = { tipTotal: 0.0, mealCount: 0, averageTip: 0 };

    $scope.submit = function(){
      $scope.customer.subtotal = parseFloat((($scope.meal.price/100.0)*(100 + $scope.meal.taxPercentage)).toFixed(2));
      $scope.customer.tip = parseFloat((($scope.customer.subtotal/100.0)*$scope.meal.tipPercentage).toFixed(2));
      $scope.customer.total = $scope.customer.subtotal + $scope.customer.tip;

      $scope.earnings.tipTotal += $scope.customer.tip;
      $scope.earnings.mealCount++;

      $scope.earnings.averageTip = $scope.earnings.tipTotal/$scope.earnings.mealCount;
    }

    $scope.cancel = function() {
      $scope.meal = angular.copy($scope.initialMeal);
    }

    $scope.reset = function() {
      $scope.meal = angular.copy($scope.initialMeal);
      $scope.customer = angular.copy($scope.initialCustomer);
      $scope.earnings = angular.copy($scope.initialEarnings);
    }

    $scope.reset();
});
