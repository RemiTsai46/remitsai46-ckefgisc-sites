// TABS
let buttons = document.querySelectorAll("button.tab");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#eee";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "white";
    });
})

function show_timer(){
    document.getElementById("cntdn").style.display = "none"
    document.getElementById("timer").style.display = "block"
    document.getElementById("ti").style.borderBottom = "2px solid #999"
    document.getElementById("cd").style.borderBottom = "2px solid #ccc"
}
function show_cntdn(){
    document.getElementById("timer").style.display = "none"
    document.getElementById("cntdn").style.display = "block"
    document.getElementById("ti").style.borderBottom = "2px solid #ccc"
    document.getElementById("cd").style.borderBottom = "2px solid #999"
}

// ========== COUNTDOWN ==========

let isCounting = false;
let cdReset = document.getElementById("cd_reset");
let cdStart = document.getElementById("cd_start");
const inputs = [
    document.getElementById("cd_hr"),
    document.getElementById("cd_mn"),
    document.getElementById("cd_sc")
];
let csecs = 0;
let timer = null;

function start_cd(){
    let in_hr = Number(inputs[0].value);
    let in_mn = Number(inputs[1].value);
    let in_sc = Number(inputs[2].value);
    
    csecs = (in_hr*3600+in_mn*60+in_sc)*100;
    if(csecs == 0) return;

    // change reset to Reset
    cdReset.onclick = cancel_cd;
    cdReset.textContent = "Cancel";

    // change start/resume to pause
    cdStart.onclick = pause_cd;
    cdStart.textContent = "Pause";
    cdStart.style.border = "2px solid #fc9"
    cdStart.style.backgroundColor = "#fec"

    // start counting
    isCounting = true;
    if(timer === null){
        let cs_tmp = csecs;
        timer = setInterval(() => {
            if(cs_tmp <= 0){
                isCounting = false;
                clearInterval(timer);
                alert("Times up!");
                cancel_cd();
            }
            if(isCounting == true){
                cs_tmp -= 1;
                let now_hr = Math.floor(cs_tmp/360000);
                let now_mn = Math.floor((cs_tmp%360000)/6000);
                let now_sc = Math.floor((cs_tmp%6000)/100);
                let now_cs = Math.floor(cs_tmp%100);
                document.getElementById("clock").innerText = `${String(now_hr).padStart(2, '0')}:${String(now_mn).padStart(2, '0')}:${String(now_sc).padStart(2, '0')}.${String(now_cs).padStart(2, '0')}`
            }
        }, 10);
    }
}

function pause_cd(){
    isCounting = false;
    cdStart.onclick = start_cd;
    cdStart.textContent = "Resume";
    cdStart.style.border = "2px solid #9f9";
    cdStart.style.backgroundColor = "#cfc";
}

function cancel_cd(){
    clearInterval(timer);
    timer = null;
    console.log(timer);
    cs_init = csecs;
    let hr = Math.floor(cs_init/360000);
    let mn = Math.floor((cs_init%360000)/6000);
    let sc = Math.floor((cs_init%6000)/100);
    let cs = Math.floor(cs_init%100);
    document.getElementById("clock").innerText = `${String(hr).padStart(2, '0')}:${String(mn).padStart(2, '0')}:${String(sc).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
    
    cdStart.onclick = start_cd;
    cdStart.textContent = "Start";
    cdStart.style.border = "2px solid #9f9";
    cdStart.style.backgroundColor = "#cfc";

    cdReset.onclick = reset_cd;
    cdReset.textContent = "Reset";
}

function reset_cd(){
    document.getElementById("clock").innerText = "00:00:00.00";
    inputs[0].value = "0";
    inputs[1].value = "0";
    inputs[2].value = "0";
    cdReset.style.opacity = 0.5;
    cdReset.style.cursor = "not-allowed";
}

// Reset ability check
inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.value) {
            cdReset.style.opacity = 1;
            cdReset.style.cursor = "pointer";
        }
        if(!(Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value))){
            cdReset.style.opacity = 0.5;
            cdReset.style.cursor = "not-allowed";
        }
})})