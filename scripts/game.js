// Define variables and elements
let randomWord = '';
let lives = 10;
let hint = '';
const hangmanImages = [
    'images/prison.jpg',
    'images/prison2.jpg',
    'images/prison3.jpg',
    'images/prison4.jpg',
    'images/prison5.jpg',
    'images/prison6.jpg',
    'images/prison7.jpg',
    'images/prison8.jpg',
    'images/prison9.jpg',
    'images/prison10.jpg',
];

const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const hangmanElement = document.getElementById('hangman');
const hintElement = document.getElementById('hint');
const wordBlanksElement = document.getElementById('word-blanks');
const alphabetButtonsElement = document.getElementById('alphabet-buttons');
const livesCounterElement = document.getElementById('lives-counter');
const playAgainButton = document.getElementById('play-again');

const darkMusic = document.getElementById('dark-music');
const thunderSound = document.getElementById('thunder-sound');
const sadMusic = document.getElementById('sad-music');
const gameOverSadMusic = document.getElementById('game-over-sad-music');

const backgroundMusic = document.getElementById('background-music');
const errorSound = document.getElementById('error-sound');
const gameOverSound = document.getElementById('game-over-sound');

// Pop-up elements
const gameOverPopup = document.getElementById('game-over-popup');
const restartButton = document.getElementById('restart-button');
const winPopup = document.getElementById('win-popup');
const winMessage = document.getElementById('win-message');

