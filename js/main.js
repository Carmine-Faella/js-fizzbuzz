
let cntDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++){

    let square = `<div class="square">${i}</div>`;

    cntDom.innerHTML += square;

    if(i%3 == 0){
        square = `<div class="square">Fizz</div>`;
    } else if(i%5 == 0){
        square = `<div class="square">Buzz</div>`;
    }
};

