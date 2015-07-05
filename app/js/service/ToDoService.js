/**
 * Created by Debashis.Mishra on 7/4/2015.
 */
angular.module(['toDoApp'])
    .factory('ToDoService',['$http',function($http){
        return{
            getToDoList: function(){
                return $http({
                    method: 'GET',
                    url: '/app/data/json/todoList.json'
                })
            }
        }
    }])