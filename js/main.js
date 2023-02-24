
let cntDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++){

    let square = document.createElement('div')
    square.classList.add('square');
    cntDom.append(square);

    if(i%3 == 0 && i%5 == 0){
        square.append('FizzBuzz');
        square.style.backgroundColor = 'red';
    }else if(i%3 == 0){
        square.append('Fizz');
        square.style.backgroundColor = 'lightgreen';
    }else if(i%5 == 0){
        square.append('Buzz');
        square.style.backgroundColor = 'orange';
    }else{
        square.append(i);
    };
}
