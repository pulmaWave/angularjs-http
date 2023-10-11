angular.module("authorForm", []).component("authorForm", {
  templateUrl: "author-form/author-form.template.html",
  bindings: { title: "@", submit: "=" },
  controller: [
    "Author",
    function authorFormController(Author) {
      console.log("Load after called component");
      var self = this;
      self.newAuthor = function newAuthor() {
        Author.get().then(function (data) {
          console.log("authors:", data.data);
        });
      };
    },
  ],
});
