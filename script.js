// ==============================
// VARIABLE VOTES
// ==============================

let gameVotes = 0;
let storeVotes = 0;
let todoVotes = 0;
let quizVotes = 0;

let totalVotes = 0;


// ==============================
// AMBIL ELEMENT DARI HTML
// ==============================

const gameButton = document.querySelector("#gameBtn");
const storeButton = document.querySelector("#storeBtn");
const todoButton = document.querySelector("#todoBtn");
const quizButton = document.querySelector("#quizBtn");

const gameVoteText = document.querySelector("#gameVotes");
const storeVoteText = document.querySelector("#storeVotes");
const todoVoteText = document.querySelector("#todoVotes");
const quizVoteText = document.querySelector("#quizVotes");

const totalVoteText = document.querySelector("#totalVotes");
const feedback = document.querySelector("#feedback");


// ==============================
// FUNCTION UPDATE TOTAL
// ==============================

function updateTotal() {
    totalVoteText.textContent = totalVotes;
}


// ==============================
// MINI GAME
// ==============================

gameButton.addEventListener("click", function () {

    gameVotes++;
    totalVotes++;

    gameVoteText.textContent = gameVotes;

    updateTotal();

    feedback.textContent = "✅ Kamu memilih Mini Game 🎮";
});


// ==============================
// MINI STORE
// ==============================

storeButton.addEventListener("click", function () {

    storeVotes++;
    totalVotes++;

    storeVoteText.textContent = storeVotes;

    updateTotal();

    feedback.textContent = "✅ Kamu memilih Mini Store 🛒";
});


// ==============================
// TO-DO APP
// ==============================

todoButton.addEventListener("click", function () {

    todoVotes++;
    totalVotes++;

    todoVoteText.textContent = todoVotes;

    updateTotal();

    feedback.textContent = "✅ Kamu memilih To-Do App 📝";
});


// ==============================
// QUIZ APP
// ==============================

quizButton.addEventListener("click", function () {

    quizVotes++;
    totalVotes++;

    quizVoteText.textContent = quizVotes;

    updateTotal();

    feedback.textContent = "✅ Kamu memilih Quiz App 🧠";
});