// const game = new Game();

// game.start();

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d');

// const score = document.getElementById('score');
// // context.fillStyle("blue");

// const score = 0;
let interval = 60;
let animateaFrog;


// let score = 0;
// const frogsHit = 0;
// const totalFrogs = 10;
// const lastFrogs;


// const frogs1 = {
//     img: './images/frog.png',
//     width: 70,
//     height: 70
// }



const drawBackground = () => {

    // context.font = "20px Arial";
    // context.fillStyle = "#0095DD";
    // context.fillText("Score: " + score, 8, 20);



    const backgroundImage = new Image();
    backgroundImage.src = './images/water.jpg';
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);




    const lily = new Image();
    lily.src = "./images/lilyPad.png";
    context.drawImage(lily, 20, 150, 100, 100);

    const lily4 = new Image();
    lily4.src = "./images/lilyPad.png";
    context.drawImage(lily4, 20, 250, 100, 100);

    const lily5 = new Image();
    lily5.src = "./images/lilyPad.png";
    context.drawImage(lily5, 20, 350, 100, 100);

    const lily11 = new Image();
    lily11.src = "./images/lilyPad.png";
    context.drawImage(lily11, 150, 150, 100, 100);

    const lily9 = new Image();
    lily9.src = "./images/lilyPad.png";
    context.drawImage(lily9, 150, 250, 100, 100);

    const lily8 = new Image();
    lily8.src = "./images/lilyPad.png";
    context.drawImage(lily8, 150, 350, 100, 100);

    const lily2 = new Image();
    lily2.src = "./images/lilyPad.png";
    context.drawImage(lily2, 265, 150, 100, 100);

    const lily7 = new Image();
    lily7.src = "./images/lilyPad.png";
    context.drawImage(lily7, 265, 250, 100, 100);

    const lily6 = new Image();
    lily6.src = "./images/lilyPad.png";
    context.drawImage(lily6, 265, 350, 100, 100);

    const lily3 = new Image();
    lily3.src = "./images/lilyPad.png";
    context.drawImage(lily3, 375, 150, 100, 100);

    const lily10 = new Image();
    lily10.src = "./images/lilyPad.png";
    context.drawImage(lily10, 375, 250, 100, 100);

    const lily12 = new Image();
    lily12.src = "./images/lilyPad.png";
    context.drawImage(lily12, 375, 350, 100, 100);

    // const frogsX = [150, 265, 20, 375, 30];
    // const frogsY = [150, 250, 350];

    // const frogs = new Image();
    // frogs.src = "./images/frog.png";
    // context.drawImage(frogs, 150, 150, 70, 70);
    // context.drawImage(frogs, 150, 250, 70, 70);
    // context.drawImage(frogs, 150, 350, 70, 70);
    // context.drawImage(frogs, 265, 150, 70, 70);
    // context.drawImage(frogs, 265, 250, 70, 70);
    // context.drawImage(frogs, 265, 350, 70, 70);

};




const drawEverything = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    lily = setInterval(() => drawBackground(), interval);
    frogs = setInterval(() => addFrog(), interval);
};

// const drawLoop = () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);


// }



// canvas.addEventListener('click', (event) => {
//     const canvasbound = canvas.getBoundingClientRect();
//     const x = event.clientX - canvasbound.left;
//     const y = event.clientY - canvasbound.top;
//     console.log('x: ' + x + 'y: ' + y);


// });
// // result.addEventListener("click", function () {
// //     score.innterHTML = "Score: " + score;
// //     score++;;

// //         ;
// //     });
// // }
// const collison = (xmouse, ymouse) => {
//     if (xmouse === addFrog && ymouse === addFrog) {
//         return score++;
//     }

// }


// }
//randomize frog postion
const addFrog = () => {


    const frogs = new Image();
    frogs.src = "./images/frog.png";

    // context.drawImage(frogs, 150, 150, 70, 70);
    // context.drawImage(frogs, 150, 250, 70, 70);
    // context.drawImage(frogs, 150, 350, 70, 70);
    // context.drawImage(frogs, 265, 150, 70, 70);
    // context.drawImage(frogs, 265, 250, 70, 70);
    // context.drawImage(frogs, 265, 350, 70, 70);
    // context.drawImage(frogs, 20, 150, 70, 70);
    // context.drawImage(frogs, 20, 250, 70, 70);
    // context.drawImage(frogs, 20, 350, 70, 70);
    // context.drawImage(frogs, 375, 150, 70, 70);
    // context.drawImage(frogs, 375, 250, 70, 70);
    // context.drawImage(frogs, 375, 350, 70, 70);

    const frogsX = [150, 265, 20, 375];
    const frogsY = [150, 250, 350];


    const randomPosX = frogsX[Math.floor(Math.random() * frogsX.length)];
    const randomPosY = frogsY[Math.floor(Math.random() * frogsY.length)];
    return context.drawImage(frogs, randomPosX, randomPosY, 70, 70);


}





// document.getElementById('start').onclick = () => {
// document.getElementById('start').addEventListener('click', function (e) {

// startGame();
// }
// }
// window.onload = function () {

//     document.getElementById('start').addEventListener('click', function () {
//         startGame();
//     });

// };



// function startGame() {
//     drawBackground();
//     drawEverything();
//     // addFrog();
//     // drawLoop();
//     // collison();
// }

window.onload = () => {
    document.getElementById('start').onclick = () => {
        startGame();

    };
}

function startGame() {
    drawEverything();
    // collison();
    addFrog();

}