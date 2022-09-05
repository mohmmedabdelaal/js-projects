import '../assets/css/style.css';
import '../assets/css/mdb.min.css';
/**
 * 
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

*/

////// RPS Game \\\\\\\\\\

const game = () => {
  const img = document.querySelectorAll('img');
  const main = document.querySelector('.rsp');
  const rockImg = document.getElementById('rock').src;
  const paperImg = document.getElementById('paper').src;
  const scissorImg = document.getElementById('scissor').src;

  // const playerOptions = [rockImg, paperImg, scissorImg];
  let botChoice = ['rock', 'paper', 'scissor'];
  let choiceNum = Math.floor(Math.random() * botChoice.length);
  const compRps = botChoice[choiceNum];
  const finalMsg = (myChoice, compRps) => {
    let message = {};
    if (myChoice === compRps) {
      message = { msg: 'Tie', color: 'brown' };
    } else if (myChoice === 'rock' && compRps === 'scissor') {
      message = { msg: 'You Won', color: 'green' };
    } else if (myChoice === 'scissor' && compRps === 'paper') {
      message = { msg: 'You Won', color: 'green' };
    } else if (myChoice === 'paper' && compRps === 'rock') {
      message = { msg: 'You Won', color: 'green' };
    } else {
      message = { msg: 'You Lost', color: 'red' };
    }
    return message;
  };

  const displayWinner = (myChoice, compRps, finalMsg) => {
    const allChoices = {
      rock: rockImg,
      scissor: scissorImg,
      paper: paperImg,
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    const myDiv = document.createElement('div');
    const botDiv = document.createElement('div');
    const resultDiv = document.createElement('div');
    myDiv.innerHTML = `<img src="${allChoices[myChoice]}" />`;
    botDiv.innerHTML = `<img src="${allChoices[compRps]}" />`;
    resultDiv.textContent = finalMsg.msg;

    main.appendChild(myDiv);
    main.appendChild(botDiv);
    main.appendChild(resultDiv);
  };

  console.log(compRps);
  img.forEach((img) => {
    img.addEventListener('click', function () {
      let myChoice = this.id;
      // finalMsg(myChoice, compRps);
      displayWinner(myChoice, compRps, finalMsg(myChoice, compRps));
    });
  });
};

game();
