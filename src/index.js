import '../assets/css/style.css';
import '../assets/css/mdb.min.css';

const mainBtn = document.querySelector('#click-me');
const resetBtn = document.querySelector('#reset');
const daysSpan = document.querySelector('.days');

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
//////////////////////

// const CAT_URL = 'https://aws.random.cat/meow';

const catBtn = document.querySelector('.btn-cat');
const main = document.getElementById('main-div');
// const catContainer = document.querySelector('.cat-cont');
// const catimg = document.querySelector('#cat');
catBtn.addEventListener('click', async () => {
  // await fetch(CAT_URL)
  //   .then((res) => res.json())
  //   .then((res) => {
  //     catimg.src = res.file;
  //   });
  const div = document.createElement('div');
  div.className = 'col-sm-3 m-1';
  const img = document.createElement('img');
  img.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
  div.appendChild(img);
  main.appendChild(div);
});
