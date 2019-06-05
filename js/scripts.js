var volume = function(number1) {
  return (number1 * 3.78541);
};
var distance = function(number2) {
  return (number2 * 1.60934);
};
var weight = function(number3) {
  return (number3 * 0.453592);
};

$(document).ready(function() {
  $("form#volume").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#volInput").val());;
    var result = volume(number1);
    $(".outputVolume").text(result);
  });
  $("form#distance").submit(function(event) {
    event.preventDefault();
    var number2 = parseInt($("#distanceInput").val());
    var result = distance(number2);
    $(".outputDistance").text(result);
  });
  $("form#weight").submit(function(event) {
    event.preventDefault();
    var number3 = parseInt($("#weightInput").val());
    var result = weight(number3);
    $(".outputWeight").text(result);
  });
});
