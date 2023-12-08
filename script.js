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
            smallBox.addEventListener('click',(e) => color(e))
            smallBox.style.backgroundColor = 'white';
            // smallBox.style.border = "1px dashed grey";
            smallBox.style.borderRadius = "25%";
            smallBox.style.flexGrow = '1';
            bigBox.appendChild(smallBox);
        }
    }
}

function clear(){
    const container = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    } 
}

function color(e){
    const box = e.target;
    if(box.style.backgroundColor === 'white'){
        box.style.backgroundColor = 'black';
    }
    else{
        box.style.backgroundColor = 'white';
    }
}

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