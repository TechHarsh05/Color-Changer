let runner = document.getElementById('runner');
let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');

let Game = document.getElementById('Game');
let over = document.createElement('div');
let c1 = document.createElement('span');
let c2 = document.createElement('span');
let c3 = document.createElement('span');
let c4 = document.createElement('span');
let c5 = document.createElement('span');

over.id = 'over';
over.innerHTML = 'Match'
c1.id = 'c1';
c2.id = 'c2';
c3.id = 'c3';
c4.id = 'c4';
c5.id = 'c5';
Game.append(over, c1, c2, c3, c4, c5);

c1.classList = 'colorChanger';
c2.classList = 'colorChanger';
c3.classList = 'colorChanger';
c4.classList = 'colorChanger';
c5.classList = 'colorChanger';

// runner.style.color = 'background-color:white';
runner.style.background = 'red'
c1.style.background = "rgb(244, 84, 84)";
c2.style.background = "rgb(93, 216, 22)";
c3.style.background = "rgb(30, 58, 173)";
c4.style.background = "rgb(24, 240, 236)";
c5.style.background = "rgb(163, 30, 173)";

let color = Math.floor(Math.random() * 5);
if (color === 0) { over.style.cssText = c1.style.cssText }
else if (color === 1) { over.style.cssText = c2.style.cssText }
else if (color === 2) { over.style.cssText = c5.style.cssText }
else if (color === 3) { over.style.cssText = c3.style.cssText }
else if (color === 4) { over.style.cssText = c4.style.cssText };

let lside = 50;
let tside = 0;
let move = 5;

window.addEventListener('keydown', (event) => {
    if (tside !== 0 && event.key === "ArrowUp") {
        if (tside === 20 && !(lside < 15) && lside <= 75) { }
        else if (tside === 30 && !(lside < 80) && lside <= 85) { }
        else if (tside === 40 && !(lside < 5) && lside <= 10) { }
        else if (tside === 40 && !(lside < 20) && lside <= 70) { }
        else if (tside === 50 && !(lside < 40) && lside <= 45) { }
        else if (tside === 70 && !(lside < 20) && lside <= 70) { }
        else if (tside === 90 && !(lside < 5) && lside <= 55) { }
        else if (tside === 90 && !(lside < 65) && lside <= 85) { }
        else { tside = tside - move; }
    }

    if (tside !== 90 && event.key === "ArrowDown") {
        if (tside === 0 && !(lside < 5) && lside <= 85) { }
        else if (tside === 20 && !(lside < 20) && lside <= 70) { }
        else if (tside === 30 && !(lside < 80) && lside <= 85) { }
        else if (tside === 40 && !(lside < 5) && lside <= 10) { }
        else if (tside === 40 && !(lside < 55) && lside <= 60) { }
        else if (tside === 50 && !(lside < 20) && lside <= 70) { }
        else if (tside === 70 && !(lside < 15) && lside <= 55) { }
        else if (tside === 70 && !(lside < 65) && lside <= 75) { }
        else { tside = tside + move; };
    };

    if (lside !== 0 && event.key === "ArrowLeft") {
        if (lside === 15 && !(tside < 20) && tside <= 35) { }
        else if (lside === 15 && !(tside < 45) && tside <= 70) { }
        else if (lside === 50 && !(tside < 40) && tside <= 45) { }
        else if (lside === 60 && !(tside < 75) && tside <= 85) { }
        else if (lside === 65 && !(tside < 45) && tside <= 50) { }
        else if (lside === 75 && !(tside < 25) && tside <= 35) { }
        else if (lside === 75 && !(tside < 55) && tside <= 65) { }
        else if (lside === 90 && !(tside < 5) && tside <= 25) { }
        else if (lside === 90 && !(tside < 35) && tside <= 85) { }
        else { lside = lside - move; };
    };

    if (lside !== 90 && event.key === "ArrowRight") {
        if (lside === 0 && !(tside < 5) && tside <= 35) { }
        else if (lside === 0 && !(tside < 45) && tside <= 85) { }
        else if (lside === 15 && !(tside < 25) && tside <= 35) { }
        else if (lside === 15 && !(tside < 55) && tside <= 65) { }
        else if (lside === 35 && !(tside < 40) && tside <= 45) { }
        else if (lside === 50 && !(tside < 45) && tside <= 50) { }
        else if (lside === 60 && !(tside < 75) && tside <= 85) { }
        else if (lside === 75 && !(tside < 20) && tside <= 25) { }
        else if (lside === 75 && !(tside < 35) && tside <= 70) { }
        else { lside = lside + move; };
    };

    if (lside === 50 && tside === 40) {
        if (runner.style.background === over.style.background) {
            setTimeout(function () { alert('you won'); location.reload(); }, 500);
        }
        else { setTimeout(function () { alert('Not Match'); }, 500); }
    }
    if (lside === 20 && tside === 0) { runner.style.background = c1.style.background }
    if (lside === 30 && tside === 70) { runner.style.background = c2.style.background }
    if (lside === 80 && tside === 90) { runner.style.background = c3.style.background }
    if (lside === 60 && tside === 20) { runner.style.background = c4.style.background }
    if (lside === 0 && tside === 80) { runner.style.background = c5.style.background }


    runner.style.left = lside + "%";
    runner.style.top = tside + "%";

})

