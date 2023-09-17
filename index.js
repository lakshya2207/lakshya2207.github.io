
function myFunction() {
    var x = document.getElementById("hammenu");
    if (x.style.display === "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
 }
function closemenu() {
  document.getElementById("hammenu").style.display="none";
}