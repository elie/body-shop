$(document).ready(function() {
  $.getJSON("/drivers").then(function(data) {
    data.forEach(function(doc) {
      let $li = $("<li>", {
        text: `${doc.name} - ${doc.age}`
      });
      $("#driver-list").append($li);
    });
  });
});
