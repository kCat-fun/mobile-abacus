import p5 from "p5";
import { Beads } from "./beads";
import { Vector2D } from "./vector2d";

const sketch = (p: p5) => {
    let app: App;

    p.setup = () => {
        p.createCanvas(innerWidth, innerHeight);
        app = new App(p);
    };

    p.draw = () => {
        p.background("#FFEBCD");
        app.draw();
    };
};

class App {
    p: p5;
    bead: Beads;
    pos: Vector2D;
    width: number;
    height: number;
    colmun: number;
    beadsHeight: number;

    constructor(p: p5) {
        this.p = p;
        this.width = p.width * 0.8;
        this.height = p.height * 0.8;
        this.colmun = 8 + 1;
        this.beadsHeight = this.height / 7.5;
        this.pos = new Vector2D(p.width / 2.0, p.height / 2.0);
        this.bead = new Beads(
            p, new Vector2D(p.width / 2, p.height / 2), this.beadsHeight / 2.0,
            this.pos.y - this.height / 2.0, this.pos.y + this.height / 2.0
        );
    }

    draw() {
        this.bead.update();
        this.bead.draw();
        this.p.strokeWeight(5);
        this.p.noFill();

        this.p.stroke("#404040");
        for (let i = 0; i < this.colmun; i++) {
            this.p.line(
                this.p.width / 2 - this.width / 2 + this.width / this.colmun * i, this.p.height / 2 - this.height / 2,
                this.p.width / 2 - this.width / 2 + this.width / this.colmun * i, this.p.height / 2 + this.height / 2
            );
        }

        this.p.stroke("#707070");
        // for (let i = 1; i < 7; i++) {
        //     this.p.line(
        //         this.p.width / 2 - this.width / 2, this.p.height / 2 - this.height / 2.0 + this.height * (1 / 7) * i,
        //         this.p.width / 2 + this.width / 2, this.p.height / 2 - this.height / 2.0 + this.height * (1 / 7) * i
        //     );
        // }
        this.p.line(
            this.p.width / 2 - this.width / 2, this.p.height / 2 - this.height / 2.0 + this.height * (1 / 7) * 2,
            this.p.width / 2 + this.width / 2, this.p.height / 2 - this.height / 2.0 + this.height * (1 / 7) * 2
        );
        this.p.stroke("#000000");
        this.p.rect(
            this.p.width / 2 - this.width / 2, this.p.height / 2 - this.height / 2,
            this.width, this.height
        );
    }
}

new p5(sketch);