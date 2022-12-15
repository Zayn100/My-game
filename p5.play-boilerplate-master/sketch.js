var canvas
var backgroundImage, aeroplane1_img, aeroplane2_img, track;
var fuelImage, coinImage;
var form, player, playerCount;
var allPlayers, aeroplane1, aeroplane2, fuels, coins;
var aeroplanes = [];
var obstacle1Image, obstacle2Image
var obstacles;
var gameState;

function preload(){
  backgroundImage = loadImage("./assets/background.png");
  aeroplane1_img = loadImage("./assets/aeroplane1.png");
  aeroplane2_img = loadImage("./assets/aeroplane2.png");
  track = loadImage("./assets/track.png");
  fuelImage = loadImage("./assets/fuel.png");
  coinImage = loadImage("./assets/coin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}