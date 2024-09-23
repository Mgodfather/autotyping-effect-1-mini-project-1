const words = document.querySelector('.words')
const wordList = ['plumber', 'doctor', 'delivery Boy', 'boss', 'trainer', 'brother']

let cursor = document.querySelector('.words::after')

autoTyping(wordList, words)  
function autoTyping(wordList, element) {

let wordIndex = 0
let characterIndex = 0
let reverseType = false

let skipTime = 0

setInterval(() => {
    
    if (skipTime) {
        skipTime--
        return
    }
    
    if (!reverseType) {
        skipTime = 1
        element.innerText = element.innerText + wordList[wordIndex][characterIndex]
       characterIndex++
    }else{
        element.innerText = element.innerText.slice(0, element.innerText.length - 1)
        characterIndex--
    }
    if (element.innerText.length === 0 && reverseType) {
        characterIndex = 0
        reverseType = false
        wordIndex++
    }
    if (wordList.length === wordIndex) {
        wordIndex = 0
    }
    if (characterIndex === wordList[wordIndex].length) {
       reverseType = true
       skipTime = 6
    }

}, 96);
}
setInterval(() => {
    words.classList.toggle('cursor')
}, 500);
