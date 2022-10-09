/* Strict Mode */
"use strict";

// Store all books objects in an array
let myLibrary = [];

// Create a new book
function Book(title, author, pages) {
  this.id = myLibrary.length + 1;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Get user input
function getUserInput() {
  const newBookButton = document.getElementById('new-book');
  newBookButton.addEventListener('click', () => {
    const title = window.prompt('Enter book title');
    const author = window.prompt('Enter book author');
    const pages = window.prompt('Enter book pages');
    addBookToLibrary(title, author, pages);
  })
}

getUserInput();

// Add book to library
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  console.log(myLibrary); // TODO: remember to delete
  displayBook(title, author, pages);
  saveToLocalStorage(myLibrary);
}

// Save library to local storage
function saveToLocalStorage(myLibrary) {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}