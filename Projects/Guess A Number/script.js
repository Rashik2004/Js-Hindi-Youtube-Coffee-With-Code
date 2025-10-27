let randomNumber = Math.floor(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('.submit')
const remaining = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guess')
const startOver = document.querySelector('.result')
const LowOrHigh = document.querySelector('.LowOrHigh')

let prevGuess = []
const p = document.createElement('p')
let playGame = true
let numGuess = 1

        if (playGame) {
          submit.addEventListener('click', function (e) {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            console.log(guess);
            validateGuess(guess);
          });
        }

        function validateGuess(guess) {
            if (isNaN(guess)) {
                alert("Please enter a valid number")
            }
            else if (guess < 1) {
                alert("Please enter a number greater than or equal to 1")
            }
            else if (guess > 100) {
                alert("Please enter a number less than or equal to 100")
            } else {
                prevGuess.push(guess)
                if (numGuess === 10) {
                    displayGuess(guess)
                    displayMessage(`Game Over. The random number was ${randomNumber}`)
                    endGame();
                } else {
                    displayGuess(guess);
                    checkGuess(guess)
                }
            }
        }

        function checkGuess(guess) {
            if (guess === randomNumber) {
                displayMessage('🎉 You guessed right! Congratulations!')
                endGame()
            } else if (guess < randomNumber) {
                displayMessage("📉 The number is Too Low")
            }
            else if (guess > randomNumber) {
                displayMessage("📈 The number is Too High")
            }
        }

        function displayGuess(guess) {
          userInput.value = '';
          guessSlot.innerHTML += `${guess}, `;
          numGuess++;
          remaining.innerHTML = `${11 - numGuess}`;
        }

        function displayMessage(message) {
            LowOrHigh.innerHTML = `<h2>${message}</h2>`
        }

        function endGame() {
            userInput.value = ''
            userInput.setAttribute('disabled', '')
            p.classList.add('button')
            p.innerHTML = `<h2 id="startGame">Start New Game</h2>`
            startOver.appendChild(p)
            playGame = false
            newGame();
        }

        function newGame() {
            const newGameButton = document.querySelector('#startGame')
            newGameButton.addEventListener('click', function (e) {
                randomNumber = Math.floor(Math.random() * 100 + 1);
                prevGuess = [];
                numGuess = 1;
                guessSlot.innerHTML = '';
                remaining.innerHTML = `10`;
                userInput.removeAttribute('disabled');
                startOver.removeChild(p);
                LowOrHigh.innerHTML = '';
                playGame = true;
            });
        }
