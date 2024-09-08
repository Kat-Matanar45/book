const library = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');

console.log(library, book);

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = "url('image/library.jpg')";

let title3 = document.querySelector('.title3');
title3.textContent = 'Книга 3. this и Прототипы Объектов';