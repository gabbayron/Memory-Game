var divCards = document.getElementById('divCards');
var checkCounter = 0;
var img1;
var img2;
var originalSrc1;
var originalSrc2;
var originalImgId1;
var originalImgId2;

divCards.addEventListener('click', replaceImg);
var randomNum;

function replaceImg(e) {
    if (checkCounter <= 1) {
        img = e.target
        if (checkCounter === 0) {
            originalSrc1 = img.src
            originalImgId1 = img
        }
        if (checkCounter === 1) {
            originalSrc2 = img.src
            originalImgId2 = img
        }
        img.src = generateImg(generateNum())
        checkValue(val)
    }
    if (checkCounter === 2) {
        setTimeout(checkAnswer, 300)
        checkCounter = 0
    }
}

function generateNum() {
    return Math.ceil(Math.random() * 4)
}

function generateImg(num) {
    checkCounter++
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


function checkValue(value) {
    if (checkCounter === 1) {
        img1 = value
    }
    if (checkCounter === 2) {
        img2 = value
    }
}


function checkAnswer() {
    if (img1 === img2) {
        alert('you are correct')
        removeCards()
        img1 = 1 // just so they wont be the same 
        img2 = 0
    }
    else {
        alert('try again son')
        img1 = 1
        img2 = 0
        returnCards()
    }
}

// If the answer is wrong and need to show the previous cards

function returnCards() {
    originalImgId1.src = originalSrc1;
    originalImgId2.src = originalSrc2;
}

// in case the answer is correct and cards
// needs to be removed

function removeCards() {
    originalImgId1.style.display = 'none'
    originalImgId2.style.display = 'none'
}