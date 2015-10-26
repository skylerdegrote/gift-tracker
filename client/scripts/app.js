/**
 * Created by Skyler DeGrote on 10/26/15.
 */
    // Include app dependency on ngMaterial

//angular.module( 'YourApp', [ 'ngMaterial' ] )
//    .controller("YourController", YourController );



var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);