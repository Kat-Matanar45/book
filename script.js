const library = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
let title3 = document.querySelector('.title3');
let advertisement = document.querySelector('.adv');

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = "url('image/library.jpg')";
title3.textContent = 'Книга 3. this и Прототипы Объектов';
advertisement.remove();

console.log(library, book);