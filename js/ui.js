(function(){
  /* JS File: concat between logic and ui */

  window.Ui = {};

  var stopBtn = document.getElementById('stop');
  var runBtn = document.getElementById('run');
  var resBtn = document.getElementById('restart');
  var nextBtn = document.getElementById('next');
  var speedRange = document.getElementById('speed');
  var sizeRange = document.getElementById('size');

  // UI init, called by html in the beginning.
  Ui.init = function() {
    runBtn.style.display = 'none';
    stopBtn.style.display = '';
    nextBtn.style.display = 'none';
    resBtn.style.display = '';
  };

  Ui.stop = function() {
    Game.stop();
    stopBtn.style.display = 'none';
    runBtn.style.display = '';
    nextBtn.style.display = '';
    resBtn.style.display = 'none';
  };

  Ui.next = function() {
    Game.next();
  };

  Ui.run = function() {
    Game.run();
    runBtn.style.display = 'none';
    stopBtn.style.display = '';
    nextBtn.style.display = 'none';
    resBtn.style.display = '';
  };

  Ui.restart = function() {
    Game.restart();
  };

  Ui.changeSpeed = function() {
    Game.setSpeed(speedRange.value);
    Game.stop();
    Game.run();
  };

  Ui.changeSize = function() {
    Game.setSize(sizeRange.value);
    Game.updateCanvasWH();
    Game.draw();
  };

})();
