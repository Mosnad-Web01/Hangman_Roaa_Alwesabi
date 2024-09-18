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
    { word: 'internet', hint: 'A global network connecting millions of computers' },
    { word: 'juice', hint: 'A drink made from fruit' },
    { word: 'koala', hint: 'A marsupial native to Australia' },
    { word: 'ladder', hint: 'A structure used for climbing' },
    { word: 'mango', hint: 'A tropical fruit with a sweet taste' },
    { word: 'nose', hint: 'The part of the face used for smelling' },
    { word: 'owl', hint: 'A bird known for its hooting sound' },
    { word: 'penguin', hint: 'A flightless bird that lives in the southern hemisphere' },
    { word: 'quilt', hint: 'A warm bed covering' },
    { word: 'robot', hint: 'A machine capable of carrying out complex tasks' },
    { word: 'snow', hint: 'Frozen precipitation that falls from the sky' },
    { word: 'telephone', hint: 'A device used for voice communication' },
    { word: 'umbrella', hint: 'A device used for protection against rain' },
    { word: 'vacuum', hint: 'An electrical device used for cleaning floors' },
    { word: 'whale', hint: 'A large marine mammal' },
    { word: 'xylophone', hint: 'A musical instrument with wooden bars' },
    { word: 'yarn', hint: 'A long, thin strand used for knitting' },
    { word: 'zeppelin', hint: 'A large airship' },
    { word: 'ghost', hint: 'A spirit of a dead person' },
    { word: 'vampire', hint: 'A creature that drinks blood' },
    { word: 'witch', hint: 'A woman with magical powers' },
    { word: 'haunted', hint: 'A place full of ghosts' },
    { word: 'nightmare', hint: 'A scary dream' },
    { word: 'poltergeist', hint: 'A ghostly apparition' },
    { word: 'werewolf', hint: 'A human-wolf hybrid' },
    { word: 'spirit', hint: 'A person or thing that is alive but not physically present' },
    { word: 'death', hint: 'The end of life' },
    { word: 'halloween', hint: 'A festival celebrated on October 31st' },
    { word: 'apple', hint: 'A red, green, or yellow fruit' },
    { word: 'Tokyo', hint: 'Capital of Japan' },
    { word: 'kiwi', hint: 'A small fruit with a brown skin and green inside' },
    { word: 'Berlin', hint: 'Capital of Germany' },
    { word: 'banana', hint: 'A long, yellow fruit' },
    { word: 'Paris', hint: 'Capital of France' },
    { word: 'grape', hint: 'Small fruit that comes in clusters' },
    { word: 'Rome', hint: 'Capital of Italy' },
    { word: 'mango', hint: 'A sweet, yellow or orange fruit' },
    { word: 'Beijing', hint: 'Capital of China' },
    { word: 'carrot', hint: 'An orange root vegetable' },
    { word: 'Ottawa', hint: 'Capital of Canada' },
    { word: 'lemon', hint: 'A sour, yellow fruit' },
    { word: 'Madrid', hint: 'Capital of Spain' },
    { word: 'pear', hint: 'A fruit with a shape like a teardrop' },
    { word: 'Moscow', hint: 'Capital of Russia' },
    { word: 'pineapple', hint: 'A tropical fruit with a rough skin and sweet flesh' },
    { word: 'Athens', hint: 'Capital of Greece' },
    { word: 'orange', hint: 'A round, citrus fruit that is orange in color' },
    { word: 'Vienna', hint: 'Capital of Austria' }
];


// Start game on clicking Start button
// تعريف المتغيرات الرئيسية
const playAgainWinButton = document.getElementById('play-again-win');

// بدء اللعبة عند الضغط على زر Start
document.getElementById('start-button').addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    startGame();
});