up.addEventListener('click', () => {
    if (tside !== 0) {
        if (tside === 20 && !(lside < 15) && lside <= 75) { }
        else if (tside === 30 && !(lside < 80) && lside <= 85) { }
        else if (tside === 40 && !(lside < 5) && lside <= 10) { }
        else if (tside === 40 && !(lside < 20) && lside <= 70) { }
        else if (tside === 50 && !(lside < 40) && lside <= 45) { }
        else if (tside === 70 && !(lside < 20) && lside <= 70) { }
        else if (tside === 90 && !(lside < 5) && lside <= 55) { }
        else if (tside === 90 && !(lside < 65) && lside <= 85) { }
        else { tside = tside - move; };
    }

    if (lside === 50 && tside === 40) {
        if (runner.style.background === over.style.background) {
            setTimeout(function () { alert('you won'); location.reload(); }, 500);
        }
        else { setTimeout(function () { alert('Not Match'); }, 500); }
    }
    if (lside === 20 && tside === 0) { runner.style.background = c1.style.background }
    if (lside === 30 && tside === 70) { runner.style.background = c2.style.background }
    if (lside === 80 && tside === 90) { runner.style.background = c3.style.background }
    if (lside === 60 && tside === 20) { runner.style.background = c4.style.background }
    if (lside === 0 && tside === 80) { runner.style.background = c5.style.background }

    runner.style.left = lside + "%";
    runner.style.top = tside + "%";
})

down.addEventListener('click', () => {
    if (tside !== 90) {
        if (tside === 0 && !(lside < 5) && lside <= 85) { }
        else if (tside === 20 && !(lside < 20) && lside <= 70) { }
        else if (tside === 30 && !(lside < 80) && lside <= 85) { }
        else if (tside === 40 && !(lside < 5) && lside <= 10) { }
        else if (tside === 40 && !(lside < 55) && lside <= 60) { }
        else if (tside === 50 && !(lside < 20) && lside <= 70) { }
        else if (tside === 70 && !(lside < 15) && lside <= 55) { }
        else if (tside === 70 && !(lside < 65) && lside <= 75) { }
        else { tside = tside + move; };
    };

    if (lside === 50 && tside === 40) {
        if (runner.style.background === over.style.background) {
            setTimeout(function () { alert('you won'); location.reload(); }, 500);
        }
        else { setTimeout(function () { alert('Not Match'); }, 500); }
    }
    if (lside === 20 && tside === 0) { runner.style.background = c1.style.background }
    if (lside === 30 && tside === 70) { runner.style.background = c2.style.background }
    if (lside === 80 && tside === 90) { runner.style.background = c3.style.background }
    if (lside === 60 && tside === 20) { runner.style.background = c4.style.background }
    if (lside === 0 && tside === 80) { runner.style.background = c5.style.background }

    runner.style.left = lside + "%";
    runner.style.top = tside + "%";
})

left.addEventListener('click', () => {
    if (lside !== 0) {
        if (lside === 15 && !(tside < 20) && tside <= 35) { }
        else if (lside === 15 && !(tside < 45) && tside <= 70) { }
        else if (lside === 50 && !(tside < 40) && tside <= 45) { }
        else if (lside === 60 && !(tside < 75) && tside <= 85) { }
        else if (lside === 65 && !(tside < 45) && tside <= 50) { }
        else if (lside === 75 && !(tside < 25) && tside <= 35) { }
        else if (lside === 75 && !(tside < 55) && tside <= 65) { }
        else if (lside === 90 && !(tside < 5) && tside <= 25) { }
        else if (lside === 90 && !(tside < 35) && tside <= 85) { }
        else { lside = lside - move; };
    };

    if (lside === 50 && tside === 40) {
        if (runner.style.background === over.style.background) {
            setTimeout(function () { alert('you won'); location.reload(); }, 500);
        }
        else { setTimeout(function () { alert('Not Match'); }, 500); }
    }
    if (lside === 20 && tside === 0) { runner.style.background = c1.style.background }
    if (lside === 30 && tside === 70) { runner.style.background = c2.style.background }
    if (lside === 80 && tside === 90) { runner.style.background = c3.style.background }
    if (lside === 60 && tside === 20) { runner.style.background = c4.style.background }
    if (lside === 0 && tside === 80) { runner.style.background = c5.style.background }

    runner.style.left = lside + "%";
    runner.style.top = tside + "%";

})

right.addEventListener('click', () => {
    if (lside !== 90) {
        if (lside === 0 && !(tside < 5) && tside <= 35) { }
        else if (lside === 0 && !(tside < 45) && tside <= 85) { }
        else if (lside === 15 && !(tside < 25) && tside <= 35) { }
        else if (lside === 15 && !(tside < 55) && tside <= 65) { }
        else if (lside === 35 && !(tside < 40) && tside <= 45) { }
        else if (lside === 50 && !(tside < 45) && tside <= 50) { }
        else if (lside === 60 && !(tside < 75) && tside <= 85) { }
        else if (lside === 75 && !(tside < 20) && tside <= 25) { }
        else if (lside === 75 && !(tside < 35) && tside <= 70) { }
        else { lside = lside + move; };
    };

    if (lside === 50 && tside === 40) {
        if (runner.style.background === over.style.background) {
            setTimeout(function () { alert('you won'); location.reload(); }, 500);
        }
        else { setTimeout(function () { alert('Not Match'); }, 500); }
    }
    if (lside === 20 && tside === 0) { runner.style.background = c1.style.background }
    if (lside === 30 && tside === 70) { runner.style.background = c2.style.background }
    if (lside === 80 && tside === 90) { runner.style.background = c3.style.background }
    if (lside === 60 && tside === 20) { runner.style.background = c4.style.background }
    if (lside === 0 && tside === 80) { runner.style.background = c5.style.background }

    runner.style.left = lside + "%";
    runner.style.top = tside + "%";
})