// Hint list
const hints = [
    { word: 'apple', hint: 'A common fruit' },
    { word: 'banana', hint: 'A yellow tropical fruit' },
    { word: 'cat', hint: 'A small domesticated carnivorous mammal' },
    { word: 'dog', hint: 'Man\'s best friend' },
    { word: 'elephant', hint: 'The largest land animal' },
    { word: 'fish', hint: 'An aquatic animal' },
    { word: 'giraffe', hint: 'A tall animal with a long neck' },
    { word: 'house', hint: 'A place where people live' },
    { word: 'island', hint: 'Land surrounded by water' },
    { word: 'jacket', hint: 'A piece of clothing worn on the upper body' },
    { word: 'kangaroo', hint: 'An Australian marsupial' },
    { word: 'lemon', hint: 'A sour yellow fruit' },
    { word: 'moon', hint: 'The Earth\'s natural satellite' },
    { word: 'notebook', hint: 'A book of blank pages for writing notes' },
    { word: 'orange', hint: 'A citrus fruit' },
    { word: 'pencil', hint: 'A tool used for writing or drawing' },
    { word: 'quilt', hint: 'A warm bed covering' },
    { word: 'rabbit', hint: 'A small mammal with long ears' },
    { word: 'sun', hint: 'The star at the center of our solar system' },
    { word: 'tree', hint: 'A large plant with a trunk and branches' },
    { word: 'umbrella', hint: 'A device used for protection against rain' },
    { word: 'vase', hint: 'A container used to hold flowers' },
    { word: 'whale', hint: 'The largest mammal' },
    { word: 'xylophone', hint: 'A musical instrument with wooden bars' },
    { word: 'yogurt', hint: 'A dairy product made by fermenting milk' },
    { word: 'zebra', hint: 'An African wild horse with black-and-white stripes' },
    { word: 'airplane', hint: 'A vehicle designed for air travel' },
    { word: 'ball', hint: 'A round object used in games' },
    { word: 'car', hint: 'A road vehicle with an engine, four wheels, and seats' },
    { word: 'door', hint: 'A movable barrier for opening and closing an entrance' },
    { word: 'egg', hint: 'An oval or round object laid by a female bird' },
    { word: 'flower', hint: 'The reproductive structure of a plant' },
    { word: 'guitar', hint: 'A musical instrument with six strings' },
    { word: 'hat', hint: 'A head covering' },
    { word: 'ice', hint: 'Frozen water' },
    { word: 'jelly', hint: 'A sweet, gel-like substance' },
    { word: 'kite', hint: 'A toy that flies in the wind' },
    { word: 'lamp', hint: 'A device that produces light' },
    { word: 'mirror', hint: 'A reflective surface' },
    { word: 'nest', hint: 'A structure built by birds to hold eggs' },
    { word: 'octopus', hint: 'A sea creature with eight arms' },
    { word: 'pen', hint: 'A tool used for writing with ink' },
    { word: 'quartz', hint: 'A hard, crystalline mineral' },
    { word: 'rose', hint: 'A type of flower with thorny stems' },
    { word: 'star', hint: 'A luminous point in the night sky' },
    { word: 'tiger', hint: 'A large wild cat with a striped coat' },
    { word: 'violin', hint: 'A string instrument played with a bow' },
    { word: 'water', hint: 'A colorless, transparent liquid essential for life' },
    { word: 'x-ray', hint: 'A type of radiation used for medical imaging' },
    { word: 'yacht', hint: 'A large boat used for pleasure sailing' },
    { word: 'zoo', hint: 'A facility where animals are kept for public display' },
    { word: 'anchor', hint: 'A heavy object used to moor a vessel' },
    { word: 'beach', hint: 'A sandy shore by the sea' },
    { word: 'candle', hint: 'A stick of wax with a wick that burns to provide light' },
    { word: 'dragon', hint: 'A mythical creature resembling a large reptile' },
    { word: 'engine', hint: 'A machine that converts energy into mechanical force' },
    { word: 'feather', hint: 'A structure forming the plumage of birds' },
    { word: 'glove', hint: 'A covering for the hand' },
    { word: 'hammer', hint: 'A tool with a heavy head used for driving nails' },
    { word: 'insect', hint: 'A small arthropod animal with six legs' },
    { word: 'jungle', hint: 'A dense forest in a tropical region' },
    { word: 'kettle', hint: 'A container used for boiling water' },
    { word: 'leopard', hint: 'A large wild cat with a spotted coat' },
    { word: 'mountain', hint: 'A large natural elevation of the earth\'s surface' },
    { word: 'needle', hint: 'A small thin tool used for sewing' },
    { word: 'ocean', hint: 'A vast body of salt water' },
    { word: 'piano', hint: 'A large keyboard musical instrument' },
    { word: 'queen', hint: 'A female ruler of a country' },
    { word: 'ring', hint: 'A small circular band worn on a finger' },
    { word: 'sand', hint: 'Small grains of rock found on beaches' },
    { word: 'train', hint: 'A series of connected vehicles that run on rails' },
    { word: 'vulture', hint: 'A large bird of prey' },
    { word: 'whistle', hint: 'A small device that makes a sound when blown' },
    { word: 'xenon', hint: 'A chemical element used in lighting' },
    { word: 'yawn', hint: 'An involuntary opening of the mouth due to tiredness' },
    { word: 'zipper', hint: 'A fastening device with interlocking teeth' },
    { word: 'airport', hint: 'A place where airplanes take off and land' },
    { word: 'bicycle', hint: 'A vehicle with two wheels powered by pedals' },
    { word: 'clock', hint: 'A device used to tell time' },
    { word: 'desert', hint: 'A barren area of land with little rain' },
    { word: 'eleven', hint: 'A number that comes after ten' },
    { word: 'forest', hint: 'A large area covered chiefly with trees' },
    { word: 'gold', hint: 'A precious yellow metal' },
    { word: 'helmet', hint: 'A protective head covering' },
    { word: 'igloo', hint: 'A dome-shaped house built from ice' },
    { word: 'jigsaw', hint: 'A puzzle with interlocking pieces' },
    { word: 'key', hint: 'A small metal object used to open locks' },
    { word: 'lighthouse', hint: 'A tower with a light that guides ships' },
    { word: 'mushroom', hint: 'A fungus with a stem and cap' },
    { word: 'notebook', hint: 'A book of blank pages for writing notes' },
    { word: 'octopus', hint: 'A sea creature with eight arms' },
    { word: 'penguin', hint: 'A flightless bird living in the southern hemisphere' },
    { word: 'quilt', hint: 'A warm bed covering' },
    { word: 'robot', hint: 'A machine capable of carrying out a complex series of actions' },
    { word: 'scissors', hint: 'A tool for cutting paper or cloth' },
    { word: 'telescope', hint: 'An instrument for observing distant objects' },
    { word: 'umbrella', hint: 'A device used for protection against rain' },
    { word: 'vaccine', hint: 'A substance used to stimulate immunity to diseases' },
    { word: 'wheel', hint: 'A circular object that rotates' },
    { word: 'xylophone', hint: 'A musical instrument with wooden bars' },
    { word: 'yogurt', hint: 'A dairy product made by fermenting milk' },
    { word: 'zebra', hint: 'An African wild horse with black-and-white stripes' }
];

