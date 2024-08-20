const justin = document.querySelector('.justin');
const wolf = document.querySelector('.wolf');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board');
const gameOverBoard = document.querySelector('.gameover-board');



const jump = () => {
    if (event.code === "Space") {
        justin.classList.add("jump");
        setTimeout(() => {
            justin.classList.remove("jump");
        }, 400)
    }
}

document.addEventListener("keydown", jump);

const wolfjump = () => {
    if (event.code === "Space") {
        wolf.classList.add("wolfjump");
        setTimeout(() => {
            wolf.classList.remove("wolfjump");
        }, 680)
    }
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const justinPosition = +window.getComputedStyle(justin).bottom.replace('px', '');


    if (pipePosition <= 174 && pipePosition > 120 && justinPosition < 30) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        justin.style.animation = 'none';
        justin.style.bottom = `${justinPosition}px`;
        justin.style.width = '20px';

        clearInterval(loop)
    }

}, 10);


document.addEventListener("keydown", wolfjump);
