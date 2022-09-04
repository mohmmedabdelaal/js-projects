// import '../assets/css/style.css';
import '../assets/css/mdb.min.css';

const mainBtn = document.querySelector('#click-me');
const resetBtn = document.querySelector('#reset');
const daysSpan = document.querySelector('.days');
console.log(typeof birthYear);

function calcAge(age) {
  const now = new Date();
  const year = now.getFullYear();
  const myAge = (year - age) * 365;
  return myAge;
}

mainBtn.addEventListener('click', () => {
  const birthYear = +prompt('What is your year of Birth');
  daysSpan.innerHTML = calcAge(birthYear);
});

resetBtn.addEventListener('click', () => {
  daysSpan.innerHTML = '';
});
