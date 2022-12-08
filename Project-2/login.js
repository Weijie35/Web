const textEl = document.querySelector('.text');
const textEl_2 = document.querySelector('.text_2');
const text_1 = 'Nov-24 2022 Thursday ...'
const text_2 = '.......'
let index = 1;
let index_2 = 1;

writeText();

function writeText() {
    textEl.innerHTML = text_1.slice(0, index);
    textEl_2.innerHTML = text_2.slice(0, index);

    index++;

    if(index > text_1.length){
        index = 1;
    }
    if(index_2 > text_2.length){
        index_2 = 1;
    }

    setTimeout(writeText, 200);
}


