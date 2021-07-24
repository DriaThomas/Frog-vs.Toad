class Component {
    constructor(classGame, x, y, w, h, imageSrc) {
        this.game = classGame; // i need context from the class Game so I am passing it down from the Game where I use it to create fireball object
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = imageSrc;
    }
    drawComponent() {
        this.game.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}