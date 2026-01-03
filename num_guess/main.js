let state = 0;
function randIntGen(){
    let ans = Math.floor(Math.random() * (100 - 0 + 1));
    return ans;
}
function start(){
    document.getElementById("start").style.display = "none";
    document.getElementById("enter").textContent = "Enter";
    document.getElementById("enter").style.display = "block";
    document.getElementById("input").value = "";
    document.getElementById("input").style.display = "block";
    document.getElementById("bgvid").style.display = "block";
    ans = randIntGen();
    console.log(document.getElementById("bgvid"))
    state = 1;
}
function startmusic(){
    document.getElementById("bgvid").muted = false;
    document.getElementById("bgvid").play().catch(err => console.log("Play blocked:", err));
}
function enterOnClick(){
    if (state == 1) {
        determine();
    } else if (state == 2) {
        reset();
    }
}

function determine(){
    let input = parseInt(document.getElementById("input").value);
    console.log(input)
    document.getElementById("output").style.display = "inline-block";
    if(input > ans){
        document.getElementById("output").textContent = "Too big!";
    }
    else if(input < ans){
        document.getElementById("output").textContent = "Too small!";
    }
    else if(input === ans){
        state = 2;
        document.getElementById("output").textContent = "You're right!";
        document.getElementById("enter").textContent = "Reset"
        // document.getElementById("enter").onclick="reset()";
    }
}
function reset(){
    state = 0;
    document.getElementById("start").style.display = "block";
    document.getElementById("enter").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("output").style.display = "none";
}