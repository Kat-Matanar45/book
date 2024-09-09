const library = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const title3 = book[4].querySelector('a');
const advertisement = document.querySelector('.adv');

const book2 = book[0].querySelectorAll('li');
const book5 = book[5].querySelectorAll('li');

const chapter = document.createElement('li');
let lists = book[2].querySelectorAll('ul');
const book6 = book[2].querySelectorAll('li');

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

chapter.textContent = 'Глава 8: За пределами ES6';
lists[0].append(chapter);
book6[9].before(chapter);
