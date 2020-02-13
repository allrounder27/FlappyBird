// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       window.location.href = "index.html";
//     }
//   };
//   xhttp.open("GET", "index.html", true);
//   xhttp.send();
// }

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Game Over', 30, 80);
}
draw();
