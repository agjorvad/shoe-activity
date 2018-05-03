console.log( 'js');

var app = angular.module("ShoeApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/shoe', {
        templateUrl: 'views/shoe.html',
        controller:  'ShoeController as vm'
    })
        .otherwise({
            template: '<h2>404</h2>'
        });
    });

// app.controller("ShoeController", ["$http", function($http) {
//     console.log("ShoeController has been loaded");
//     var self= this;
//     self.shoeList = [];
//     self.newShoe = {name: '', cost: ''};

// self.getShoes = function () {
//     $http({
//         method: "GET",
//         url: "/shoe"
//     })
//     .then(function(response) {
//         self.shoeList = response.data;
//         console.log(self.shoeList);
//     })
//     .catch(function(error){
//         console.log("error on /shoe get", error)
//     })
// }
// self.getShoes();
// }]);