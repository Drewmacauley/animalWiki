
$(document).ready(function() {
  const animal = prompt("Type 'turtle' to learn about turtles. Type 'golden eagle' to learn about golden eagles.  Type 'kangaroo' to learn about kangaroos.");

  if (animal === "turtle") {
    $("#turtle").show();
  } else if (animal === "golden eagle") {
    $("#goldEagle").show();
  } else if (animal === "kangaroo") {
    $("#kangaroo").show();
  }

});