angular
  .module("authorList")
  .component("authorList", {
    templateUrl: "author-list/author-list.template.html",
  })
  .controller("authorListCtrl", function ($scope, Author) {
    $scope.isNewAuthor = false;
    $scope.isUpdateAuthor = false;
    Author.getAll().then(function (data) {
      $scope.authors = data;
      console.log("all users", $scope.authors);
    });
    $scope.newAuthorSubmit = function newAuthorSubmit(data) {
      Author.post(data).then(function (data) {
        $scope.authors.unshift(data.data);
        $scope.isNewAuthor = false;
      });
    };
    $scope.showFormUpdateClick = function (id) {
      $scope.isUpdateAuthor = !$scope.isUpdateAuthor;
      $scope.authorUpdate = function (data) {
        console.log("author update info", data);
        Author.put(id, data).then(function (data) {
          var index = $scope.author.indexOf(id);
          if (index > -1) {
            $scope.authors[index] = data;
          }
          $scope.isUpdateAuthor = false;
        });
      };
    };
    $scope.closeForm = function () {
      $scope.isUpdateAuthor = false;
      $scope.isNewAuthor = false;
    };
    $scope.authorDelete = function (id) {
      Author.delete(id).then(function () {
        var l = $scope.authors.length;
        console.log("author id deleted:", id);
        for (var i = 0; i < l; i++) {
          if ($scope.authors[i].id === id) {
            $scope.authors.splice(i, 1);
            return;
          }
        }
      });
    };
  });
