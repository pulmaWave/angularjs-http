angular.module("core.author").service("Author", function ($http) {
  return {
    get: function () {
      return $http({
        method: "GET",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Authors",
      });
    },
    post: function (data) {
      return $http({
        method: "POST",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Authors",
        data: data,
      });
    },
    put: function (id, data) {
      return $http({
        method: "PUT",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Authors/" + id,
        data: data,
      });
    },
    delete: function (id) {
      return $http({
        method: "DELETE",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Authors/" + id,
      });
    },
  };
});
