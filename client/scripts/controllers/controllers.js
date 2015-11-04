//controllers

var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);


app.controller('HomeController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    console.log("Home Controller Hit");
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl : './views/home.html'
            //controller: 'HomeController'
        })
        .when('/login', {
            templateUrl : './views/login.html'
            //controller: 'LoginController'
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
            //controller: 'UserController'
        })
        .otherwise({
            redirectTo : '/home'
        });
}]);


app.controller('LoginController', ['$scope', '$mdToast', '$animate',
    function($scope, $mdToast, $animate) {
    console.log("Login Controller Hit");
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
                    .content('Thanks for your Message ' + this.firstname + ' You Rock!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };
    }



]); //end login controller


//controller here
app.controller("UserController", ["$scope", '$http', '$route', function($scope, $http, $route) {
    console.log("User Controller Hit");
    $scope.getName = function(user){
        console.log('here');
        return $http.get('/register', user)
            .then(function(response){
                if(response.status !==200){
                    throw new Error("call failed")
                }
                console.log("inside get success!");
                $scope.username = response.data.username;
                $scope.firstname = response.data.firstname;
                $scope.lastname = response.data.lastname;
                //console.log(response);
            })
    };
    $scope.getName();

    $scope.sendUser = function(){
        return $http.post('/registeruser', {
            username: $scope.username,
            password: $scope.password,
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email
        })
            .success(function(response) {
                $scope.username = "";
                $scope.password = "";
                $scope.firstname = "";
                $scope.lastname = "";
                $scope.email = "";

            })
    };
    //$scope.sendUser = function(){
    //    return $http.post('/register/postuser', {
    //        username: $scope.adminTeachers.username,
    //        password: $scope.adminTeachers.password,
    //        firstname: $scope.adminTeachers.firstname,
    //        lastname: $scope.adminTeachers.lastname,
    //        email: $scope.adminTeachers.email
    //    })
    //        .success(function(response) {
    //            $scope.adminTeachers.firstname = "";
    //            $scope.adminTeachers.lastname = "";
    //            $scope.adminTeachers.email = "";
    //            $scope.adminTeachers.username = "";
    //            $scope.adminTeachers.password = "";
    //
    //        });
    //
    //};
}]);