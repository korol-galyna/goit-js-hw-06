
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueData = document.querySelector('#value');

const handleClickDec = () => {
  counterValue -= 1;
  valueData.textContent = counterValue;;
};

decrementButton.addEventListener("click", handleClickDec);

const handleClickInc = () => {
  counterValue += 1;
  valueData.textContent = counterValue;;
};

incrementButton.addEventListener("click", handleClickInc);






