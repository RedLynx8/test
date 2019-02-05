sampleApp.controller('AddTransactionEventController', function ($scope, $location, Events) {
    $scope.item = new TransactionEvent({
        type: 'transaction',
        id: Events.events.length + 1,
        sign: '+'
    });

    $scope.signs = {
        0: {
            name: '+'
        },
        1: {
            name: '-'
        }
    };

    $scope.saveItem = function () {
        Events.events.push($scope.item);
        //здесь еще желательно сохранить это все на бэк
        $location.path('/');
    }
});
