var sampleApp = angular.module('sampleApp', ['ngSanitize', 'ngRoute']);

sampleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.template.html',
            controller: 'HomeController'
        })
        .when('/AddNews', {
            templateUrl: 'news/add/add-news-event.template.html',
            controller: 'AddNewsEventController'
        })
        .when('/ViewNews/:id', {
            templateUrl: 'news/view/view-news-event.template.html',
            controller: 'ViewNewsEventController'
        })
        .when('/AddTransaction', {
            templateUrl: 'transactions/add/add-transaction-event.template.html',
            controller: 'AddTransactionEventController'
        })
        .when('/ViewTransaction/:id', {
            templateUrl: 'transactions/view/view-transaction-event.template.html',
            controller: 'ViewTransactionEventController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
