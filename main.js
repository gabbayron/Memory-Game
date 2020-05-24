var divCards = document.getElementById('divCards');
var checkCounter = 0;
var redCardSrc = "img/red.png"
var cardsArr = document.getElementsByClassName('cards')
var pickedImg1;
var pickedImg2;
var check1Src;
var check2Src;
var imgArr = []
var resetBtn = document.getElementById('resetBtn')

// Creating Back Cards Array

for (var i = 0; i < 12; i++) {
    imgArr.push(generateImg(generateNum()))
    // checkCounter = 0
}

function replaceImg(e) {
    if (checkCounter <= 1) {
        img = e.target
        checkCounter++
        if (checkCounter === 1) {
            pickedImg1 = img
            check1Src = imgArr[img.id - 1]
        }
        if (checkCounter === 2) {
            pickedImg2 = img
            check2Src = imgArr[img.id - 1]
        }
        img.src = imgArr[img.id - 1]
    }
    if (checkCounter === 2) {
        setTimeout(checkAnswer, 200)
        checkCounter = 0
    }
}

function generateNum() {
    return Math.ceil(Math.random() * 4)
}

function generateImg(num) {

    val = num
    if (num === 1) {
        return "img/a.png"
    }
    if (num === 2) {
        return "img/b.png"
    }
    if (num === 3) {
        return "img/c.png"
    }
    if (num === 4) {
        return "img/d.png"
    }
}

function checkAnswer() {
    if (check1Src === check2Src) {
        alert('You Are Correct')
        removeCards()
    }
    else {
        alert('Try Again Please')
        returnCards()
    }
}

// If the answer is wrong and need to show the previous cards

function returnCards() {
    pickedImg1.src = redCardSrc;
    pickedImg2.src = redCardSrc;
}

// in case the answer is correct and cards
// needs to be removed

function removeCards() {
    pickedImg1.style.visibility = 'hidden'
    pickedImg2.style.visibility = 'hidden'
}

function resetGame() {
    imgArr = []
    for (var i = 0; i < 12; i++) {
        cardsArr[i].src = redCardSrc
        cardsArr[i].style.visibility = 'visible'
        imgArr.push(generateImg(generateNum()))
        checkCounter = 0
    }
}

divCards.addEventListener('click', replaceImg);
resetBtn.addEventListener('click', resetGame)