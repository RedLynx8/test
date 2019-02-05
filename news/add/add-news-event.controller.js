sampleApp.controller('AddNewsEventController', function ($scope, $location, Events) {
    $scope.item = new NewsEvent({
        type: 'news',
        id: Events.events.length + 1,
        viewed: false
    });

    $scope.saveItem = function () {
        Events.events.push($scope.item);
        //здесь еще желательно сохранить это все на бэк
        $location.path('/');
    }
});
