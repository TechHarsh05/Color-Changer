let box = document.getElementById('runner')
let up = document.getElementById('up')
let down = document.getElementById('down')
let left = document.getElementById('left')
let right = document.getElementById('right')

let lside = 50;
let tside = 0;
let move = 5;

window.addEventListener('keydown', (event) => {
        if(tside!==0 && event.key === "ArrowUp"){
            if(tside === 20 && !(lside < 15) && lside <= 75 ){}
            else if(tside === 30 && !(lside < 80) && lside <= 85 ){}
            else if(tside === 40 && !(lside < 5) && lside <= 10 ){}
            else if(tside === 40 && !(lside < 20) && lside <= 70 ){}
            else if(tside === 50 && !(lside < 40) && lside <= 45 ){}
            else if(tside === 70 && !(lside < 20) && lside <= 70 ){}
            else if(tside === 90 && !(lside < 5) && lside <= 55 ){}
            else if(tside === 90 && !(lside < 65) && lside <= 85 ){}
                else{tside = tside - move;}
        }
        if(tside!==90 && event.key === "ArrowDown"){
           if(tside === 0 && !(lside < 5) && lside <= 85 ){}
           else if(tside === 20 && !(lside < 20) && lside <= 70 ){} 
           else if(tside === 30 && !(lside < 80) && lside <= 85 ){} 
           else if(tside === 40 && !(lside < 5) && lside <= 10 ){} 
           else if(tside === 40 && !(lside < 55) && lside <= 60 ){} 
           else if(tside === 50 && !(lside < 20) && lside <= 70 ){} 
           else if(tside === 70 && !(lside < 15) && lside <= 55 ){} 
           else if(tside === 70 && !(lside < 65) && lside <= 75 ){} 
            else{ tside = tside + move; }}

        if(lside!==0 && event.key === "ArrowLeft"){lside = lside - move;}
        if(lside!==90 && event.key === "ArrowRight"){lside = lside + move;}
        
    box.style.left = lside + "%";
    box.style.top = tside + "%";

})



