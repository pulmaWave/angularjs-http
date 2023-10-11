angular.module("author-detail").component("authorDetail", {
  templateUrl: "author-detail/author-detail.template.html",
  controller: [
    "$routeParams",
    "Author",
    function authorDetailController($routeParams, Author) {
      this.author = Author.get({ id: $routeParams.id });
    },
  ],
});
