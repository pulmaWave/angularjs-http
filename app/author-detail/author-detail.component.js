angular
  .module("authorDetail")
  .component("authorDetail", {
    templateUrl: "author-detail/author-detail.template.html",
  })
  .controller(
    "authorDetailCtrl",
    function ($scope, Author, $routeParams, $location) {
      Author.get($routeParams.id).then(function (data) {
        $scope.author = data;
      });
      $scope.authorDelete = function (id) {
        Author.delete(id).then(function () {
          $location.path("/authors");
        });
      };
    }
  );
