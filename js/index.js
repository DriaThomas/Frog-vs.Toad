const container = document.querySelector('.container');
const playerScore = document.getElementById('score');

let frogsOnScreen = null;
let score = 0;


for (let i = 0; i < 16; i++) {
    container.innerHTML += `
    <div class="lilyPad" id="lilyPad-${i}"></div>
    `
}
//add toads
function generateFrog() {
    const randomLeafIndex = Math.floor(Math.random() * 16);
    const randomLeafDiv = document.getElementById(`lilyPad-${randomLeafIndex}`);
    randomLeafDiv.innerHTML = `
        <img src='./images/toad.png' height='100px' width='100px' name='toad' />
    `
    frogsOnScreen = setTimeout(() => {
        randomLeafDiv.innerHTML = ''
        generateFrog();
    }, 500 + Math.random() * 750);
}
//add frogs
function generateToad() {
    const randomLeafIndex = Math.floor(Math.random() * 16);
    const randomLeafDiv = document.getElementById(`lilyPad-${randomLeafIndex}`);
    randomLeafDiv.innerHTML = `
        <img src='./images/frog.png' height='100px' width='100px' name='frog' />
    `
    frogsOnScreen = setTimeout(() => {
        randomLeafDiv.innerHTML = ''
        generateToad();
    }, 500 + Math.random() * 750);
}


container.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.name === 'toad') {
        event.target.remove();
        score++;
        playerScore.innerHTML = `SCORE: ${score} `;

        clearTimeout(frogsOnScreen);
        generateFrog();
    }
})





container.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.name === 'frog') {
        event.target.remove();
        score--;
        playerScore.innerHTML = `SCORE:  ${score} `;

        clearTimeout(frogsOnScreen);
        generateToad();
    }
})


// generateToad();
// generateFrog();

function gameOver() {

    if (playerScore > -1) {

        document.body.style.backgroundColor = "red";

        clearTimeout(frogsOnScreen);
    }
}
gameOver();
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        generateToad();
        generateFrog();
    }
}
// if(score === -1){

// }

// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');

// let interval = 60;
// //let score = 0;
// let elements = [];
// let frog1 = new Image();


// function init() {
//     frog1.src = './images/frog.png';

//     window.requestAnimationFrame(draw);
// }

// const frogsPos = [[150, 150, 70, 70], [150, 250, 70, 70], [150, 350, 70, 70]]

// let randomFrogPos = [150, 150, 70, 70]

// function pickRandomFrog() {
//     const randomFrogIndex = Math.floor(Math.random() * frogsPos.length);
//     setTimeout(() => {
//         randomFrogPos = frogsPos[randomFrogIndex];
//         pickRandomFrog()
//     }, 500 + Math.random * 1000)
// }

// function draw() {
//     // const elem = document.getElementById('myCanvas');
//     // const context = elem.getContext('2d');

//     context.globalCompositeOperation = 'destination-over';
//     context.clearRect(0, 0, 500, 500); // clear canvas
//     context.fillText(`Score: ${score}`, 0, 0);
//     context.fillStyle = "blue";
//     context.font = "50px Arial";
//     alert(`score: ${score}`);
//     context.clearRect(0, 0, 300, 100);
//     context.fillStyle = 'rgba(0, 0, 0, 0.4)';
//     context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
//     context.save();
//     context.drawImage(frog1, ...randomFrogPos);
// }

// // frog

// // setInterval(function () {

// //     // const randomPos= elements[Math.floor(Math.random()* elements.length)];
// //     // const frogsX = [150, 265, 20, 375, 30];
// //     // // //     // const frogsY = [150, 250, 350];

// // context.drawImage(frog1, 150, 150, 70, 70);

// // }, 2000);


// // setInterval(function () {
// //     context.clearRect(150, 150, 70, 70);
// // }, 3000);
// // context.clearRect(150, 150, 70, 70);
// //

// // setInterval(function () {
// //     context.drawImage(frog1, 150, 250, 70, 70);
// // }, 3000);

