var canvas,database,contestantCount,quiz,question,contestant,myQuiz;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  myQuiz = new Quiz();
  myQuiz.getState();
  myQuiz.start();
}

function draw(){
  background("grey");
}