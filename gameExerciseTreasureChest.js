$(document).ready(function() {
  $("#gameBoard div").on("click", function(event) {
    this.addClass("red");
  });
})
