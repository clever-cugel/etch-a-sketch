const style = document.createElement('style');
document.head.appendChild(style);

const container = document.querySelector('.container');

buildCanvas(16);

const btn = document.querySelector('#button');
btn.addEventListener('click', function() {
    let x = prompt('Enter # of rows: ');
    buildCanvas(x);
});

function buildCanvas(x) {
    for (let i = 0; i < (x*x); i++) {
        const divCell = document.createElement('div');
        container.appendChild(divCell);
        divCell.className = 'divCell';
        divCell.style.backgroundColor = 'white';
        divCell.style.height = (1000/x) + 'px';
        divCell.style.width = (1000/x) + 'px';
    }
}

//so now I need to make a function that deletes all cells