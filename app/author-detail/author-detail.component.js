angular
  .module("authorDetail")
  .component("authorDetail", {
    templateUrl: "author-detail/author-detail.template.html",
  })
  .controller("authorDetailCtrl", function ($scope, Author, $routeParams) {
    Author.get($routeParams.id).then(function (data) {
      $scope.author = data;
    });
  });
