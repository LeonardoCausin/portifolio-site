const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.game-over');
let seconds = 0;
let gameInterval = null;

function formatTime(secs) {
  const min = Math.floor(secs / 60);
  const sec = secs % 60;
  return String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

function startGameTimer() {
  if (gameInterval) return;
  gameInterval = setInterval(() => {
    seconds++;
    document.getElementById("game-timer").textContent = formatTime(seconds);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(gameInterval);
  gameInterval = null;
}

function resetGameTimer() {
  stopGameTimer();
  seconds = 0;
  document.getElementById("game-timer").textContent = formatTime(0);
}

// Inicia automaticamente ao carregar (pode ser chamado ao começar o jogo)
startGameTimer();


const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {

    mario.classList.remove('jump');

  }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;
       
       gameover.src = './imagens/gameover.png'
       mario.src = './imagens/game-over.png'
       mario.style.width = '75px'
       mario.style.marginLeft = '50px'

       clearInterval(gameInterval);
       gameInterval = null;

       clearInterval(loop);
        
    }

}, 10);

document.addEventListener('keydown', jump);