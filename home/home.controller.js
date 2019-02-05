sampleApp.controller('HomeController', function ($scope, $location) {
    $scope.propertyName = 'created_at';
    $scope.reverse = true;

    $scope.sortBy = function (propertyName) {
        $scope.propertyName = propertyName;
        $scope.reverse = $scope.propertyName === propertyName && !$scope.reverse;
    };

    $scope.toViewNews = function (id) {
        $location.path('/ViewNews/' + id);
    };

    $scope.toViewTransaction = function (id) {
        $location.path('/ViewTransaction/' + id);
    }
});
