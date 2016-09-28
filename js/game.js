(function(){
  /* JS File: Main logic and rendering of Conway Life Game */

  window.Game = {};

  // The entrance of the game, called by html in the beginning.
  Game.init = function() {

    Game.PIX = 6;
    Game.FPS = 10;

    var canvas = Game.canvas = document.getElementById('canvas');
    var ctx = Game.ctx = canvas.getContext('2d');

    // Matrix
    var minPix = 3;
    Game.width = canvas.width / Game.PIX;
    Game.height = canvas.height / Game.PIX;
    var width = canvas.width / minPix;
    var height = canvas.height / minPix;

    Game.statMat = new Array(width);
    Game.numMat = new Array(width);
    var i, j;
    for (i = 0; i < width; i++) {
      Game.statMat[i] = new Array(height);
      Game.numMat[i] = new Array(height);
      for (j = 0; j < height; j++) {
        Game.statMat[i][j] = Math.floor(Math.random() * 2);
        Game.numMat[i][j] = 0;
      }
    }

    // Timer
    Game.timer = null;
    Game.run();

    // Click Event
    canvas.addEventListener('click', function(e){
      var x = Math.floor(e.layerX / Game.PIX);
      var y = Math.floor(e.layerY / Game.PIX);
      Game.statMat[x][y] = 1 - Game.statMat[x][y];
      Game.draw();
    }, false);

  };

  // logic in loop
  Game.logic = function() {

    Util.getAroundNum(Game.numMat, Game.statMat, Game.width, Game.height);

    var i, j;
    for (i = 0; i < Game.width; i++) {
      for (j = 0; j < Game.height; j++) {
        //This is the main rule.
        // ======
        if (Game.numMat[i][j] == 3) {
          Game.statMat[i][j] = 1;
        } else if (Game.numMat[i][j] != 2) {
          Game.statMat[i][j] = 0;
        }
        // ======
      }
    }

  };

  // canvas's rendering in loop
  Game.draw = function() {

    // alias
    var ctx = Game.ctx;
    var w = Game.width, h = Game.height;
    var p = Game.PIX;

    ctx.fillStyle = '#DDD';
    ctx.fillRect(0, 0, w * p, h * p); //draw background...maybe bound ?

    var i, j;
    for (i = 0; i < w; i++) {
      for (j = 0; j < h; j++) {
        if (Game.statMat[i][j]) {
          ctx.fillStyle = "#000";
        } else {
          ctx.fillStyle = "white";
        }
        var b = 1;
        ctx.fillRect(b + i * p, b + j * p, p - b * 2, p - b * 2); //draw cell
      }
    }

  };

  Game.tick = function() {
    Game.logic();
    Game.draw();
  };

  /*
  * api invoked in ui
  */

  // Public: stop
  Game.stop = function() {
    clearInterval(Game.timer);
  };

  // Public: run and start loop in timer
  Game.run = function() {
    Game.timer = setInterval(Game.tick, 1000 / Game.FPS);
  };

  Game.next = function() {
    Game.tick();
  };

  // Public: restart and init matrix
  Game.restart = function() {
    var i, j;
    for (i = 0; i < Game.width; i++) {
      for (j = 0; j < Game.height; j++) {
        Game.statMat[i][j] = Math.floor(Math.random() * 2);
        Game.numMat[i][j] = 0;
      }
    }
  };

  Game.speedLv = [0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];
  Game.setSpeed = function(s) {
    Game.FPS = Game.speedLv[s];

    return Game.FPS;
  };

  Game.sizeLv = [3, 4, 6, 10, 15, 25, 50];
  Game.setSize = function(s) {
    if (Game.sizeLv[s] != Game.PIX) { //add If to decrease cost
      Game.PIX = Game.sizeLv[s];
    }
    return Game.PIX;
  };

  Game.updateCanvasWH = function() {
    Game.width = canvas.width / Game.PIX;
    Game.height = canvas.height / Game.PIX;

    return {
      w: Game.width,
      h: Game.height
    };
  };

})();
