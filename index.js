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
  .controller("myApp", function ($scope, $http) {
    $scope.data = { name: "", salary: "", age: "" };
    $scope.payloadData = angular.copy($scope.data);
    $scope.createSubmit = function (data) {
      console.log("payload data", angular.copy($scope.data));
      $http.post("https://dummy.restapiexample.com/api/v1/create", data).then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log("error", error.message);
        }
      );
    };
    $scope.updateSubmit = function (id) {
      $http
        .put(
          "https://dummy.restapiexample.com/api/v1/update/" + id,
          $scope.payloadData
        )
        .then(
          function (response) {
            console.log(response);
          },
          function (error) {
            console.log("error", error.message);
          }
        );
    };
    $scope.getOneSubmit = function () {
      $http
        .get("https://dummy.restapiexample.com/api/v1/employee/" + 1105)
        .then(
          function (response) {
            console.log(response);
          },
          function (error) {
            console.log("error", error.message);
          }
        );
    };
  })
  .component("employeeForm", {
    templateUrl: "form.html",
    bindings: { title: "@", submit: "=" },
    // controller: function ($scope, $http) {
    //   $scope.data = { name: "", salary: "", age: "" };
    //   $scope.payloadData = angular.copy($scope.data);
    //   $scope.createSubmit = function () {
    //     console.log(123);
    //     $scope.payloadData = $http
    //       .post("https://dummy.restapiexample.com/api/v1/create", $scope.data)
    //       .then(
    //         function (response) {
    //           console.log(response);
    //         },
    //         function (error) {
    //           console.log("error", error.status);
    //         }
    //       );
    //   };
    // },
  });
