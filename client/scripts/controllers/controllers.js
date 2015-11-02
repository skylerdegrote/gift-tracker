//controllers



var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);
app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);

app.controller('RootCtrl', ['$scope', function($scope){
    $scope.title = "Home Page";
}]);

app.controller('CatsCtrl', ['$scope', function($scope){
    $scope.title = "Cats Page";
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : './views/home.html'
        })
        .when('/login', {
            templateUrl : './views/login.html'
        })
        .when('/person', {
            templateUrl : './views/person.html'
        })
        .when('/occasion', {
            templateUrl : './views/occasion.html'
        })
        .when('/newperson', {
            templateUrl : './views/newperson.html'
        })
        .when('/newoccasion', {
            templateUrl : './views/newoccasion.html'
        })
        .when('/newgift', {
            templateUrl : './views/newgift.html'
        })
        .otherwise({
            redirectTo : '/views/home'
        });
}]);