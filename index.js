angular
  .module("myApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "home.html",
      })
      .when("/create", {
        templateUrl: "create.html",
        // controller: "createCtrl",
      })
      .when("/update", {
        templateUrl: "update.html",
        // controller: "updateCtrl",
      })
      .when("/delete", {
        templateUrl: "delete.html",
        // controller: "deleteCtrl",
      })
      .when("/get-one", {
        templateUrl: "getOne.html",
        // controller: "getOneCtrl",
      })
      .when("/get-all", {
        templateUrl: "getAll.html",
        // controller: "getAllCtrl",
      })
      .otherwise({
        templateUrl: "pageNotFound.html",
      });
  })
  .service("http", function ($http) {
    this.post = function (url, data) {
      $http({ method: "POST", url: url, data: data }).then(
        function (response) {
          return response;
        },
        function (error) {
          return error;
        }
      );
    };
  })
  .controller("myApp", function ($scope, $http) {
    $scope.createSubmit = function (data) {
      console.log("payload data", data);
      $scope.response = angular.copy(data);
      $http({
        method: "POST",
        url: "https://dummyjson.com/users/add",
        data: data,
      }).then(function (res) {
        $scope.response = angular.copy(res);
        console.log("response", ($scope.response = angular.copy(res)));
      });
    };
    $scope.updateSubmit = function (data) {
      console.log("payload data", data);
      $http({
        method: "PUT",
        url: "https://dummyjson.com/users/1",
        data: data,
      }).then(function (res) {
        $scope.response = angular.copy(res);
        console.log("response", ($scope.response = angular.copy(res)));
      });
    };
    $scope.getOneSubmit = function () {
      console.log("get one user", users);
      // var user = users.get({ id: $scope.id }, function () {
      //   $scope.user = user;
      // });
    };
  })
  .component("employeeForm", {
    templateUrl: "form.html",
    bindings: { title: "@", submit: "=" },
  });
