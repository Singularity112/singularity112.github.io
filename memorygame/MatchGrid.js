class MatchGrid {
  gameView = null;
  gridView = null;
  gameState = null;
  gameSize = null;
  timerRef = null;
  selectedCard = null;

  isUiBlocked = false;
  isPlaying = false;

  timeLeft = 0;
  timerInterval = null;

  settings = {
    width: "800",
    height: "600",
    columns: 4,
    rows: 3,
    time: 30,
    theme: {
      color: "black",
      border: "1px solid lightgray",
      borderRadius: "12px",
      fontFamily: "sans-serif",
      gap: "20px",
      cardBackColor: "lightgray",
      cardColor: "grey",
    },
    symbols: [
      "😀",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
    ],
  };

  constructor(parentElement, settings = {}) {
    Object.assign(this.settings, settings);
    this.constructGameView(parentElement);

    this.gameSize = this.settings.columns * this.settings.rows;
    if (this.gameSize % 2 !== 0) {
      this.showErrorScreen("Card count can't be even");
      return;
    }

    if (this.gameSize / 2 > this.settings.symbols.length) {
      this.showErrorScreen("Not enough card images");
    }

    this.showPreGameScreen();
  }

  constructGameView(parentElement) {
    parentElement.innerHTML = "";
    const gameView = UI_Div("game-view");
    gameView.setAttribute(
      "style",
      `width:${this.settings.width}px;
        height:${this.settings.height}px;
        border:${this.settings.theme.border};
        font-family:${this.settings.theme.fontFamily};
        color: ${this.settings.theme.color};
        border-radius:${this.settings.theme.borderRadius};
        overflow: hidden`
    );

    this.gameView = gameView;

    this.resetScreen();
    parentElement.appendChild(gameView);
  }

  startGame() {
    this.isPlaying = true;
    this.gameState = [];
    this.resetScreen();
    this.formatGame();
    this.drawGame();
    this.runTimer();
  }

  runTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    if (this.isPlaying) {
      this.timerInterval = setInterval(this.updateTimer.bind(this), 200);
    }
  }

  pause() {
    clearInterval(this.timerInterval);
  }

  updateTimer() {
    this.timeLeft -= 0.2;
    this.timerRef.innerText = `🕑 Time left: ${this.timeLeft.toFixed(
      0
    )} seconds`;

    if (this.timeLeft <= 0) {
      clearInterval(this.timerInterval);
      this.showGameOverScreen("lose");
    }
  }

  formatGame() {
    this.timeLeft = this.settings.time;
    this.gameView.onmouseleave = this.pause.bind(this);
    this.gameView.onmouseenter = this.runTimer.bind(this);
    const neededSymbolAmount = this.gameSize / 2;

    const gameSymbols = getRandomFromArray(
      neededSymbolAmount,
      this.settings.symbols
    );

    const usingSymbols = [...gameSymbols, ...gameSymbols];

    for (let i = 0; i < this.gameSize; i++) {
      this.gameState.push(
        new Card(
          i,
          pickRandomFromArray(usingSymbols),
          this.handleCardClick,
          this,
          this.settings.theme.cardColor,
          this.settings.theme.cardBackColor
        )
      );
    }
  }

  handleCardClick(id) {
    if (this.isUiBlocked) {
      return;
    }

    const currentCard = this.gameState[id];

    if (this.selectedCard === currentCard) {
      return;
    }

    if (currentCard.isDone) {
      return;
    }

    if (!this.selectedCard) {
      this.selectedCard = currentCard;
      this.selectedCard.open();
      return;
    }

    if (this.selectedCard.symbol !== currentCard.symbol) {
      this.isUiBlocked = true;
      currentCard.open();

      setTimeout(() => {
        currentCard.close();
        this.selectedCard.close();
        this.isUiBlocked = false;
        this.selectedCard = null;
      }, 600);

      return;
    }

    if (this.selectedCard.symbol === currentCard.symbol) {
      currentCard.open();
      currentCard.markAsDone();
      this.selectedCard.markAsDone();
      this.selectedCard = null;
      this.checkGameCompletion();
    }
  }

  checkGameCompletion() {
    let isGameDone = true;

    for (let i = 0; i < this.gameState.length; i++) {
      if (!this.gameState[i].isDone) {
        isGameDone = false;
        return;
      }
    }

    if (isGameDone) {
      this.pause();
      this.showGameOverScreen("win");
    }
  }

  drawGame() {
    const timer = UI_Div(
      "timer",
      `🕑 Time left: ${this.settings.time} seconds`
    );
    this.timerRef = timer;
    const grid = UI_Div("game-grid");
    grid.setAttribute(
      "style",
      `grid-template-columns: repeat(${this.settings.columns}, 1fr);
      gap: ${this.settings.theme.gap}`
    );

    const cardRefs = this.gameState.map((item) => item.ref);

    appendChildren(grid, cardRefs);
    appendChildren(this.gameView, [timer, grid]);
    this.gameView.appendChild(grid);
  }

  resetScreen() {
    this.gameView.innerHTML = "";
  }

  showGameOverScreen(state) {
    this.resetScreen();
    this.isPlaying = false;

    const viewContainer = UI_Div("view-container");
    const menu = UI_Div("menu");
    const titleText = state === "win" ? "You win!" : "You lose :(";
    const title = UI_Div("title", titleText);
    const btn = UI_Button("Replay", this.startGame, this);

    viewContainer.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(btn);

    this.gameView.appendChild(viewContainer);
  }

  showErrorScreen(error) {
    this.resetScreen();

    const viewContainer = UI_Div("view-container");
    const menu = UI_Div("menu");
    const title = UI_Div("title", error);

    viewContainer.appendChild(menu);
    menu.appendChild(title);

    this.gameView.appendChild(viewContainer);
  }

  showPreGameScreen() {
    const viewContainer = UI_Div("view-container");
    const menu = UI_Div("menu");
    const title = UI_Div("title", "Memory Game");

    const btn = UI_Button("Start game", this.startGame, this);

    appendChildren(menu, [title, btn]);
    viewContainer.appendChild(menu);
    this.gameView.appendChild(viewContainer);
  }
}
