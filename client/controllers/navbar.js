angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $location) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.isActive = function (viewLocation) {
        //console.log("viewLocation: " + viewLocation + " $location.path: " + $location.path())
        return viewLocation === $location.path();

    };
  });