// Function to select a random word and hint
function selectRandomWord() {
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    randomWord = randomHint.word;
    hint = randomHint.hint;
    hintElement.textContent = `Hint: ${hint}`;
    initializeWordBlanks();
}

// Initialize word blanks with underscores
function initializeWordBlanks() {
    const underscores = randomWord.split('').map(() => '_').join(' ');
    wordBlanksElement.textContent = underscores;
}

// Function to handle letter guesses
function handleGuess(letter, button) {
    button.disabled = true;
    letter = letter.toLowerCase(); // Convert letter to lowercase
    const lowerCaseWord = randomWord.toLowerCase(); // Convert the word to lowercase
    if (lowerCaseWord.includes(letter)) {
        const currentDisplay = wordBlanksElement.textContent.split(' ');
        for (let i = 0; i < randomWord.length; i++) {
            if (lowerCaseWord[i] === letter) {
                currentDisplay[i] = randomWord[i].toUpperCase(); // Display correct letter in original case
            }
        }
        wordBlanksElement.textContent = currentDisplay.join(' ');

        // Check for win
        if (!currentDisplay.includes('_')) {
            backgroundMusic.pause();
            winMessage.textContent = `Congratulations! You survived! The correct word was ${randomWord.toUpperCase()}.`;
            winPopup.style.display = 'block';
            playAgainButton.style.display = 'block';  // Show play again button
            
            // Add click event for play again button
            playAgainButton.addEventListener('click', () => {
                resetGame();
            });
        }
    } else {
        lives--;
        livesCounterElement.textContent = `Lives: ${lives}`;
        errorSound.play();

        // Update hangman image
        const imageIndex = 10 - lives;
        if (imageIndex >= 1 && imageIndex <= hangmanImages.length) {
            changeHangmanImage(hangmanImages[imageIndex - 1]);
        }

        // Increase music tension
        backgroundMusic.playbackRate += 0.05;

        // Check for loss
        if (lives === 0) {
            backgroundMusic.pause();
            gameOverSound.play();
            wordBlanksElement.textContent = randomWord.toUpperCase().split('').join(' ');

            // Show game over popup
            gameOverPopup.style.display = 'block';
            gameOverPopup.querySelector('.popup-text').textContent = `You Lost! The correct word was ${randomWord.toUpperCase()}.`;
            disableAllButtons();
        }
    }
}

// Function to change hangman image smoothly
function changeHangmanImage(imageUrl) {
    // First, fade out the current image
    hangmanElement.classList.add('fade-out');
    
    // After the fade-out transition ends, change the image
    setTimeout(() => {
        hangmanElement.innerHTML = `<img src="${imageUrl}" alt="Hangman Stage">`;
        
        // Then, fade in the new image
        hangmanElement.classList.remove('fade-out');
    }, 500); // Adjust this time to match the fade-out duration
}

// Function to disable all buttons
function disableAllButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

// Function to reset the game
function resetGame() {
    lives = 10;
    livesCounterElement.textContent = `Lives: ${lives}`;
    selectRandomWord();
    hangmanElement.innerHTML = `<img src="${hangmanImages[0]}" alt="Hangman Stage">`;
    winPopup.style.display = 'none';
    gameOverPopup.style.display = 'none';
    backgroundMusic.play();
    initializeAlphabetButtons();
}

// Initialize alphabet buttons
function initializeAlphabetButtons() {
    alphabetButtonsElement.innerHTML = '';
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter.toUpperCase();
        button.addEventListener('click', () => handleGuess(letter, button));
        alphabetButtonsElement.appendChild(button);
    });
}

// Add CSS for smooth image transition
const style = document.createElement('style');
style.textContent = `
    #hangman {
        transition: opacity 0.5s ease;
    }
    #hangman.fade-out {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Start the game
function startGame() {
    welcomeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    resetGame();
}

// Start the game when the page loads
window.onload = startGame;
