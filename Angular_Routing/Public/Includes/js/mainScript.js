var app = angular.module("myApp", ['ngRoute']);
//Rouoting---------------------------------------
app.config(function($routeProvider) {
    $routeProvider

        .when('/table', {
            templateUrl: "Includes/html/tableview.html"

        })
        .when('/editCus', {
            templateUrl: "Includes/html/add.html",
            controller: 'controller2'
        })
        .when('/LoanPage', {
            templateUrl: "Includes/html/LoanPage.html"
        })
        .when('/addCus', {
            templateUrl: "Includes/html/add.html",
            controller: 'controller3'
        })
        .when('/', {
            template: ""
        })
        .otherwise({
            redirectTo: '/'
        });
});
