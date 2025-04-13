const style = document.createElement('style');
document.head.appendChild(style);

const container = document.querySelector('.container');

buildCanvas(16);

const btn = document.querySelector('#button');
btn.addEventListener('click', function() {
    let flag = true;
    while (flag) {
        let x = prompt('Enter # of rows: ');
        if (x > 100 || x < 1) {
            alert('Out of bounds, please try again');
            continue;
        } else {
            deleteCanvas();
            buildCanvas(x);
            flag = false;
        }
    }
});

function buildCanvas(x) {
    for (let i = 0; i < (x*x); i++) {
        const divCell = document.createElement('div');
        container.appendChild(divCell);
        divCell.className = 'divCell';
        divCell.style.backgroundColor = 'white';
        divCell.style.height = (1000/x) + 'px';
        divCell.style.width = (1000/x) + 'px';
        divCell.addEventListener('mouseenter', function() {
            let min = 0;
            let max = 255;
            //Math.random() * 256 works like so:
            //generates num between 0 and 1, multiplies
            //inclusive of 0, exclusive of 256
            //floors result
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            divCell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
}

function deleteCanvas() {
    const cells = container.querySelectorAll('.divCell')
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        container.removeChild(cell);
    }
}