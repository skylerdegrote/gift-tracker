//controllers

var app = angular.module('myApp', ['ngRoute', 'ngMaterial','ngAria']);


app.controller('HomeController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : './views/home.html',
            controller: 'homeController'
        })
        .when('/login', {
            templateUrl : './views/login.html',
            controller: 'LoginController'
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
        .when('/register', {
            templateUrl : './views/register.html'
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);


app.controller('LoginController', ['$scope', '$mdToast', '$animate',
    function($scope, $mdToast, $animate) {

        //3. we decide where the toast will display on the view
        $scope.toastPosition = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        //2. the method looks for the position that we want to display the toast
        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        //1. The send button will call this method
        this.addUser = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Thanks for your Message ' + this.firstName + ' You Rock!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };
    }



]); //end login controller


//controller here
app.controller("userController", ["$scope", '$http', function($scope, $http) {
    $scope.getName = function(){
        console.log('here');
            $http({
                method: 'POST',
                url: '/',
                data: $scope.username
            }).then(function(response) {
                console.log(response);
                if(response.status !==200){
                    throw new Error("call failed")
                }
                $scope.username = response.data.username;
                $scope.firstname = response.data.firstName;
                $scope.lastname = response.data.lastName;
                console.log(response);
            })
    };
    $scope.getName();
}]);