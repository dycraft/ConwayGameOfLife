class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alive = true;
    }

    reset() {
        this.alive = !!Math.floor(Math.random() * 2)
    }

    countSiblings(cells, w, h) {
        let count = 0
        for (let i = this.x - 1; i <= this.x  + 1; i++) {
            for (let j = this.y - 1; j <= this.y + 1; j++) {
                if (this.x !== i || this.y !== j) {
                    var mtmp = this.x, ntmp = this.y; //tmp vals to balance boundless.
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
                    count += +cells[mtmp][ntmp].alive;
                }
            }
        }
        return count
    } 
}

export default Cell;
