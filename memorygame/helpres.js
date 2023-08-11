const animateButton = (btn, state) => {
  const isEnter = state === "enter";
  anime({
    targets: btn,
    scale: isEnter ? 1.1 : 1,
    duration: 300,
    elasticity: isEnter ? 500 : 300,
  });
};

const UI_Button = (text, onclick, context) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = text;
  btn.onclick = onclick.bind(context);

  btn.onmouseenter = () => animateButton(btn, "enter");
  btn.onmouseleave = () => animateButton(btn, "leave");

  return btn;
};

const UI_Div = (className, innerText = null) => {
  const div = document.createElement("div");
  div.classList.add(className);

  if (innerText) {
    div.innerText = innerText;
  }

  return div;
};

const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomFromArray = (amount, arr) => {
  const arrCopy = [...arr];
  const selected = [];

  for (let i = 0; i < amount; i++) {
    const idx = getRandomInt(arrCopy.length);
    selected.push(arrCopy[idx]);
    arrCopy.splice(idx, 1);
  }

  return selected;
};

const pickRandomFromArray = (arr) => {
  const idx = getRandomInt(arr.length);
  const selected = arr[idx];
  arr.splice(idx, 1);

  return selected;
};
