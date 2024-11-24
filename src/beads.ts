import { Vector2D } from "./vector2d";
import p5 from "p5";

class Beads {
    pos: Vector2D;
    p5: p5;
    radius: number;
    limitUp: number;
    limitDown: number;

    constructor(p5: p5, pos: Vector2D, radius: number, limitUp: number, limitDown: number) {
        this.pos = pos;
        this.p5 = p5;
        this.radius = radius;
        this.limitUp = limitUp;
        this.limitDown = limitDown;
    }

    draw() {
        // draw beads
        this.p5.strokeWeight(1);
        this.p5.fill("#DEB887");
        this.p5.triangle(
            this.pos.x - this.radius, this.pos.y, 
            this.pos.x + this.radius, this.pos.y, 
            this.pos.x, this.pos.y - this.radius
        );
        this.p5.fill("#9E7847");
        this.p5.triangle(
            this.pos.x - this.radius, this.pos.y, 
            this.pos.x + this.radius, this.pos.y, 
            this.pos.x, this.pos.y + this.radius
        );
    }

    update() {
        // update beads
        if (window.DeviceMotionEvent) {
            window.addEventListener("deviceorientation", (event) => {
                if (event != null) {
                    if (event.beta != null && event.gamma != null) {
                        if( this.limitUp < this.pos.y && this.pos.y < this.limitDown && event.beta > 0) {
                            this.pos.y += event.beta * 0.00002;
                        }
                        this.p5.textSize(10);
                        this.p5.fill("#000000");
                        this.p5.noStroke();
                        this.p5.text(`beta: ${event.beta}`, 5, 15);
                    }
                }
            }, true);
        }
    }
}

export { Beads };