// // setInterval(function () {
// //     context.clearRect(150, 250, 70, 70);
// // }, 5000);
// // context.clearRect(150, 250, 70, 70);

// // //
// // setInterval(function () {
// //     context.drawImage(frog1, 150, 350, 70, 70);

// // }, 5000);

// // setInterval(function () {
// //     context.clearRect(150, 350, 70, 70);
// // }, 5000);
// // context.clearRect(150, 350, 70, 70);
// // //
// // setInterval(function () {
// //     context.drawImage(frog1, 265, 150, 70, 70);

// // }, 8000);

// // setInterval(function () {
// //     context.clearRect(265, 150, 70, 70);
// // }, 3000);
// // context.clearRect(265, 150, 70, 70);
// // //
// // setInterval(function () {
// //     context.drawImage(frog1, 265, 250, 70, 70);

// // }, 3000);

// // setInterval(function () {
// //     context.clearRect(265, 250, 70, 70);
// // }, 7000);
// // context.clearRect(265, 250, 70, 70);
// // //
// // setInterval(function () {
// //     context.drawImage(frog1, 265, 350, 70, 70);

// // }, 5000);

// // setInterval(function () {
// //     context.clearRect(265, 350, 70, 70);
// // }, 3000);
// // context.clearRect(265, 350, 70, 70);




// var myUpBtn;

// let score = 0;

// function clickFrogs() {

//     myUpBtn = new component('./images/frog.png', 70, 70, 70, 200);
//     myGameArea.start();
// }


// var myGameArea = {
//     canvas: document.createElement("canvas"),
//     start: function () {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('mousedown', function (e) {
//             myGameArea.x = e.pageX;
//             myGameArea.y = e.pageY;
//         })
//         window.addEventListener('mouseup', function (e) {
//             myGameArea.x = false;
//             myGameArea.y = false;
//         })
//         window.addEventListener('touchstart', function (e) {
//             myGameArea.x = e.pageX;
//             myGameArea.y = e.pageY;
//         })
//         window.addEventListener('touchend', function (e) {
//             myGameArea.x = false;
//             myGameArea.y = false;
//         })
//     },
//     clear: function () {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

// function component(imageSrc, width, height, x, y) {
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.img = new Image();
//     this.img.src = imageSrc;
//     this.update = function () {
//         ctx = myGameArea.context;
//         //ctx.fillStyle = color;
//         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

//         //ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.clicked = function () {
//         const myleft = this.x;
//         const myright = this.x + (this.width);
//         const mytop = this.y;
//         const mybottom = this.y + (this.height);
//         const clicked = true;
//         if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
//             clicked = false;

//         }
//         return clicked;
//     }
// }

// function updateGameArea() {
//     myGameArea.clear();
//     if (myGameArea.x && myGameArea.y) {
//         if (myUpBtn.clicked()) {
//             score++;
//             alert(`Score: ${score}`);
//         }

//     }
//     myUpBtn.update();
//     myDownBtn.update();
//     myLeftBtn.update();
//     myRightBtn.update();
//     myGamePiece.update();
// }







// // function scores() {
// //     elem.onclick = function () {
// //         // img clicked

// //         score++;

// //         // context.fillText(`Score: ${score}`, 0, 0);
// //         // context.fillStyle = "blue";
// //         // context.font = "50px Arial";
// //         // alert(`score: ${score}`);
// //         // context.clearRect(0, 0, 300, 100);
// //     };

// // }

// // //frogs clicked
// // function clickedFrogs(){

// // }

// function startGame() {

//     init();
//     // scores();
//     pickRandomFrog();
//     clickFrogs();
//     // myUpBtn.update();
//     // myDownBtn.update();
//     // myLeftBtn.update();
//     // myRightBtn.update();
//     // myGamePiece.update();
// }

// window.onload = () => {
//     document.getElementById('start').onclick = () => {
//         startGame();


//     };
// }




