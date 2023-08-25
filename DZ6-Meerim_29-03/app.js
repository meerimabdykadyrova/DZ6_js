
const input = document.querySelector('#input');
const createButton = document.querySelector('#create_button');
const todoList = document.querySelector('#todo_list');

const createTodo = () => {
    const div = document.createElement('div');
    const divButton = document.createElement('div');
    const text = document.createElement('h3');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    div.setAttribute('class', 'block_text');
    divButton.setAttribute('class', 'div_button');
    deleteButton.setAttribute('class', 'delete_button');
    editButton.setAttribute('class', 'edit_button');

    deleteButton.innerText = 'DELETE';
    editButton.innerText = 'EDIT';

    divButton.append(deleteButton, editButton);
    div.append(text, divButton);

    const inputText = input.value;
    text.innerText = inputText;

    todoList.prepend(div);

    input.value = '';
    deleteButton.addEventListener('click', () => div.remove())
};

function textInput() {
    let menu = document.querySelector('input').value;
    document.querySelector('#create_button').innerHTML = menu;
}
let menu = () => {
    if (input.value === '') {
        alert('Заполните поле');
    } else {
        createTodo();
    }
};
createButton.onclick = menu;



function filterBooksByN(...bookNames) {
    return bookNames.filter(bookName => bookName.includes('н') || bookName.includes('Н'));
}
const books = ['Неуютная ферма', 'B метре друг от друга', 'Виноваты звезды','Невидимая девочка и другие','НИ СЫ', ' На маяк', 'Процесс', 'Хочу и буду', 'Мечтать не вредно'];
const filteredList = filterBooksByN(...books);
console.log(filteredList);
