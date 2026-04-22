const SQUARE_COUNT = 30;
const TIMER_SPEED = 16.6;
const SPEED = 5;
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
    Array.from(box.children).forEach((element)=>{
        let dx = SPEED * Math.random() * 2 - 1; //this gives a number from -1 to .999
        let dy = SPEED * Math.random() * 2 - 1;

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;
        setInterval(()=>{
            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
                
            }, TIMER_SPEED)
    });
});