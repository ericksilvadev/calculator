const darkMode = document.querySelector('.toggle-dark');
const mainContainer = document.querySelector('.main');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const countKeys = document.querySelectorAll('.count');
const clearKey = document.querySelector('.clear');
const numberKeys = document.querySelectorAll('.number');
const currCount = document.querySelector('.curr-count');
const resultContainer = document.querySelector('.result');
const light = document.querySelector('.light-mode');
const dark = document.querySelector('.dark-mode');
const body = document.querySelector('body');
let theme = 'light';

// dark mode

const toggleDarkMode = () => {
  (theme === 'light' ? theme = 'dark' : theme ='light');
  mainContainer.classList.toggle('dark');
  keyboard.classList.toggle('dark');
  light.classList.toggle('dark');
  dark.classList.toggle('dark');
  darkMode.classList.toggle('dark');
  body.classList.toggle('dark');
  keys.forEach((key) => {
    if (key.classList.contains('count')) { return }
    else { key.classList.toggle('dark'); }
  });
  countKeys.forEach((key) => key.classList.toggle('dark'));
  localStorage.setItem('theme', theme);
};

darkMode.addEventListener('click', toggleDarkMode);

window.onload = () => {
  if (localStorage.theme === 'dark') { toggleDarkMode() }
  else { return };
}

// press numbers

let countUpdate = ''
const numbersArray = [];

const getNumbers = (evt) => {
  const number = Number(evt.target.id);
  countUpdate += number;
  currCount.innerHTML += number;
  numbersArray.push(number)
};

numberKeys.forEach((number) => number.addEventListener('click', getNumbers));

// clear key

clearKey.addEventListener('click', () => {
  currCount.innerHTML = '';
  resultContainer.innerHTML = '';
});

// equals

let result = 0;
const equalsBtn = document.querySelector('.equal');

equalsBtn.addEventListener('click', () => {
  const total = eval(currCount.innerHTML);
  console.log(total.toString().length);
  if (total.toString().length > 14) {
    resultContainer.style.fontSize = '23px';
  }
  if (total.toString().length > 19) {
    resultContainer.style.fontSize = '18px';
  }
  resultContainer.innerHTML = total;
})

// sum

const sumBtn = document.querySelector('.plus');

const sum = () => {
  currCount.innerHTML += ' + ';
};

sumBtn.addEventListener('click', sum);

// sub

const minusBtn = document.querySelector('.minus');

const sub = () => {
  currCount.innerHTML += ' - ';
};

minusBtn.addEventListener('click', sub);

// mult

const timesBtn = document.querySelector('.times');

const mult = () => {
  currCount.innerHTML += ' * ';
};

timesBtn.addEventListener('click', mult);

// div

const divBtn = document.querySelector('.div');

const div = () => {
  currCount.innerHTML += ' / ';
};

divBtn.addEventListener('click', div);

// percentage

// undo

const undoBtn = document.querySelector('.undo');

undoBtn.addEventListener('click', () => {
  currCount.innerHTML = '';
});
