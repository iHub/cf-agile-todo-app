// The main app controller
var AppController = function($scope, $rootScope, listing) {
  $scope.newTask = undefined;
  $scope.appTitle = 'Todo app';

  $scope.addTask = function(form) {
    console.log('THE FORM', $scope.newTask);

    // Tell the other controllers a new task has been done
    // $rootScope.$broadcast('new_task_has_been_added', $scope.new_task);
    listing.add($scope.newTask);
    $scope.newTask = undefined;
  };
};

module.exports = AppController;
