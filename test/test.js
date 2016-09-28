describe('Game.logic', function() {
  it('should be a function', function() {
    assert.isFunction(Game.logic);
  });
});

describe('Game.draw', function() {
  it('should be a function', function() {
    assert.isFunction(Game.draw);
  });
});

describe('Game.tick', function() {
  it('should be a function', function() {
    assert.isFunction(Game.tick);
  });
});

describe('Game.init', function() {
  it('should be a function', function() {
    assert.isFunction(Game.init);
  });
});

describe('Game.setSpeed', function() {
  it('should be a function', function() {
    assert.isFunction(Game.init);
  });
  it('should have one argument', function() {
    assert.equal(Game.setSpeed.length, 1);
  });
  it('should return as Game.speedLv', function() {
    var i;
    for (i = 0; i <= 8; i++) {
      assert.equal(Game.setSpeed(i), Game.speedLv[i]);
    }
  });
});

describe('Game.setSize', function() {
  it('should be a function', function() {
    assert.isFunction(Game.init);
  });
  it('should have one argument', function() {
    assert.equal(Game.setSize.length, 1);
  });
  it('should return as Game.sizeLv', function() {
    var i;
    for (i = 0; i <= 6; i++) {
      assert.equal(Game.setSize(i), Game.sizeLv[i]);
    }
  });
});

describe('Game.stop', function() {
  it('should be a function', function() {
    assert.isFunction(Game.stop);
  });
});

describe('Game.run', function() {
  it('should be a function', function() {
    assert.isFunction(Game.run);
  });
});

describe('Game.next', function() {
  it('should be a function', function() {
    assert.isFunction(Game.next);
  });
});

describe('Game.restart', function() {
  it('should be a function', function() {
    assert.isFunction(Game.restart);
  });
});

describe('Util.getAroundNum', function() {
  it('should be a function', function() {
    assert.isFunction(Util.getAroundNum);
  });
  it('should have 4 arguments', function() {
    assert.equal(Util.getAroundNum.length, 4);
  });
  it('1. should return an optimal Matrix', function() {
    var a = [[0, 0, 0, 0],
             [0, 1, 1, 0],
             [0, 1, 1, 0],
             [0, 0, 0, 0]];
    var b = [[1, 2, 2, 1],
             [2, 3, 3, 2],
             [2, 3, 3, 2],
             [1, 2, 2, 1]];
    var c = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]];
    assert.deepEqual(Util.getAroundNum(c, a, 4, 4), b);
  });
  it('2. should return an optimal Matrix', function() {
    var a = [[1, 0, 0, 0],
             [0, 0, 0, 0],
             [1, 0, 0, 1],
             [0, 0, 0, 1]];
    var b = [[1, 1, 1, 2],
             [3, 2, 1, 3],
             [2, 1, 2, 2],
             [4, 2, 2, 3]];
    var c = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]];
    assert.deepEqual(Util.getAroundNum(c, a, 4, 4), b);
  });
  it('3. should return an optimal Matrix', function() {
    var a = [[1, 1, 1, 1],
             [1, 0, 0, 1],
             [1, 0, 0, 1],
             [1, 1, 1, 1]];
    var b = [[7, 6, 6, 7],
             [6, 5, 5, 6],
             [6, 5, 5, 6],
             [7, 6, 6, 7]];
    var c = [[0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]];
    assert.deepEqual(Util.getAroundNum(c, a, 4, 4), b);
  });
  it('4. should return a single unit contains 8', function() {
    var a = [[1]];
    var b = [[8]];
    var c = [[0]];
    assert.deepEqual(Util.getAroundNum(c, a, 1, 1), b);
  });
});
