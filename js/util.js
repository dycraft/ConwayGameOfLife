(function() {
  window.Util = {};

  // fill NumMatrix with calculated Around Exist Amount.
  Util.getAroundNum = function(numMat, statMat, w, h) {

    // alias
    var i, j;

    // calc in matrix's loop
    for (i = 0; i < w; i++) {
      for (j = 0; j < h; j++) {
        numMat[i][j] = 0;
        var m, n; //iters of (i, j)'s around
        for (m = i - 1; m <= i + 1; m++) {
          for (n = j - 1; n <= j + 1; n++) {
            if (m !== i || n !== j) {
              var mtmp = m, ntmp = n; //tmp vals to balance boundless.
              if (mtmp < 0) {
                mtmp += w;
              } else if (mtmp >= w) {
                mtmp -= w;
              }
              if (ntmp < 0) {
                ntmp += h;
              } else if (ntmp >= h) {
                ntmp -= h;
              }
              numMat[i][j] += statMat[mtmp][ntmp];
            }
          }
        }
      }
    }

    return numMat;

  };
})();
