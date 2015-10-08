// Adding the modules as arguments that
// have been injected above in the controller
var TodoController = function($scope, listing) {
  $scope.todoList = listing.get();

  $scope.setTask = function(isDone, $index) {
    listing.isDone(isDone, $index);
  };

  // $scope.$on('new_task_has_been_added', function(eventEmmitted, newTask) {
  //   // console.log('A new task was added', new_task);
  //   var task = {
  //     task: newTask,
  //     isDone: false
  //   };
  //   $scope.todoList.push(task);
  // });

  $scope.deleteTask = function($index) {
    console.log('has just been clicked!');
    listing.delete($index);
  };

}

module.exports = TodoController;
