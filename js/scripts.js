$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const numberInput = $("input#number").val();

    $(".number").text(numberInput);

    $("#your-result").show();
  });
});