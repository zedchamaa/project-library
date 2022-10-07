/* Strict Mode */
"use strict";

// Store all books objects in an array
const myLibrary = [];

// Store the unique ids of each book card div
let cardUniqueID;

// Store the index of each book in the library
let bookIndex = 0;

// Store the index of each newly created book
let index = 0;

// Get user input
const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', () => {
  const title = window.prompt('Enter book title');
  const author = window.prompt('Enter book author');
  const pages = window.prompt('Enter book pages');
  addBookToLibrary(title, author, pages);
  createBookCard();
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

// Generate a unique ID per book card
const uniqueID = function generateUniqueID() {
  let id = new Date().getTime();
  return id;
}

// Create a book card and update its user interface
function createBookCard() {
  // add a div element with a class book-card under shelves
  const shelves = document.querySelector('.shelves');
  const bookCard = document.createElement('div');
  cardUniqueID = uniqueID();
  bookCard.classList.add('book-card');
  bookCard.dataset.id = cardUniqueID;
  bookCard.setAttribute('id', cardUniqueID);
  shelves.appendChild(bookCard);
  addBookTitleDiv();
  // increment the bookIndex numbers
  bookIndex++;
}

// Add a div element with a class book-title under book-card
function addBookTitleDiv() {
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  document.getElementById(cardUniqueID).appendChild(bookTitle);
  bookTitle.innerHTML = myLibrary[bookIndex].title;
  addBookAuthorDiv();
}

// Add a div element with a class book-author under book-card
function addBookAuthorDiv() {
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  document.getElementById(cardUniqueID).appendChild(bookAuthor);
  bookAuthor.innerHTML = myLibrary[bookIndex].author;
  addBookPagesDiv();
}

// Add a div element with a class book-pages under book-card
function addBookPagesDiv() {
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  document.getElementById(cardUniqueID).appendChild(bookPages);
  bookPages.innerHTML = myLibrary[bookIndex].pages;
  addNotReadButton();
  addRemoveButton();
  findBookCardID();
}

// Add a button with a class not-read and text Mark as read under buttons
function addNotReadButton() {
  const notReadButton = document.createElement('button');
  notReadButton.classList.add('not-read');
  notReadButton.innerText = 'Mark as read';
  document.getElementById(cardUniqueID).appendChild(notReadButton);
}

// Add a button with a class remove and text Remove under buttons
function addRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.innerText = 'Remove';
  document.getElementById(cardUniqueID).appendChild(removeButton);
}

// Find the ID of a newly created book card
function findBookCardID() {
  const parent = document.querySelector('.shelves');
  const children = Number(parent.children[index].id);
  index++;
  pushCardIdToLibrary(children);
}

// Push the book card ID to the books library and local storage
function pushCardIdToLibrary(children) {
  const firstBook = myLibrary[bookIndex];
  firstBook.id = children;
  saveToLocalStorage(myLibrary);
}

// Find the book card ID of the clicked remove button
const findBookId = bookId => {
  removeBookCard(bookId); 
};
  
document.querySelector('.shelves').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if(!btn) return; // if it's not a `<button>` or a child of a button which was clicked, we're not interested
  const bookId = Number(btn.closest('.book-card').dataset.id);
  if(btn.classList.contains('remove')) findBookId(bookId);
}, {passive: true});

// Remove a book card from the library and local storage
function removeBookCard(bookId) {
  // find the index of the book card to remove based on its ID
  const indexOfCardToRemove = myLibrary.findIndex(({id}) => id === bookId);

  // remove the book card from the array
  myLibrary.splice(indexOfCardToRemove, 1);

  // save the array back to local storage
  saveToLocalStorage(myLibrary);
}