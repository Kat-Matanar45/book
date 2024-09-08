const library = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');

console.log(library, book);

book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);
