angular.module("myApp", []).controller("myApp", function ($scope, users) {
  $scope.getOneSubmit = function () {
    console.log("user");
    var user = users.get({ id: $scope.id }, function () {
      $scope.user = user;
    });
  };
});
