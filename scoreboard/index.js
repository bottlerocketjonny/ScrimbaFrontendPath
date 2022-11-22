let homeScore = 0;
let awayScore = 0;

let homeEl = document.getElementById("home-el");
let awayEl = document.getElementById("away-el");

function incrementHomeByOne() {
    homeScore = homeScore + 1;
    homeEl.innerText = homeScore;
}

function incrementHomeByTwo() {
    homeScore = homeScore + 2;
    homeEl.innerText = homeScore;
}

function incrementHomeByThree() {
    homeScore = homeScore + 3;
    homeEl.innerText = homeScore;
}

function incrementAwayByOne() {
    awayScore = awayScore + 1;
    awayEl.innerText = awayScore;
}

function incrementAwayByTwo() {
    awayScore = awayScore + 2;
    awayEl.innerText = awayScore;
}

function incrementAwayByThree() {
    awayScore = awayScore + 3;
    awayEl.innerText = awayScore;
}

function resetScore() {
    homeScore = 0;
    awayScore = 0;
    homeEl.innerText = homeScore;
    awayEl.innerText = awayScore;
}