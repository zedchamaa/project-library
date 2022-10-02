/* Strict Mode */
"use strict";

// Store all books objects in an array
const myLibrary = [];

// Get user input
const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', () => {
  const title = window.prompt('Enter book title');
  const author = window.prompt('Enter book author');
  const pages = window.prompt('Enter book pages');
  addBookToLibrary(title, author, pages);
})

// Create a new book based on user input
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Add new book to library
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  saveToLocalStorage(myLibrary);
}

// Save library to local storage
function saveToLocalStorage(myLibrary) {
  localStorage.setItem('library', JSON.stringify(myLibrary));
  pushBooksToCard(myLibrary);
}

// Push books to book card
function pushBooksToCard(myLibrary) {
  const bookTitle = document.querySelector('.book-title');
  const bookAuthor = document.querySelector('.book-author');
  const bookPages = document.querySelector('.number-of-pages');

  for (let i = 0; i < myLibrary.length; i++) {
    // you should create a new card at this stage to push the items to it
    bookTitle.innerHTML = myLibrary[i].title;
    bookAuthor.innerHTML = myLibrary[i].author;
    bookPages.innerHTML = myLibrary[i].pages;
  }
}



