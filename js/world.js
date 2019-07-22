import Board from "./board";

/**
 * World controls the rendering logic
 */
class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = new Board(width, height);

        _initConfig();

        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');

        this.timer = null;
        this.run();
    }

    _initConfig() {
        this.PIX = 6;
        this.FPS = 10;
        this.cellMargin = 1;
        this.speedLv = [0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];
        this.sizeLv = [3, 4, 6, 10, 15, 25, 50];
    }

    draw() {
        let w = this.width, h = this.height;
        let p = this.PIX;

        //draw background
        ctx.fillStyle = '#DDD';
        ctx.fillRect(0, 0, w * p, h * p);

        const b = this.cellMargin;
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                if (this.cells[i][j].alive) {
                    ctx.fillStyle = "#000";
                } else {
                    ctx.fillStyle = "white";
                }
                ctx.fillRect(b + i * p, b + j * p, p - b * 2, p - b * 2); //draw cell
            }
        }
    }

    tick() {
        this.logic();
        this.draw();
    }


    stop() {
        clearInterval(this.timer);
    }

    // Public: run and start loop in timer
    run() {
        this.timer = setInterval(this.tick, 1000 / this.FPS);
    }

    next() {
        this.tick();
    }

    // Public: restart and init matrix
    restart() {
        this.board.reset()
    }

    setSpeed(s) {
        this.FPS = this.speedLv[s];
        return this.FPS;
    }

    setSize(s) {
        if (this.sizeLv[s] != this.PIX) { //add If to decrease cost
            this.PIX = this.sizeLv[s];
        }
        return this.PIX;
    }

    updateCanvasWH() {
        this.width = this.canvas.width / this.PIX;
        this.height = this.canvas.height / this.PIX;
        return { w: this.width, h: this.height };
    };
}
