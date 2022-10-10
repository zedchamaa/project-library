/* Strict Mode */
"use strict";

// Store all books objects in an array
let myLibrary = [];

// Create a new book
function Book(title, author, pages) {
  this.id = Math.floor(Math.random(myLibrary.length) * 1000000) + 1;
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
  const bookId = newBook.id;
  displayBook(title, author, pages, bookId);
  saveToLocalStorage(myLibrary);
  findClickedBookId(bookId);
}

// Save library to local storage
function saveToLocalStorage(myLibrary) {
  localStorage.setItem('library', JSON.stringify(myLibrary));
}

// Create each book card and display on the web page
function displayBook(title, author, pages, bookId) {
  // add a div element with a class book-card under shelves
  const shelves = document.querySelector('.shelves');
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  shelves.appendChild(bookCard);

  // add the book card unique id
  bookCard.setAttribute('id', bookId);
  
  // add a div element with class book-title under book-card
  // then push book title to it
  const bookTitle = document.createElement('div');
  bookTitle.classList.add('book-title');
  bookCard.appendChild(bookTitle);
  bookTitle.innerText = title;

  // add a div element with class book-author under book-card
  // then push book author to it
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-author');
  bookCard.appendChild(bookAuthor);
  bookAuthor.innerText = author;

  // add a div element with class book-author under book-card
  // then push book pages to it
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  bookCard.appendChild(bookPages);
  bookPages.innerText = pages;

  // Add a button with a class not-read and text Mark as read under buttons
  const notReadButton = document.createElement('button');
  notReadButton.classList.add('not-read');
  bookCard.appendChild(notReadButton);
  notReadButton.innerText = 'Mark as read';

  // Add a button with a class remove and text Remove under buttons
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  bookCard.appendChild(removeButton);
  removeButton.innerText = 'Remove';
}

// Find the book card ID of the clicked remove button
function findClickedBookId(bookId) {
  document.querySelector('.shelves').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if(!btn) return; // if it's not a `<button>` or a child of a button which was clicked, we're not interested
    const cardId = Number(btn.closest('.book-card').id);
    if(btn.classList.contains('remove') && bookId === cardId) removeBookCard(bookId);
    if(btn.classList.contains('not-read') && bookId === cardId) toggleReadButton(btn);
  }, {passive: true});
}

// Remove a book card from the library and local storage
function removeBookCard(bookId) {
  // find the index of the book card to remove based on its ID
  const indexOfCardToRemove = myLibrary.findIndex(({id}) => id === bookId);
  // remove the book card from the array
  myLibrary.splice(indexOfCardToRemove, 1);
  // save the array back to local storage
  saveToLocalStorage(myLibrary);
  // Remove a book card from the user interface
  removeBookCardFromUi(bookId);
}

// Remove a book card from the user interface
function removeBookCardFromUi(bookId) {
  const bookIdCard = document.getElementById(bookId);
  bookIdCard.remove();
  // save the array back to local storage
  saveToLocalStorage(myLibrary);
}

// Toggle the read button
function toggleReadButton(btn) {
  btn.classList.toggle('read');
  console.log(btn.classList.value);
  if (btn.classList.value === 'not-read read') {
    btn.innerText = 'READ';
  } else if (btn.classList.value === 'not-read') {
    btn.innerText = 'Mark as read';
  }
}