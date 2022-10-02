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

retrieveBookFromLocalStorage();

// Save library to local storage
function saveToLocalStorage(myLibrary) {
  localStorage.setItem('books', JSON.stringify(myLibrary));
}

// Get book from local storage
function retrieveBookFromLocalStorage() {
  const book = JSON.parse(localStorage.getItem('books'));
  console.log(book.title);
}