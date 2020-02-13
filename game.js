var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var gap = 120;
var constant;
var X = 40;
var Y = 100;
var gravity = 2;
var score = 0;
var highScore = localStorage.getItem('highScore');
var bird = new Image();
var background = new Image();
var floor = new Image();
var upperPipe = new Image();
var lowerPipe = new Image();

bird.src = "images/bird.png";
background.src = "images/background.png";
floor.src = "images/floor.png";
upperPipe.src = "images/upperPipe.png";
lowerPipe.src = "images/lowerPipe.png";

document.addEventListener("keydown", up);

function up() {
  Y -= 40;
}

var pipe = [];
pipe[0] = {
  x: canvas.width,
  y: 0
};

function draw() {
  context.drawImage(background, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    constant = upperPipe.height + gap;
    context.drawImage(upperPipe, pipe[i].x, pipe[i].y);
    context.drawImage(lowerPipe, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;
    if (pipe[i].x == 100) {
      pipe.push({
        x: canvas.width,
        y: Math.floor(Math.random() * upperPipe.height) - upperPipe.height
      });
    }

    if ((Y + bird.height >= (canvas.height - floor.height)) ||
      (X + bird.width >= pipe[i].x && X <= pipe[i].x + upperPipe.width &&
        (Y <= pipe[i].y + upperPipe.height || Y + bird.height >= pipe[i].y + constant))
    ) {
      if (score > highScore) {
        localStorage.setItem('highScore', score);
      }
      window.location.href = "gameover.html";
      // alert("Game Over!");
      // location.reload();
    }

    if (pipe[i].x == 5) {
      score++;
    }


  }
  context.drawImage(floor, 0, canvas.height - floor.height);
  context.drawImage(bird, X, Y);

  Y += gravity;

  context.fillStyle = "#000";
  context.font = "20px serif";
  context.fillText("Score : " + score, 100, canvas.height - 30);
  context.fillText("HighScore : " + highScore, 100, canvas.height - 10);


  window.requestAnimationFrame(draw);

}

draw();
