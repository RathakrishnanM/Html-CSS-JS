const box = document.querySelector("#box");
const cells = document.querySelectorAll("#cell");
const choiceBtns = document.querySelectorAll(".choice-btn");
const choiceBox = document.querySelector("#choice");
const body = document.querySelector("body");
let userMark = "X";
let computerMark = "O";
let won = "draw";
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let userMoves = [];
let computerMoves = [];
let turn = "You";
const possibles = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const checkWon = (moves, turn) => {
  won = turn === "You" ? "You" : "Computer";
  const wonOrNot = possibles.filter((possible) =>
    possible.every((val, index) => moves.includes(val))
  );
  if (wonOrNot.length > 0) {
    if (confirm(won + " won!  Click okay to Restart")) {
      window.location.reload();
    }
    nums.length = 0;
  }
};

const computerTurn = () => {
  if (nums.length == 0) return;
  const index = Math.floor(Math.random() * nums.length);
  const val = nums[index];
  computerMoves.push(val);
  const cell = document.querySelector(`div[data-index="${val}"]`);
  cell.textContent = computerMark;
  cell.className = "markStyle";
  cell.style.pointerEvents = "none";
  nums.splice(index, 1);
  if (computerMoves.length > 2) checkWon(computerMoves, turn);
  turn = "You";
};

const userTurn = (cell) => {
  if (nums.length == 0) return;
  if (turn === "You") {
    const index = parseInt(cell.dataset.index, 10);
    userMoves.push(index);
    cell.textContent = userMark;
    cell.className = "markStyle";
    cell.style.pointerEvents = "none";
    nums.splice(nums.indexOf(index), 1);
    if (userMoves.length > 2) checkWon(userMoves, turn);
    turn = "computer";
    setTimeout(computerTurn, 500);
  }
};

const findUserChoice = (choice) => {
  if (choice === "o") {
    userMark = "O";
    computerMark = "X";
  }

  choiceBox.style.display = "none";
  document.body.style.setProperty("--display-control", "none");
};

cells.forEach((cell) => cell.addEventListener("click", () => userTurn(cell)));

choiceBtns.forEach((choiceBtn) =>
  choiceBtn.addEventListener("click", () =>
    findUserChoice(choiceBtn.getAttribute("data-btn-val"))
  )
);
