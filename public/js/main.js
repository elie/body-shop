$(document).ready(function() {
  $.getJSON("/drivers").then(function(data) {
    data.forEach(function(doc) {
      let $a = $("<a>", {
        href: "javascript:void(0)",
        text: " X",
        id: doc._id
      });

      let $li = $("<li>", {
        text: `${doc.name} - ${doc.age} `
      });

      $li.append($a);

      $("#driver-list").append($li);
    });
  });

  $("#driver-list").on("click", "a", function(event) {
    event.preventDefault();
    let correctId = $(event.target).attr("id");
    // let correctId = $(this).attr("id");
    $.ajax({
      method: "DELETE",
      url: `/drivers/${correctId}`
    }).then(function(response) {
      $(event.target)
        .parent()
        .remove();
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
      let $a = $("<a>", {
        href: "javascript:void(0)",
        text: " X",
        id: response._id
      });

      let $li = $("<li>", {
        text: `${response.name} - ${response.age} `
      });

      $li.append($a);
      $("#driver-list").append($li);
      $("form").trigger("reset");
    });
  });
});
