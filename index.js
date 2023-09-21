
function myFunction() {
  var x = document.getElementById("hammenu");
  var y = document.getElementById("menutext");

    if (x.style.width === "0%") {
      x.style.width = "100%";
      y.style.display="block";

    }
    else {
      x.style.width = "0%";
      y.style.display="none";
    }
 }
function closemenu() {
  document.getElementById("hammenu").style.width = "0%";
  document.getElementById("menutext").style.display="none";

}