/* Strict Mode */
"use strict";

// Store all books objects in an array
const myLibrary = [];

// Store the unique ids of each book card div
let id;

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

// Add new book to library
function addBookToLibrary(title, author, pages) {
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
  saveToLocalStorage(myLibrary);
}

// Save library to local storage
function saveToLocalStorage(myLibrary) {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

// Create a book card and update its user interface
function createBookCard() {  
  addBookCardDiv();
  addBookTitleDiv();
  addBookAuthorDiv();
  addBookPagesDiv();
  addNotReadButton();
  addRemoveButton();

  // increment the bookIndex numbers
  bookIndex++;
}

// Generate a random unique ID per book-card
const uniqueID = function generateRandomUniqueID() {
  let id = new Date().getTime();
  return id;
}

// Add a div element with a class book-card under shelves
function addBookCardDiv() {
  // target the shelves div
  const shelves = document.querySelector('.shelves');
  const bookCard = document.createElement('div');
  id = uniqueID();
  bookCard.classList.add('book-card');
  bookCard.setAttribute('id', id);
  shelves.appendChild(bookCard);
}

// Add a div element with a class book-title under book-card
function addBookTitleDiv() {
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  document.getElementById(id).appendChild(bookTitle);
  bookTitle.innerHTML = myLibrary[bookIndex].title;
}

// Add a div element with a class book-author under book-card
function addBookAuthorDiv() {
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  document.getElementById(id).appendChild(bookAuthor);
  bookAuthor.innerHTML = myLibrary[bookIndex].author;
}

// Add a div element with a class book-pages under book-card
function addBookPagesDiv() {
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  document.getElementById(id).appendChild(bookPages);
  bookPages.innerHTML = myLibrary[bookIndex].pages;
}

// Add a button with a class not-read and text Mark as read under buttons
function addNotReadButton() {
  const notReadButton = document.createElement('button');
  notReadButton.classList.add('not-read');
  notReadButton.innerText = 'Mark as read';
  document.getElementById(id).appendChild(notReadButton);
}

// Add a button with a class remove and text Remove under buttons
function addRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.innerText = 'Remove';
  document.getElementById(id).appendChild(removeButton);
}