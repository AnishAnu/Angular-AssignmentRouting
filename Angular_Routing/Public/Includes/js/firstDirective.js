//custom directive--------------------------
angular.module('myApp').directive('cusDir', cusDirFn);




app.directive('cusDir1', function() {
    return {
        restrict: 'AE',
        templateUrl: 'Includes/html/cusDir1.html'
    }
});

function cusDirFn() {
    return {
        restrict: 'AE',
        templateUrl: 'Includes/html/cusDir.html'
    }
};
