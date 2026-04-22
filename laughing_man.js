const SQUARE_COUNT = 3;
const TIMER_SPEED = 500;
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector("#square").addEventListener("click", ()=>{
        alert("OMG YOU CLICKED ME!");
    });

    let box = document.querySelector('#box');

    for(let i = 0; i < SQUARE_COUNT; i++){
        //Make the element, but its not anything or on the page
        let square = document.createElement('img');
        //set the attributes of that element
        square.src = "laughing_man.jpg";
        square.alt = "catch the Laughing Man!"
        square.className = "square";
        box.appendChild(square);
    }
    Array.from(box.children).forEach(
        setInterval(()=>{

        }, TIMER_SPEED)
    );
});