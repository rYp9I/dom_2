
const Li = document.querySelectorAll('li')
Li[2].remove()
Li[4].remove()
// удалить элементы из списка
for(let i of Li) {
    i.classList.add('listItem')
};
const Ul = document.querySelector('ul');
Ul.classList.add('List');
// добавить ко всем li элементам класс listItem  и к ul элементу класс list из style.css
const firstcar = document.createElement('li');
firstcar.textContent = 'Buggati';
Ul.prepend(firstcar);
firstcar.classList.add('listItem');
// добавить в конец списка новый элемент li с текстом Ford
const lastcar = document.createElement('li');
lastcar.textContent = 'Ford';
Ul.append(lastcar);
lastcar.classList.add('listItem');
// добавить в начало списка новый элемент li с текстом Bugatti
const image = document.createElement('img');
image.src = 'IMG/gallery3.jpg';
document.querySelector('ul').prepend(image);
// Добавить  картинку
const p = document.querySelector('p');
p.classList.toggle('red');
p.classList.toggle('italic');
// Удалить из параграфа класс red и italic
const divEl = document.querySelector('div');
const h1 = document.createElement('h1');
h1.textContent = 'This is h1 tag';
divEl.appendChild(h1);
// добавить в див h1 тэг
h1.style.color = 'blue';
h1. style.fontSize = '40px';
// установить h1 тэгу цвет текста - синий и размер шрифта 40 пикселей
const form = document.querySelector('form');
const inputName = document.createElement('input');
inputName.type = 'text';
form.append(inputName);
inputName.placeholder = 'Name'

const inputLastName = document.createElement('input');
inputLastName.type = 'text';
form.append(inputLastName);
inputLastName.placeholder = 'Last Name';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
form.append(inputPassword);
inputPassword.placeholder = 'Password';

const inputConfirmPassword = document.createElement('input');
inputConfirmPassword.type = 'password';
form.append(inputConfirmPassword);
inputConfirmPassword.placeholder = 'Confirm Password';
// Добавить в форму с помощью джаваскрипт инпутbl






