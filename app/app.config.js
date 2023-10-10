angular.module("myApp").config(function ($routeProvider) {
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
});
