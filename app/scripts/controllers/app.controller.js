// The main app controller
var AppController = function($scope) {
  $scope.appTitle = 'Todo app';
  $scope.appAuthor = {
    name: 'Eugene Mutai',
    email: 'eugenemutai@gmail.com',
    githubHandler: '@kn9ts',
    twitterHandler: '@kn9ts'
  };

  console.log($scope.appTitle);
};

module.exports = AppController;
