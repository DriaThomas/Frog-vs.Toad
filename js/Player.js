class Player extends Component {
    constructor(classGame, x, y, w, h, imageSrc) {
      super(classGame, x, y, w, h, imageSrc);
  
      this.immunity = false;
      this.lives = 3;
    }
}