const SQUARE_COUNT = 100;
const TIMER_SPEED = 16.6;
const SPEED = 5;

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector("#square").addEventListener("click", ()=>{
        alert("OMG YOU CLICKED ME!");
    });
    

    let box = document.querySelector('#box');

    createSquares();

    Array.from(box.children).forEach((element)=>{
        element.addEventListener("mouseover", ()=>{
            element.src = "orochimaru.jpg";
        });
        element.addEventListener("mouseout", ()=>{
            element.src = "laughing_man.jpg";
        });
    });


    Array.from(box.children).forEach((element)=>{
        const parent = element.parentElement;
        const maxX = parent.clientWidth - element.clientWidth;
        const maxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED * (Math.random() * 2 - 1); //this gives a number from -1 to .999
        let dy = SPEED * (Math.random() * 2 - 1);

        let x = parseInt(element.style.left) || 225;
        let y = parseInt(element.style.top) || 175;
        setInterval(()=>{

            if(x <= 0 || x >= maxX){
                dx *= -1;
            }
            if(y <= 0 || y >= maxY){
                dy *= -1;
            }
            x += dx;
            y += dy;

            element.style.left = x + "px";
            element.style.top = y + "px";
                
            }, TIMER_SPEED)

            
    });
});

function newColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

function createSquares(){
    for(let i = 0; i < SQUARE_COUNT; i++){
        //Make the element, but its not anything or on the page
        let square = document.createElement('img');
        //set the attributes of that element
        square.src = "laughing_man.jpg";
        square.alt = "catch the Laughing Man!"
        square.className = "square";
        box.appendChild(square);
        //MOUSE OVER AND MOUSE OUT EVENTS
    }
}