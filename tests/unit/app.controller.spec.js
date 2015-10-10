describe('Todo application tests', function() {

  var controller = null,
    $scope = null;

  beforeEach(function() {
    module('todoapp');
  });

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    controller = $controller('AppController', {
      $scope: $scope
    });
  }));

  it('Application name is right', function() {
    expect($scope.appTitle).toBe('Todo app');
  });

  it('Application author is Eugene Mutai', function() {
    expect($scope.appAuthor.name).toBe('Eugene Mutai');
  });

});
