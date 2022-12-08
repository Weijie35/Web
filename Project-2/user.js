const addBtn = document.getElementById('add');
const date = document.getElementById('date');
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => addNewNote(note));
}

let d = new Date();
date.innerHTML = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
       <button class="edit">Edit</button>
       <button class="delete">Delete</button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = text;

    deleteBtn.addEventListener('click', () => {
        note.remove();
        update();
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = value;

        update();
    })

    document.querySelector('.notePart').appendChild(note);
}

function update() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    
    localStorage.setItem('notes', JSON.stringify(notes))
}

const counter = document.querySelector('.dataSum');

counter.innerHTML = '0';

const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;

    if(c  < target){
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
    }
    else{
        counter.innerText = target;
    }
}

updateCounter();