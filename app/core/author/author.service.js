var url = "https://fakerestapi.azurewebsites.net/api/v1/Authors/";
angular.module("core.author").service("Author", function ($http) {
  return {
    getAll: function () {
      return $http({
        method: "GET",
        url: url,
      }).then(
        function (response) {
          return response.data;
        },
        function (error) {
          return error;
        }
      );
    },
    get: function (id) {
      return $http({
        method: "GET",
        url: url + id,
      }).then(
        function (response) {
          return response.data;
        },
        function (error) {
          return error;
        }
      );
    },
    post: function (data) {
      return $http({
        method: "POST",
        url,
        data,
      });
    },
    put: function (id, data) {
      return $http({
        method: "PUT",
        url: url + id,
        data,
      });
    },
    delete: function (id) {
      return $http({
        method: "DELETE",
        url: url + id,
      });
    },
  };
});
