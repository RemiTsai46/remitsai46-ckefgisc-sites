let button = document.getElementById("eye_burn");
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "red";
});
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "white";
});
button.addEventListener("click", () => {
    button.style.backgroundColor = button.style.backgroundColor === "red" ? "white" : "red";
});

const imgs = document.querySelectorAll("img")
let imgSrc = []
imgs.forEach(srcId => {
    imgSrc.push(srcId.src)
})

function change_photo(imgId){
    // const { random, floor } = Math
    imgId.src = imgSrc[Math.floor(Math.random()*imgs.length)]
}

button.addEventListener("click", () => {
    imgs.forEach(imgId => {
        imgId.src = imgSrc[Math.floor(Math.random()*imgs.length)]
})});


/*
let imgSrc = []
imgs.forEach(srcId => {
    imgSrc.push(srcId.src)
})

imgs.forEach(imgId => {
    imgId.addEventListener("click", () => {
    imgId.src = imgSrc[Math.floor(Math.random()*imgs.length)]
})})
*/


// problems, not main code
/*
const students = [
    { id: 1, name: "王小明", score: 85 },
    { id: 2, name: "李小華", score: 92 },
    { id: 3, name: "陳美玲", score: 78 },
    { id: 4, name: "張志豪", score: 88 },
    { id: 5, name: "林佳怡", score: 24 },
    { id: 6, name: "黃冠宇", score: 67 },
    { id: 7, name: "吳佩珊", score: 73 },
    { id: 8, name: "劉俊廷", score: 35 },
    { id: 9, name: "蔡依婷", score: 90 },
    { id: 10, name: "趙文翔", score: 76 },
    { id: 11, name: "周子涵", score: 84 },
    { id: 12, name: "鄭博軒", score: 13 }
];

console.log(`學生人數: ${students.length}`)
const processed = students.map(function (stu){
    if(stu.score < 80){
        stu.score = Math.sqrt(stu.score)*10
    }
    
    console.log(`${stu.id}. (${stu.name})-${stu.score}分`)
})

console.log(students.find(stu => stu.id === 7).score)

let fail = []
const processed2 = students.map(function (stu){
    
    if(stu.score < 60){
        fail.push(stu)
    }
    // console.log(stu,fail)
    
})
fail.sort((x, y) => (y.score-x.score))
// fail.forEach(f => console.log(`${f.id}. (${f.name}) - ${f.score}分`))
console.log(fail.map(f => `${f.id}. (${f.name}) - ${f.score}分`).join("\n"))
*/