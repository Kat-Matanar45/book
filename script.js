const library = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
let title3 = document.querySelector('.title3');
let advertisement = document.querySelector('.adv');
const book2 = document.querySelectorAll('.listBook2');
const book5 = document.querySelectorAll('.listBook5');

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = "url('image/library.jpg')";
title3.textContent = 'Книга 3. this и Прототипы Объектов';
advertisement.remove();

book2[4].before(book2[6]);
book2[4].before(book2[8]);
book2[9].after(book2[2]);

book5[4].after(book5[2]);
book5[3].before(book5[9]);
book5[7].after(book5[5]);

console.log(library, book);
console.log(book2);
console.log(book5);