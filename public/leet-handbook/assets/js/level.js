let experienceNumber = document.getElementById("experience");
let levelNumber = document.getElementById("level");

let experienceCounter = 0;
let experience = 80
let level = 10
levelNumber.innerHTML = "lvl " + level
setInterval(() => {
    if(experienceCounter == experience){
        clearInterval();
    }else{
        experienceCounter += 1;
        experienceNumber.innerHTML = experienceCounter + "%"; 
    }
},20 );


var r = document.querySelector(':root');
_experience = 471 - experience - experience
r.style.setProperty('--experience', _experience);