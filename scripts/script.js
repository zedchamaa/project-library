/* Strict Mode */
"use strict";

// Store all books objects in an array
const myLibrary = [];

// Store the unique ids of each book card div
let id = 0;

// Store the index of each book in the library
let bookIndex = 0;

// Get user input
const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', () => {
  const title = window.prompt('Enter book title');
  const author = window.prompt('Enter book author');
  const pages = window.prompt('Enter book pages');
  addBookToLibrary(title, author, pages);
  createBookCard(myLibrary);
})

// Create a new book based on user input
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}