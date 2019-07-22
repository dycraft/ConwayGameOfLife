import Cell from "./cell";

class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this._init();
    }

    _init() {
        this.cells = new Array(this.width)
        for (let i = 0; i < this.width; i++) {
            let col = new Array(this.height)
            for (let j = 0; j < this.height; j++) {
                col[j] = new Cell(i, j)
            }
            this.cells[i] = col
        }
    }

    step() {
        let w = this.width, h = this.height;
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                if (this.cells[i][j].countSiblings(this.cells, w, h) == 3) {
                    this.cells[i][j].alive = true;
                } else if (this.cells[i][j].countSiblings(this.cells, w, h) != 2) {
                    this.cells[i][j].alive = false;
                }
            }
        }
    }

    reset() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.cells[i][j].reset();
            }
        }
    }
}

export default Board;
