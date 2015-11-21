var app = angular.module('instaApp', ['ngAnimate']);

app.controller('mainCtrl', ['$scope', '$q', '$http',
        function($scope, $q, $http) {
            $scope.loadMsg = false;
            $scope.errorMsg = false;

            function emptyImageData() {
                $scope.imageData = [];
            }

            function parseCallback(result) {
                $scope.loadMsg = false;
                $scope.errorMsg = false;

                for (var i = 0; i < 20; i++) {
                    $scope.imageData.push({ imageUrl: result.data[i].images.low_resolution
                        .url, imageLink: result.data[i].link});
                }
            }

            $scope.submitSearch = function(userInput) {
                emptyImageData();
                $scope.loadMsg = true;
                $scope.errorMsg = false;

                var url = "https://api.instagram.com/v1/tags/" + userInput +
                    "/media/recent";
                var request = {
                    callback: "JSON_CALLBACK",
                    access_token: "1692999346.1677ed0.011b9548d40b4584a03589a543460aba"
                };

                $http({
                        method: 'JSONP',
                        url: url,
                        params: request
                    })
                    .success(function(result) {
                        parseCallback(result);
                    })
                    .error(function() {
                        $scope.loadMsg = false;
                        $scope.errorMsg = true;
                    });
            }

            emptyImageData();
        }
]);
