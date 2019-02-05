sampleApp.controller('ViewNewsEventController', function ($scope, $routeParams, $location, Events) {
    $scope.viewNews = {};
    const id = Number($routeParams.id);

    $scope.getNewsByID = function () {
        $scope.viewNews = Events.getEvent(id, 'news');
    };

    $scope.setViewed = function() {
        Events.getEvent(id).viewed = true;
        //здесь еще желательно сохранить это все на бэк
        this.goHome();
    };

    $scope.goHome = function() {
        $location.path('/');
    };

    $scope.getNewsByID();
});
