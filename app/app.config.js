angular.module("myApp").config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/authors", {
      templateUrl: "/app/author-list/author-list.template.html",
    })
    .when("/authors/:id", {
      templateUrl: "/app/author-detail/author-detail.template.html",
    })
    .otherwise({
      templateUrl: "pageNotFound.html",
    });
});
