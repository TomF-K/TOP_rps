// select elements for player selection

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// set up an array for computerChoice  

const computerChoice = ['rock', 'paper', 'scissors'];

// create a function that randomly returns the computer choice

let randomNumber = Math.floor(Math.random() * computerChoice.length);

console.log(randomNumber);

function getComputerChoice() {
    return computerChoice[randomNumber]};

console.log(getComputerChoice());