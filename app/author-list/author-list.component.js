angular.module("authorList").component("authorList", {
  templateUrl: "author-list/author-list.template.html",
  controller: [
    "Author",
    function authorListController() {
      var self = this;
      self.authors = Author.get();
      console.log("Call author list");
      self.newAuthorSubmit = function newAuthorSubmit() {
        console.log("author-list");
      };
    },
  ],
});
