var count = 2;
$("#btn1").click(function () {
  calculation("+");
});
$("#btn2").click(function () {
  calculation("-");
});
$("#btn3").click(function () {
  calculation("*");
});
$("#btn4").click(function () {
  calculation("/");
});

var addFirstLine = (function () {
  if (localStorage.getItem("trString")) {
    console.log("bella");
    $("#table").append(localStorage.getItem("trString"));
  }
})();

function calculation(sign) {
  console.log("trString", localStorage.getItem("trString"));
  if ($("#N1").val() && $("#N2").val()) {
    count++;
    var n1 = +$("#N1").val();
    var n2 = +$("#N2").val();
    var res = n1 + n2;
    switch (sign) {
      case "+":
        var res = n1 + n2;
        // n1 -(-n2) ;
        break;
      case "-":
        var res = n1 - n2;
        break;
      case "*":
        var res = n1 * n2;
        break;
      case "/":
        var res = n1 / n2;
        break;
    }
    console.log(res);
    //$("#table").append(
    var trString =
      "<tr><td>" +
      count +
      "</td><td>" +
      n1 +
      "</td><td>" +
      sign +
      "</td><td>" +
      n2 +
      "</td><td>" +
      res +
      "</td></tr>";
    localStorage.setItem("trString", trString);
    $("#table").append(trString);
  } else alert("fill all the text field");
}
