const numberContainer = document.getElementById('number-container');
const message = document.getElementById('message');
const startButton = document.getElementById('start-button');

let numbers = [];
let currentNumber = 1;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createNumbers() {
  numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  shuffleArray(numbers);
  
  numberContainer.innerHTML = '';
  numbers.forEach(num => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = num;
    numberElement.addEventListener('click', () => checkNumber(num, numberElement));
    numberContainer.appendChild(numberElement);
  });
}

function checkNumber(num, element) {
  if (num === currentNumber) {
    element.classList.add('correct');
    currentNumber++;
    message.textContent = `Good job! Find number ${currentNumber}`;
    
    if (currentNumber > 10) {
      message.textContent = 'Congratulations! You counted to 10!';
      startButton.style.display = 'inline-block';
    }
  } else {
    message.textContent = `Oops! That's not the right number. Find number ${currentNumber}`;
  }
}

function startGame() {
  currentNumber = 1;
  message.textContent = `Find number ${currentNumber}`;
  startButton.style.display = 'none';
  createNumbers();
}

startButton.addEventListener('click', startGame);
startGame();
