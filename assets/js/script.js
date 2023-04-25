const main = document.querySelector("#js_main");
const playButton = document.querySelector("#js-play-button");
const explains = document.querySelector("#js_explains_game");
const wined = document.querySelector("#js_wined");
const lost = document.querySelector("#js_lost");
const playAgainButton = document.querySelector("#js-play-again-button");

const header = document.querySelector("#js_header");

const scoreSection = document.querySelector("#js_score");
const gameSection = document.querySelector("#js_game");
const buttonNextRound = document.querySelector("#js_next_round");

let playerScore = 0;
const playerShowScore = document.querySelector("#js_player_score");
let computerScore = 0;
const computerShowScore = document.querySelector("#js_computer_score");

const playerStone = document.querySelector("#js_player_stone");
const playerPaper = document.querySelector("#js_player_paper");
const playerScissors = document.querySelector("#js_player_scissors");

const computerStone = document.querySelector("#js_computer_stone");
const computerPaper = document.querySelector("#js_computer_paper");
const computerScissors = document.querySelector("#js_computer_scissors");

let playerResult = "";
let computerResult = "";

const STONE = "stone";
const PAPER = "paper";
const SCISSORS = "scissors";

let roundNumber = 0;

let isClicked = false;

const addListeners = () => {
    playButton.addEventListener("click", playGame);
    playAgainButton.addEventListener("click", playGame);
    buttonNextRound.addEventListener("click", nextRound);
    playerStone.addEventListener("click", playerStoneChoice);
    playerPaper.addEventListener("click", playerPaperChoice);
    playerScissors.addEventListener("click", playerScissorsChoice);
};

const playGame = () => {
    main.classList.remove("main-pink")
    main.classList.add("main-blue");
    playerScore = 0;
    computerScore = 0;
    playerShowScore.textContent = playerScore;
    computerShowScore.textContent = computerScore;
    roundNumber = 0;
    wined.classList.add("hidden");
    lost.classList.add("hidden");
    playerStone.classList.remove("disabled");
    playerPaper.classList.remove("disabled");
    playerScissors.classList.remove("disabled");
    computerStone.classList.remove("disabled");
    computerPaper.classList.remove("disabled");
    computerScissors.classList.remove("disabled");
    playButton.classList.add("hidden");
    playAgainButton.classList.add("hidden");
    explains.classList.add("hidden");
    header.classList.add("header-game");
    scoreSection.classList.remove("hidden");
    gameSection.classList.remove("hidden");
    buttonNextRound.classList.remove("hidden");
};

const nextRound = () => {
    roundNumber++;
    isClicked = false;
    if (roundNumber === 5) {
        if (playerScore > computerScore) {
            main.classList.remove("main-blue");
            main.classList.add("main-pink");
            wined.classList.remove("hidden");
            playAgainButton.classList.remove("hidden");
            gameSection.classList.add("hidden");
            buttonNextRound.classList.add("hidden");
        } else {
            main.classList.remove("main-blue");
            main.classList.add("main-pink");
            lost.classList.remove("hidden");
            playAgainButton.classList.remove("hidden");
            gameSection.classList.add("hidden");
            buttonNextRound.classList.add("hidden");
        }
    } else {
        playerStone.classList.remove("disabled");
        playerPaper.classList.remove("disabled");
        playerScissors.classList.remove("disabled");
        computerStone.classList.remove("disabled");
        computerPaper.classList.remove("disabled");
        computerScissors.classList.remove("disabled");
    }
};

const playerStoneChoice = () => {
    if (!isClicked) {
        playerPaper.classList.add("disabled");
        playerScissors.classList.add("disabled");
        playerResult = STONE;
        computerchoice();
    }
    isClicked = true;
};

const playerPaperChoice = () => {
    if (!isClicked) {
        playerStone.classList.add("disabled");
        playerScissors.classList.add("disabled");
        playerResult = PAPER;
        computerchoice();
    }
    isClicked = true;
};

const playerScissorsChoice = () => {
    if (!isClicked) {
        playerStone.classList.add("disabled");
        playerPaper.classList.add("disabled");
        playerResult = SCISSORS;
        computerchoice();
    }
    isClicked = true;
};

const computerchoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        computerPaper.classList.add("disabled");
        computerScissors.classList.add("disabled");
        computerResult = STONE;
        result();
    } else if (computerChoice === 1) {
        computerStone.classList.add("disabled");
        computerScissors.classList.add("disabled");
        computerResult = PAPER;
        result();
    } else {
        computerStone.classList.add("disabled");
        computerPaper.classList.add("disabled");
        computerResult = SCISSORS;
        result();
    }
};

const result = () => {
    if (playerResult === computerResult) {
        winGame();
        loseGame();
    }

    if (playerResult == STONE && computerResult == SCISSORS) {
        winGame();
    } else if (playerResult == STONE && computerResult == PAPER) {
        loseGame();
    }

    if (playerResult == PAPER && computerResult == STONE) {
        winGame();
    } else if (playerResult == PAPER && computerResult == SCISSORS) {
        loseGame();
    }

    if (playerResult == SCISSORS && computerResult == PAPER) {
        winGame();
    } else if (playerResult == SCISSORS && computerResult == STONE) {
        loseGame();
    }
};

const winGame = () => {
    playerScore++;
    playerShowScore.textContent = playerScore;
};

const loseGame = () => {
    computerScore++;
    computerShowScore.textContent = computerScore;
};

addListeners();
