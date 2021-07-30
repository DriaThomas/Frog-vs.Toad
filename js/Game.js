
let score = 0;

var elem = document.getElementById('myCanvas'),
    elemLeft = elem.offsetLeft + elem.clientLeft,
    elemTop = elem.offsetTop + elem.clientTop,
    context = elem.getContext('2d'),
    elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function (event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;


    // Collision detection between clicked offset and element.
    elements.forEach(function (element) {
        if (y > element.top && y < element.top + element.height
            && x > element.left && x < element.left + element.width) {
            score++;
            return alert(`score ${score}`)
        }
    });

}, false);

// Add element.
elements.push({
    colour: '#05EFFF',
    width: 150,
    height: 100,
    top: 20,
    left: 15

});
elements.push({
    colour: '#05EFFF',
    width: 150,
    height: 100,
    top: 20,
    left: 15

});


// Render elements.
elements.forEach(function (element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
});




// // const game = new Game();

// // game.start();
// class Game {
//     constructor() {
//         this.canvas = document.getElementById("canvas");
//         this.context = this.canvas.getContext("2d");
//         this.frogs = new Component(this, 800, 200, 70, 70, "./images/frog.png");
//         this.superman = new Player(this, 0, 200, 150, 150, "./images/superman.png");
//         this.score = 0;
//         this.interval = 60;
//         this.animateaFrog;
//     }






//     drawBackground() {

//         // context.font = "20px Arial";
//         // context.fillStyle = "#0095DD";
//         // context.fillText("Score: " + score, 8, 20);



//         const backgroundImage = new Image();
//         backgroundImage.src = './images/water.jpg';
//         context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);




//         const lily = new Image();
//         lily.src = "./images/lilyPad.png";
//         context.drawImage(lily, 20, 150, 100, 100);

//         const lily4 = new Image();
//         lily4.src = "./images/lilyPad.png";
//         context.drawImage(lily4, 20, 250, 100, 100);

//         const lily5 = new Image();
//         lily5.src = "./images/lilyPad.png";
//         context.drawImage(lily5, 20, 350, 100, 100);

//         const lily11 = new Image();
//         lily11.src = "./images/lilyPad.png";
//         context.drawImage(lily11, 150, 150, 100, 100);

//         const lily9 = new Image();
//         lily9.src = "./images/lilyPad.png";
//         context.drawImage(lily9, 150, 250, 100, 100);

//         const lily8 = new Image();
//         lily8.src = "./images/lilyPad.png";
//         context.drawImage(lily8, 150, 350, 100, 100);

//         const lily2 = new Image();
//         lily2.src = "./images/lilyPad.png";
//         context.drawImage(lily2, 265, 150, 100, 100);

//         const lily7 = new Image();
//         lily7.src = "./images/lilyPad.png";
//         context.drawImage(lily7, 265, 250, 100, 100);

//         const lily6 = new Image();
//         lily6.src = "./images/lilyPad.png";
//         context.drawImage(lily6, 265, 350, 100, 100);

//         const lily3 = new Image();
//         lily3.src = "./images/lilyPad.png";
//         context.drawImage(lily3, 375, 150, 100, 100);

//         const lily10 = new Image();
//         lily10.src = "./images/lilyPad.png";
//         context.drawImage(lily10, 375, 250, 100, 100);

//         const lily12 = new Image();
//         lily12.src = "./images/lilyPad.png";
//         context.drawImage(lily12, 375, 350, 100, 100);


//     };




//     drawEverything() {
//         this.context.clearRect(0, 0, canvas.width, canvas.height);
//         lily = setInterval(() => drawBackground(), interval);
//         frogs = setInterval(() => addFrog(), interval);
//     };





//     canvas.addEventListener('click', (event) => {
//         const canvasbound = canvas.getBoundingClientRect();
//         const x = event.clientX - canvasbound.left;
//         const y = event.clientY - canvasbound.top;
//         console.log('x: ' + x + 'y: ' + y);


//     });

// const collison = (xmouse, ymouse) => {
//     if (xmouse === addFrog && ymouse === addFrog) {
//         return score++;
//     }

// }


// // }
// //randomize frog postion
// addFrog(){


//     this.frogs = new Image();
//     this.frogs.src = "./images/frog.png";



//     this.frogsX = [150, 265, 20, 375];
//     this.frogsY = [150, 250, 350];


//     this.randomPosX = frogsX[Math.floor(Math.random() * frogsX.length)];
//     this.randomPosY = frogsY[Math.floor(Math.random() * frogsY.length)];
//     return context.drawImage(frogs, randomPosX, randomPosY, 70, 70);
// }



// document.getElementById('start').onclick = () => {
//     startGame();

// };



// startGame() {
//     this.drawEverything();
//     // collison();
//     this.addFrog();

// }

// }
