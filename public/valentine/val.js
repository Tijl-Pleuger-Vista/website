var count = 0

function nono(){
    var mew = document.getElementById("no");

    mew.classList.remove("no1");
    mew.classList.remove("no2");
    mew.classList.remove("no3");
    mew.classList.remove("no4");
    mew.classList.remove("no5");

    count++
    if (count === 1){
        mew.classList.add("no1");
        mew.innerHTML = "Why did you say no :(";
    }
    if (count === 2){
        mew.classList.add("no2");
        mew.innerHTML = "Ahw please!";
    }
    if (count === 3){
        mew.classList.add("no3");
        mew.innerHTML = "Don't say no";
    }
    if (count === 4){
        mew.classList.add("no4");
        mew.innerHTML = "Pretty please!!!";
    }
    if (count === 5){
        mew.classList.add("no5");
        mew.innerHTML = ":(";
        count = 0
    }
}

function yesyes(){
    var mew0 = document.getElementById("yes");
    var mew1 = document.getElementById("yes1");
    var mew = document.getElementById("no");

    mew0.innerHTML = "YAY";
    mew1.innerHTML = "YAY";
    mew.innerHTML = "YAY";
}
