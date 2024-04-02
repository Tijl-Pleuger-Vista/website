import { player, enemy } from './Fighter.js'
import { background } from './Sprite.js';

let gameScope = () => {

    // var
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        
        const onePlayer = document.getElementById('1player');
        const btn0 = document.getElementById('btn0');
        const btn1 = document.getElementById('btn1');
        
        var displayQuestion = document.getElementById('question');
        var i = 0

        let checkJson = JSON.parse(localStorage.getItem("json"));
        console.log(checkJson)
    // var

    if (localStorage.getItem("json") === null) {
        console.log("json test")
        wait()
            async function wait() {
            var response = await fetch(`https://raw.githubusercontent.com/Tijl-Pleuger-Vista/website.github.io/main/public/Leet-game/assets/json/pvo-1.json`).json()
                console.log(response)
            localStorage.setItem("json", JSON.stringify(response));
        }
    }

    function startGame() {
        document.getElementById('menu').style.display = "none";
        c.fillRect(0, 0, canvas.width, canvas.height);
        setTimeout(() => {
        animate();
        document.getElementById('hud').style.display = "flex";
        }, 1000)
    }

    function nextQuestion(checkJson){
        var length = checkJson.questions.length
            if (length < i){
                console.log("meow")
                window.location.href = "https://vista-400927.web.app/leet-handbook/";
            }
            if (i < checkJson.questions.length){
                displayQuestion.innerHTML =  checkJson.questions[i].question
                btn0.innerHTML = checkJson.questions[i].btn[0].btn0
                btn1.innerHTML = checkJson.questions[i].btn[0].btn1
            }
            i++
            console.log(i)
    }
    
    function animate() {
        window.requestAnimationFrame(animate);  // Set this as a recursive function.
        background.update();
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

    onePlayer.addEventListener("click", () => {
        startGame();
        nextQuestion(checkJson)
        document.getElementById('displayButtons').style.visibility = 'visible';
    });

    btn0.addEventListener("click", () => {answerCheck(0)});
    btn1.addEventListener("click", () => {answerCheck(1)});

    function answerCheck(check){
        
        var answer = checkJson.questions[i].answer

        if (answer == check){
            player.isAttacking = true;
            nextQuestion(checkJson)
        } else {
            enemy.isAttacking = true;
        }
    }
}
gameScope();