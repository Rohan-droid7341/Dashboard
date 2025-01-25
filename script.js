const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
let upto = 505;
let counts = setInterval(updated, 1500);

function updated() {
    let count = document.getElementById("number1");
    count.innerHTML = ++upto;
    if (upto === 1000000) {
        clearInterval(counts);
    }
}

let upto2 = 309;
let counts2 = setInterval(updated2, 2500);

function updated2() {
    let count = document.getElementById("number2");
    count.innerHTML = ++upto2;
    if (upto2 === 1000) {
        clearInterval(counts2);
    }
}

let upto3 = 455;
let counts3 = setInterval(updated3, 3000);
function updated3() {
    let count = document.getElementById("number3");
    count.innerHTML = ++upto3;
    if (upto3 === 10000) {
        clearInterval(counts3);
    }
}
