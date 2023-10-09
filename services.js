angular.module("myApp", []).factory("users", [
  "resource",
  function ($resource) {
    return $resource("https://dummyjson.com/users/:id");
  },
]);
