import { player, enemy } from './Fighter.js'
import { background, shop } from './Sprite.js';

wait()
async function wait() {
    var response = await fetch(`https://raw.githubusercontent.com/Tijl-Pleuger-Vista/website.github.io/main/public/Leet-game/assets/json/AYS.json`)
    var response = await response.json();
    localStorage.setItem("json", JSON.stringify(response));
}

var answer = 1
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
let timer = 30; // Game timer.
let timerID;    // Used to clearTimeout.
let gameEnded = false;  // Flag to determinate whenever game's has ended or not.

const onePlayer = document.getElementById('1player');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

var displayQuestion = document.getElementById('question');

localStorage.setItem("i", 0);

onePlayer.addEventListener("click", () => {
    startGame();
    document.getElementById('displayButtons').style.visibility = 'visible';
});

let answerCheckPre = () => {
    let checkJson = JSON.parse(localStorage.getItem("json"));
    console.log(checkJson)
    nextQuestion(checkJson)

    btn0.addEventListener("click", () => {answerCheck(1)});
    btn1.addEventListener("click", () => {answerCheck(2)});
    btn2.addEventListener("click", () => {answerCheck(3)});
    btn3.addEventListener("click", () => {answerCheck(4)});
    
    function answerCheck(check){
        if (answer === check){
            console.log("Corrent answer")
            player.isAttacking = true;
            nextQuestion(checkJson)
        } else {
            console.log("Not the answer")
            enemy.isAttacking = true;
        }
    }
}
answerCheckPre();

function nextQuestion(checkJson){
    var length = checkJson.questions.length + 1

    var i = localStorage.getItem("i")
    if (i < checkJson.questions.length){
        displayQuestion.innerHTML =  checkJson.questions[i].question
    }
    i++
    localStorage.setItem("i", i);

    console.log(i)
    console.log(checkJson.questions.length)

    
    if (length === i){
        console.log("meow")
    }
}



function startGame() {
    document.getElementById('menu').style.display = "none";
    c.fillRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
    animate();
    document.getElementById('hud').style.display = "flex";  // Show the hud.
    }, 1000)
}

function animate() {
    window.requestAnimationFrame(animate);  // Set this as a recursive function.
    background.update();
    shop.update();
    update(player);
    update(enemy);
    player.velocity.x = 0;  // Reset the "x" velocity of the player each frame. So it doesn't "slide" every frame.
    enemy.velocity.x = 0;   // Same for the enemy.

        if (!player.movement() && !player.isAttacking && !player.isTakingHit) {  // If player is not running, set his sprite to idle.
            player.switchSprite('idle');
        }

        if (!enemy.movement() && !enemy.isAttacking && !enemy.isTakingHit) {    // If enemy is not running, set his sprite to idle.
            enemy.switchSprite('idle')  // TODO: Disable enemy movement for arrow keys when playing VS IA.
        }

    // Check if a fighter is attacking.
    player.attack(enemy);
    enemy.attack(player);

    if (!gameEnded) {
        if (enemy.health <= 0 || player.health <= 0) {
            determineWinner({ player, enemy, timerID });
        }
    }
}

// Fighter is alive can perform any action, if it's not then only get drawn.
function update(fighter) {
    if (fighter.health > 0) {   // Allow movement and attacks only if player is alive.
        fighter.update();
    } else {    // If is not alive, then only draw the player on the screen.
        fighter.animateFrames()
        fighter.draw();
    }
}

function determineWinner({ player, enemy, timerID }) {
    // clearTimeout(timerID);  // Stop the timer, the game ended.
    // gameEnded = true;
    // document.querySelector('#result').style.display = 'flex'    // Change from 'none' to 'flex'
    // if (player.health === enemy.health) {
    //     document.querySelector('#result').innerHTML = 'Tie!';   // Player's and enemy's health are the same.
    // } else if (player.health > enemy.health) {
    //     document.querySelector('#result').innerHTML = 'Player 1 won!'; // Player's health is greater.
    //     enemy.health = 0;
    //     enemy.switchSprite('death');
    // } else {
    //     document.querySelector('#result').innerHTML = 'Player 2 won!'; // Enemy's health is greater.
    //     player.health = 0;
    //     player.switchSprite('death');
    // }
}

