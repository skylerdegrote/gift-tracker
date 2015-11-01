/**
 * Created by Skyler DeGrote on 10/26/15.
 */
    // Include app dependency on ngMaterial

//angular.module( 'YourApp', [ 'ngMaterial' ] )
//    .controller("YourController", YourController );





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
            templateUrl : './home.html'
        })
        .when('/login', {
            templateUrl : './login.html'
        })
        .when('/person', {
            templateUrl : './person.html'
        })
        .when('/occasion', {
            templateUrl : './occasion.html'
        })
        .when('/newperson', {
            templateUrl : './newperson.html'
        })
        .when('/newoccasion', {
            templateUrl : './newoccasion.html'
        })
        .when('/newgift', {
            templateUrl : './newgift.html'
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);