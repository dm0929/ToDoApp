angular.module('toDoApp')
    .controller('ToDoController',['$scope','ToDoService',function($scope, ToDoService){
        $scope.todoList = [];
        $scope.toDo = {
            name:'',
            description: ''
        }
        $scope.editMode = false;
        $scope.errorMessage = 'Name Required';
        var indexToEdit;
        ToDoService.getToDoList().then(function(toDoList){
            $scope.todoList = toDoList.data.toDoList;
        })
        $scope.editToDoList = function(index){
            $scope.editMode = true,
                indexToEdit = index;;
            $scope.toDo = angular.copy($scope.todoList[index]);
        }
        $scope.addToDoList = function(){
            if($scope.toDo.name){
                if($scope.editMode){
                    $scope.todoList[indexToEdit] = angular.copy($scope.toDo);
                    $scope.editMode = false
                    resetForm.apply($scope);
                }else {
                    $scope.toDo.id = new Date().getMilliseconds();
                    $scope.todoList.push(angular.copy($scope.toDo));
                    resetForm.apply($scope);
                }
            }else{
                $scope.isError = true;

            }
        };
        $scope.removeToDoList = function(index){
            $scope.todoList.pop(index);

        };
        function resetForm(){
            this.toDo.name = '';
            this.toDo.description = '';
            this.isError = false;
        }
    }])
