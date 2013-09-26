function todoCtrl($scope){

  console.log($scope);

  $scope.todos = [
    {text: 'learn angular', done: true},
    {text: 'build an angular app', done: false}
  ]

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.todoText, done: false});
    $scope.todoText = '';
  };

  $scope.remaining = function(){
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count += todo.done ? 0 : 1
    });
    return count;
  };

  $scope.archive = function(){
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo){
      if(!todo.done) $scope.todos.push(todo);
    });
  };

  $scope.getFruit = function(){
    var fruit_of_the_day = "apple";
    return fruit_of_the_day;
  };


}

function monsters($scope){

    $scope.getFruit = function(){
      return "Monster Oranges";
    };

}
