angular.module("myApp", []).factory("authors", [
  "resource",
  function ($resource) {
    return $resource("https://dummyjson.com/authors/:id");
  },
]);