// بدء لعبة جديدة
function startGame() {
    // إعادة تعيين المتغيرات
    lives = 10;
    livesCounterElement.textContent = `Lives: ${lives}`;
    alphabetButtonsElement.innerHTML = '';
    hangmanElement.innerHTML = `<img src="images/1.jpg" alt="Prison">`;
    playAgainButton.style.display = 'none';
    gameOverPopup.style.display = 'none';
    winPopup.style.display = 'none';

    // اختيار كلمة عشوائية من قائمة التلميحات
    const randomIndex = Math.floor(Math.random() * hints.length);
    const selectedHint = hints[randomIndex];
    randomWord = selectedHint.word;
    hint = selectedHint.hint;

    // عرض التلميح
    hintElement.textContent = hint ? `Hint: ${hint}` : 'No hint available for this word';

    // إنشاء خطوط فارغة
    wordBlanksElement.textContent = '_ '.repeat(randomWord.length).trim();

    // إنشاء أزرار الحروف
    createAlphabetButtons();

    // تشغيل موسيقى الخلفية
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
    backgroundMusic.volume = 0.5;
}

// الحصول على تلميح للكلمة العشوائية
function getHint(word) {
    const hintObject = hints.find(h => h.word === word);
    return hintObject ? hintObject.hint : '';
}

// إنشاء أزرار الحروف الأبجدية
function createAlphabetButtons() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter.toUpperCase();
        button.addEventListener('click', () => handleGuess(letter, button));
        alphabetButtonsElement.appendChild(button);
    });
}

// التعامل مع تخمين المستخدم
function handleGuess(letter, button) {
    button.disabled = true;
    letter = letter.toLowerCase(); // تحويل الحرف إلى صغير
    const lowerCaseWord = randomWord.toLowerCase(); // تحويل الكلمة إلى صغيرة
    if (lowerCaseWord.includes(letter)) {
        const currentDisplay = wordBlanksElement.textContent.split(' ');
        for (let i = 0; i < randomWord.length; i++) {
            if (lowerCaseWord[i] === letter) {
                currentDisplay[i] = randomWord[i].toUpperCase(); // عرض الحرف الصحيح بالحالة الأصلية
            }
        }
        wordBlanksElement.textContent = currentDisplay.join(' ');

        // التحقق من الفوز
        if (!currentDisplay.includes('_')) {
            backgroundMusic.pause();
            winMessage.textContent = `Congratulations! You survived! The correct word was ${randomWord.toUpperCase()}.`;
            winPopup.style.display = 'block';
            playAgainButton.style.display = 'block';  // عرض زر اللعب من جديد
            
            // إضافة حدث الضغط على زر اللعب من جديد
            playAgainButton.addEventListener('click', () => {
                resetGame();
            });
        }
    } else {
        lives--;
        livesCounterElement.textContent = `Lives: ${lives}`;
        errorSound.play();

        // تحديث صورة المشنوق
        const imageIndex = 10 - lives;
        if (imageIndex >= 1 && imageIndex <= hangmanImages.length) {
            hangmanElement.innerHTML = `<img src="${hangmanImages[imageIndex - 1]}" alt="Hangman Stage">`;
        }

        // زيادة توتر الموسيقى
        backgroundMusic.playbackRate += 0.05;

        // التحقق من الخسارة
        if (lives === 0) {
            backgroundMusic.pause();
            gameOverSound.play();
            wordBlanksElement.textContent = randomWord.toUpperCase().split('').join(' ');

            // عرض نافذة الخسارة
            gameOverPopup.style.display = 'block';
            gameOverPopup.querySelector('.popup-text').textContent = `You Lost! The correct word was ${randomWord.toUpperCase()}.`;
            disableAllButtons();
        }
    }
}

// تعطيل جميع الأزرار
function disableAllButtons() {
    const buttons = document.querySelectorAll('#alphabet-buttons button');
    buttons.forEach(button => button.disabled = true);
}

// بدء لعبة جديدة عند الضغط على زر Play Again
restartButton.addEventListener('click', startGame);

// إغلاق نافذة الفوز وإعادة بدء اللعبة
playAgainButton.addEventListener('click', startGame);

// إغلاق نافذة الفوز وإعادة بدء اللعبة عبر زر الفوز الخاص
playAgainWinButton.addEventListener('click', startGame);
