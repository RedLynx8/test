sampleApp.controller('ViewTransactionEventController', function ($scope, $routeParams, $location, Events) {
    $scope.transaction = {};
    const id = Number($routeParams.id);

    $scope.getTransactionByID = function () {
        $scope.transaction = Events.getEvent(id, 'transaction');
    };

    $scope.deleteItem = function() {
        Events.deleteEvent(id);
        //здесь еще желательно сохранить это все на бэк
        this.goHome();
    };

    $scope.goHome = function() {
        $location.path('/');
    };

    $scope.getTransactionByID();
});
