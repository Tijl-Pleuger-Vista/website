import { player, enemy } from './Fighter.js'
import { background } from './Sprite.js';

let gameScope = () => {
        const canvas = document.querySelector('canvas');
        const c = canvas.getContext('2d');
        const init = document.getElementById('init');
        const btn0 = document.getElementById('displayButtonAplha');
        const btn1 = document.getElementById('displayButtonBeta');
        
        var displayQuestion = document.getElementById('question');
        var i = -1
        var root = document.querySelector(':root');

        let checkJson = JSON.parse(localStorage.getItem("json"));
        console.log(checkJson)

        root.style.setProperty('--hero-min', `${checkJson.colors.hero.min}`);
        root.style.setProperty('--hero-max', `${checkJson.colors.hero.max}`);
        root.style.setProperty('--enemy-min', `${checkJson.colors.villain.min}`);
        root.style.setProperty('--enemy-max', `${checkJson.colors.villain.max}`);

    function startGame() {
        document.getElementById('menu').style.display = "none";
        c.fillRect(0, 0, canvas.width, canvas.height);
        setTimeout(() => {
        animate();
        document.getElementById('hud').style.display = "flex";
        }, 10)
    }

    function nextQuestion(checkJson){
        var length = checkJson.questions.length
        var length = length - 1
        i++
            if (length < i){
                localStorage.removeItem("json");
                window.location.href = "https://vista-400927.web.app/leet-handbook/";
            }
            if (i < checkJson.questions.length){
                displayQuestion.innerHTML =  checkJson.questions[i].question
                btn0.innerHTML = checkJson.questions[i].button[0].text
                btn1.innerHTML = checkJson.questions[i].button[1].text
            }
            
    }
    
    function animate() {
        window.requestAnimationFrame(animate);
        background.update();
        update(player);
        update(enemy);
        player.velocity.x = 0;
        enemy.velocity.x = 0;
            if (!player.movement() && !player.isAttacking && !player.isTakingHit) {
                player.switchSprite('idle');
            }
    
            if (!enemy.movement() && !enemy.isAttacking && !enemy.isTakingHit) {
                enemy.switchSprite('idle')
            }
        player.attack(enemy);
        enemy.attack(player);
    }
    
    function update(fighter) {
        if (fighter.health > 0) {
            fighter.update();
        } else {
            fighter.animateFrames()
            fighter.draw();
        }
    }

    init.addEventListener("click", () => {
        document.getElementById('displayButtons').style.visibility = 'visible';
        startGame();
        nextQuestion(checkJson)
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