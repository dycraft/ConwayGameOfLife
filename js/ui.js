import World from "./world";

(function(){
  /* JS File: concat between logic and ui */

  window.Ui = {};

  var stopBtn = document.getElementById('stop');
  var runBtn = document.getElementById('run');
  var resBtn = document.getElementById('restart');
  var nextBtn = document.getElementById('next');
  var speedRange = document.getElementById('speed');
  var sizeRange = document.getElementById('size');
  var world;

  // UI init, called by html in the beginning.
  Ui.init = function() {
    world = new World();
    runBtn.style.display = 'none';
    stopBtn.style.display = '';
    nextBtn.style.display = 'none';
    resBtn.style.display = '';
  };

  Ui.stop = function() {
    world.stop();
    stopBtn.style.display = 'none';
    runBtn.style.display = '';
    nextBtn.style.display = '';
    resBtn.style.display = 'none';
  };

  Ui.next = function() {
    world.next();
  };

  Ui.run = function() {
    world.run();
    runBtn.style.display = 'none';
    stopBtn.style.display = '';
    nextBtn.style.display = 'none';
    resBtn.style.display = '';
  };

  Ui.restart = function() {
    world.restart();
  };

  Ui.changeSpeed = function() {
    world.setSpeed(speedRange.value);
    world.stop();
    world.run();
  };

  Ui.changeSize = function() {
    world.setSize(sizeRange.value);
    world.updateCanvasWH();
    world.draw();
  };

})();
