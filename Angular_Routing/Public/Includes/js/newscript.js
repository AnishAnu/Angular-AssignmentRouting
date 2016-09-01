// var app = angular.module("myApp", ['ngRoute']);
// //Rouoting---------------------------------------
// app.config(function($routeProvider) {
//     $routeProvider

//         .when('/table', {
//             templateUrl: "tableview.html"

//         })
//         .when('/editCus', {
//             templateUrl: "add.html",
//             controller: 'controller2'
//         })
//         .when('/LoanPage', {
//             templateUrl: "LoanPage.html"
//         })
//         .when('/addCus', {
//             templateUrl: "add.html",
//             controller: 'controller3'
//         })
//         .when('/', {
//             template: ""
//         })
//         .otherwise({
//             redirectTo: '/'
//         });
// });
//custom directive--------------------------
// app.directive('cusDir', function() {
//     return {
//         restrict: 'AE',
//         templateUrl: 'cusDir.html'
//     }
// });


// app.directive('cusDir1', function() {
//     return {
//         restrict: 'AE',
//         templateUrl: 'cusDir1.html'
//     }
// });

app.controller("controller1", function($scope, myService, objSVC) {
    //search------------------------------------------
    $scope.searchBy = function() {
        getSearch();

        function getSearch() {
            myService.getSearchServ($scope.txtSearch)
                .success(function(response) {
                    $scope.view1 = response;
                    console.log(response);
                })
                .error(function(error) {
                    $scope.view1 = error.statusText;
                });
        };
    };

    //view all----------------------------------------
    $scope.viewAll = function() {
        viewAllDetails();

        function viewAllDetails() {
            myService.viewAllServ()
                .success(function(response) {
                    $scope.view1 = response;
                })
        }
    };
    $scope.editRow = function(id) {
        $scope.pid = id;
        console.log($scope.pid);
        objSVC.set($scope.pid);
    };

    //Delete data-------------------------------------------
    $scope.removeRow = function(id) {
        deletedata(id);

        function deletedata(id) {
            myService.deleteServ(id)
                .success(function(response) {

                    $scope.view1 = response;
                })
                .error(function(error) {
                    $scope.view1 = error.statusText;
                });
        };
    };

    //Hide & show-----------------------------------------------
    $scope.Addnewcus = function() {
        $scope.submithide = false;
        $scope.updateHide = true;
        $scope.newdata = {};
    }
    $scope.editHide = function() {
        $scope.submithide = true;
        $scope.updateHide = false;
    }
});
app.controller("controller2", function($scope, myService, objSVC) {
    //edit row--------------------------------------------------
    $scope.id = objSVC.get();
    editdata($scope.id);

    function editdata(id) {
        myService.editServ(id)
            .success(function(response) {
                $scope.newdata = response;

                console.log($scope.newdata);
            })
            .error(function(error) {
                $scope.newdata = error.statusText;
            });

    };
    //update -- row---------------------------------------------

    $scope.updateRow = function(id, newdata) {
        updatedata(id);

        function updatedata(id, newdata) {
            myService.updateServ(id, $scope.newdata)
                .success(function(response) {
                    alert("update successfully");
                    $scope.view1 = [response];
                    $scope.newdata = {};

                })
                .error(function(error) {
                    $scope.view1 = error.statusText;
                });
        };
    };
});

//add- new data------------------------------------------------
app.controller("controller3", function($scope, myService) {
    $scope.addNewRow = function() {
        addNewdata();

        function addNewdata() {
            myService.addNewServ($scope.newdata)
                .success(function(response) {
                    alert("insert successfully");
                    $scope.view1 = [response];
                })
                .error(function(error) {
                    $scope.view1 = error.statusText;
                });
        };
    };
});
