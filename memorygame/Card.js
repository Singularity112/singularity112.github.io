class Card {
  isDone = false;

  constructor(id, symbol, handleCardClick, context, color, bgColor) {
    this.id = id;
    this.symbol = symbol;

    const ref = UI_Div("card");
    ref.onclick = handleCardClick.bind(context, id);

    const cardHolder = UI_Div("card-holder");
    const cardFront = UI_Div("card-front");
    const cardBack = UI_Div("card-back");

    cardFront.setAttribute("style", `background-color: ${color}`);
    cardBack.setAttribute("style", `background-color: ${bgColor}`);

    appendChildren(cardHolder, [cardFront, cardBack]);
    ref.appendChild(cardHolder);

    this.holderRef = cardHolder;
    this.frontRef = cardFront;
    this.ref = ref;
  }

  open() {
    anime({
      targets: this.holderRef,
      rotateY: 180,
      easing: "easeInOutQuad",
      duration: 500,
    });
    this.frontRef.innerHTML = this.symbol;
  }

  close() {
    anime({
      targets: this.holderRef,
      rotateY: 0,
      easing: "easeInOutQuad",
      duration: 500,
    });

    setTimeout(() => {
      this.frontRef.innerHTML = "";
    }, 500);
  }

  markAsDone() {
    this.isDone = true;
  }
}
