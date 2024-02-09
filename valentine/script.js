var check = 0
function mewcheck(){
    check++
    console.log(check)
    if (check === 1){
        console.log(check)
    
        setInterval(createHeart,100);
        setInterval(function name(params) {
            var heartArr = document.querySelectorAll(".fa-heart")
            if (heartArr.length > 200) {
               heartArr[0].remove()
            }
            //console.log(heartArr);
        },100)
    }
}
const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
console.log(check)

