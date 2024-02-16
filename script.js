function addFlexbox(number){
    for(let i = 0 ; i < number ; i++){
        const container = document.querySelector('.container');
        container.style.flexDirection = 'column';
        const bigBox = document.createElement('div');
        bigBox.style.display = 'flex';
        bigBox.style.flexGrow = '1';
        container.appendChild(bigBox);
        for(let j = 0 ; j < number ; j++){
            const smallBox = document.createElement('div');
            smallBox.addEventListener('mousemove',(e) => handleMouseMove(e));
            smallBox.addEventListener('mousedown',(e)=> handleMouseDown(e));
            smallBox.addEventListener('mouseup',(e)=> handleMouseUp(e));
            smallBox.style.backgroundColor = 'white';
            // smallBox.style.border = "1px dashed grey";
            smallBox.style.borderRadius = "10%";
            smallBox.style.flexGrow = '1';
            bigBox.appendChild(smallBox);
        }
    }
}

function erase(){
    eraser = true;
}

function brush(){
    eraser = false;
}

function handleMouseDown(e){
    mouseDown = true;
}

function handleMouseUp(e){
    mouseDown = false;
}

function reset(){
    const smallBoxes = document.querySelectorAll('.container > div > div');
    smallBoxes.forEach((smallBox) => {
    smallBox.style.backgroundColor = 'white';
    });
}

function handleMouseMove(e){
    if(!mouseDown){
        return;
    }
    else{
        const box = e.target;
        if(eraser == true){
            box.style.backgroundColor = 'white';    
        }
        else{
            box.style.backgroundColor = 'black';
        }
    }
}

let mouseDown = false;
let eraser = false;

addFlexbox(25);
const btn = document.querySelector('.grid');
btn.addEventListener('click',() =>{
    let size = prompt("ENTER THE SIZE OF GRID");
    if(size > 100){
        alert("ENTER SIZE LESS THAN 100!");
        size = prompt("ENTER THE SIZE OF GRID");
    }
    clear();
    addFlexbox(size);
});


const ers = document.querySelector('.eraser');
ers.addEventListener('click',() => erase());

const brsh = document.querySelector('.brush');
brsh.addEventListener('click',() => brush());

const res = document.querySelector('.reset');
res.addEventListener('click',() => reset());