  module.exports = {
    one: function TestOneController($scope) {
      $scope.greeting = "Hello, World!";
      $scope.newText = undefined;

      $scope.changeGreeting = function() {
        $scope.greeting = $scope.newText;
      };
    },
    two: function TestTwoController($scope) {
      $scope.total = 6;
      $scope.newItem = undefined;
      $scope.items = [1, 2, 3];

      $scope.add = function() {
        $scope.items.push($scope.newItem);
        $scope.total = 0;
        for (var i = 0; i < $scope.items.length; i++) {
          $scope.total += parseInt($scope.items[i]);
        }
      };
    }
  };
