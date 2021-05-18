const fill = document.querySelector('.fill');
const empties = [
    document.querySelector('#empty1'),
    document.querySelector('#empty2'),
    document.querySelector('#empty3'),
    document.querySelector('#empty4'),
    document.querySelector('#empty5'),
];


// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);



// Loop through empties and call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// Drag functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisble'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}