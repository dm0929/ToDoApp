/**
 * Created by Debashis.Mishra on 7/4/2015.
 */

angular.module('toDoApp',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when('/todo',{
            templateUrl:'/app/partials/todo.html'
        }).otherwise({
            redirectTo:'/todo'
        })
    }]);
