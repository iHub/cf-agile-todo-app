// The main app controller
var AppController = function($scope) {
  $scope.appTitle = 'myTodo app';
  $scope.appAuthor = {
    name: 'Eugene Mutai',
    email: 'eugenemutai@gmail.com',
    githubHandler: '@kn9ts',
    twitterHandler: '@kn9ts'
  };
};

module.exports = AppController;
