$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var dateInput= $("input#date").val();
    var natureInput = $("input#nature").val();

    $(".name").append(nameInput);
    $(".nature").append(natureInput);
    $(".date").append(dateInput);

    $("#story").show();

    event.preventDefault();
  });
});
