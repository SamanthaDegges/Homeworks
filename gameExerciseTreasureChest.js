$(document).ready(function() {
  $("#gameBoard").find("div").on("click", function() {
    $(this).addClass("red");
  });
})
