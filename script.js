let box = document.getElementById('runner')
let up = document.getElementById('up')
let down = document.getElementById('down')
let left = document.getElementById('left')
let right = document.getElementById('right')

let lside = 50;
let tside = 0;
window.addEventListener('keydown', (event) => {
    let move = 5;

        if(tside!==0 && event.key === "ArrowUp"){tside = tside - move;}
        if(tside!==90 && event.key === "ArrowDown"){tside = tside + move;}
        if(lside!==0 && event.key === "ArrowLeft"){lside = lside - move;}
        if(lside!==90 && event.key === "ArrowRight"){lside = lside + move;}
        
    box.style.left = lside + "%";
    box.style.top = tside + "%";

})

