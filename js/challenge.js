

let counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('likes');
const submitButton = document.getElementById('submit');

const likesUL = document.querySelector("ul.likes")

const form = document.getElementById('comment-form');
let currentNumber = 0;


let timer = setInterval(increment, 1000)

function increment () { 
    counter.innerHTML++
    }

function decrement () {
    counter.innerHTML--
}

function likerFunction () {
    console.log(currentNumber)
    const li = document.createElement("li");
    li.textContent = `The number ${currentNumber} has been liked 1 time`
    likesUL.append(li)
}
likerFunction;
   
   
    minus.addEventListener('click', decrement);
    plus.addEventListener('click', increment);
    pause.addEventListener('click', timeout);
    
    submitButton.addEventListener('click', (event) => {
       
        event.preventDefault()
        let userInput = document.getElementById('comment-input').value
   
         const list = document.getElementById('list')
           list.appendChild(document.createElement('ul'));
   
           list.append(userInput);
   
           console.log(userInput);
   
   })
   

    function timeout () {

         if (pause.textContent.includes('pause')) {

                clearInterval(timer);
                pause.textContent = 'resume';
 }        else {
                 pause.textContent = 'pause'
    
                timer = setInterval(increment, 1000)

 }
}


