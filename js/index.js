


const container = document.querySelector('.container');
const playerScore = document.getElementById('score');

const timer = document.getElementById("time");
let frogsOnScreen = null;
score = 0;

playerScore.innerHTML = `Score: ${score} `;


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
        <img src='/images/toad.png' height='100px' width='100px' name='toad' />
    `
    frogsOnScreen = setTimeout(() => {
        randomLeafDiv.innerHTML = ''
        generateFrog();

    }, 2000 + Math.random() * 750);
}
//add frogs
function generateToad() {
    const randomLeafIndex = Math.floor(Math.random() * 16);
    const randomLeafDiv = document.getElementById(`lilyPad-${randomLeafIndex}`);
    randomLeafDiv.innerHTML = `
        <img src='/images/frog.png' height='100px' width='100px' name='frog' />
    `
    ToadOnScreen = setTimeout(() => {
        randomLeafDiv.innerHTML = ''
        generateToad();
    }, 2000 + Math.random() * 750);
}


container.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.name === 'toad') {
        event.target.remove();
        score++;
        playerScore.innerHTML = `Score: ${score} `;

        clearTimeout(frogsOnScreen);
        generateFrog();
    }

})



function clickFrog() {

    container.addEventListener('click', (event) => {
        console.log(event.target);
        if (event.target.name === 'frog') {
            event.target.remove();
            score--;
            playerScore.innerHTML = `Score:  ${score} `;

            clearTimeout(ToadOnScreen);
            generateToad();

        }
        // let x = setInterval(function () {
        else {

            playerScore.innerHTML = `Score:  ${score} `;
        }
    })

    // }, 1000);

}

function time() {
    // Set the date we're counting down to
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds


        // let seconds = Math.floor((distance % (1000 * 21)) / 1425);
        let seconds = Math.floor((distance % (500 * 21)) / 1000);
        // Output the result in an element with id="demo"
        document.getElementById("time").innerHTML = `Time: ${seconds}  s `;


        // If the count down is over, write some text 
        if (seconds === 0 && score > 0) {

            document.getElementById("time").innerHTML = "<p>Congrats! You Survived!</p>";
            clearInterval(x);
            // clearInterval(generateToad);
            // clearInterval(generateFrog);
            // clearTimeout(ToadOnScreen);
            // clearTimeout(FrogOnScreen);
            clearTimeout(score);
        }
        else if (seconds === 0 && score <= 0) {
            document.getElementById("time").innerHTML = "<p>Better luck next time!</p>";
            clearInterval(x);
            // clearInterval(generateToad);
            // clearInterval(generateFrog);
            // clearTimeout(ToadOnScreen);
            // clearTimeout(FrogOnScreen);
            clearTimeout(score);
        }


    }, 500);

}



function gameOver() {
    if (clickFrog()) {
        document.removeChild(document.documentElement);
    }


}

function reset() {
    // let d = setInterval(function () {

    score = 0;
    let seconds = Math.floor((distance % (1000 * 21)) / 1000);
    // }, 30000);

}




window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();


    };
    function startGame() {
        time();
        generateToad();
        generateFrog();
        gameOver();

    }
}



