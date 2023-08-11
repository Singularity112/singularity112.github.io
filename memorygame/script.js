const matchGrid = new MatchGrid(document.getElementById("game"));

const matchGrid2 = new MatchGrid(document.getElementById("game2"), {
  width: 1000,
  height: 600,
  columns: 2,
  rows: 2,
  time: 60,
});

const matchGrid3 = new MatchGrid(document.getElementById("game3"), {
  columns: 3,
  rows: 4,
  symbols: [1, 2, 3, 4, 5, 6, 7, 8],
});

const matchGrid4 = new MatchGrid(document.getElementById("game4"), {
  theme: {
    color: "red",
    cardBackColor: "green",
    cardColor: "blue",
    gap: "40px",
  },
});

let columns = 2;
let rows = 2;
let time = 30;

function onRowChange(value) {
  rows = parseInt(value) || 3;
  startGame();
}

function onColumnChange(value) {
  columns = parseInt(value) || 4;
  startGame();
}

function onTimerChange(value) {
  time = parseInt(value) || 30;
  startGame();
}

let game5;
function startGame() {
  game5 = new MatchGrid(document.getElementById("game5"), {
    columns,
    rows,
    time,
  });
}
