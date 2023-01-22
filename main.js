game = {
    inputSubmit: document.querySelector('input[type="submit"]'),
    inputNumber: document.querySelector('input[type="number"]'),
    result: document.querySelector('.answer'),
    playAgainSelector: document.getElementById('play-again'),
    randomNumber: 0,
    answer: 0,
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // Le maximum et le min sont inclus
    },
    verifAnswer() {
        this.answer = this.inputNumber.value;
        if (this.answer > this.randomNumber) {
            this.result.classList.remove('goodAnswer');
            this.result.classList.add('wrongAnswer');
            this.result.innerHTML = `Le bon nombre est <span>moins grand!</span>`;
        } else if (this.answer < this.randomNumber) {
            this.result.classList.remove('goodAnswer');
            this.result.classList.add('wrongAnswer');
            this.result.innerHTML = `Le bon nombre est <span>plus grand!</span>`;
        } else {
            this.result.classList.remove('wrongAnswer');
            this.result.classList.add('goodAnswer');
            this.result.innerHTML = `Le bon nombre a été <span>trouvé</span>`;
            this.playAgainSelector.classList.remove('play--again--hidden');
        }
        this.inputNumber.value = '';
    },
    resetGame() {
        this.inputNumber.value = "";
        this.result.innerHTML = "";
        this.randomNumber = this.getRandomIntInclusive(1, 10);
        this.answer = 0;
    },
    addEventListener() {
        this.inputSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            this.verifAnswer();
        });
        this.playAgainSelector.addEventListener('click', (e) => {
            e.preventDefault();
            this.playAgainSelector.classList.add('play--again--hidden');
            this.resetGame();
        });
    },
    setup() {
        this.randomNumber = this.getRandomIntInclusive(1, 10);
        this.addEventListener();
    }
}
game.setup();

