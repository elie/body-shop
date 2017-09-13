$(document).ready(function() {
  $.getJSON("/drivers").then(function(data) {
    data.forEach(function(doc) {
      let $li = $("<li>", {
        text: `${doc.name} - ${doc.age}`
      });
      $("#driver-list").append($li);
    });
  });

  $("form").on("submit", function(event) {
    event.preventDefault(); // NO PAGE REFRESH!!!
    let $nameVal = $("#name").val();
    let $ageVal = $("#age").val();
    $.ajax({
      method: "POST",
      url: "/drivers",
      data: {
        name: $nameVal,
        age: $ageVal
      }
    }).then(function(response) {
      let $li = $("<li>", {
        text: `${response.name} - ${response.age}`
      });
      $("#driver-list").append($li);
      $("form").trigger("reset");
    });
  });
});
