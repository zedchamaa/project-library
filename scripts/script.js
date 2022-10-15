/* Strict Mode */
"use strict";

// Store all books objects in an array
let myLibrary = [];

const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', () => {
  displayForm();
  hideBookShelves();
})

// Get and display existing books on page refresh
window.onload = function getStoredBooks() {
  const existingBooks = localStorage.getItem('library');
  // add the books to myLibrary
  myLibrary = JSON.parse(existingBooks) || [];
  // display each stored book on the front end
  for (let book of myLibrary) {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const bookId = book.id;
    displayBook(title, author, pages, bookId);
    findClickedBookId(bookId);
  }
}

// Create a new book
function Book(title, author, pages) {
  this.id = Math.floor(Math.random(myLibrary.length) * 1000000) + 1;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Display the Add New Book form
function displayForm() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup-hide');
  popup.classList.add('popup-display');
}

// Hide the Add New Book form
function hideForm() {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup-display');
  popup.classList.add('popup-hide');
}

// Hide the book shelves
function hideBookShelves() {
  const shelves = document.querySelector('.shelves');
  shelves.classList.remove('shelves-display');
  shelves.classList.add('shelves-hide');
}

// Display the book shelves
function displayBookShelves() {
  const shelves = document.querySelector('.shelves');
  shelves.classList.remove('shelves-hide');
  shelves.classList.add('shelves-display');
}

// Get user input
function getUserInput() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    // prevents form from auto submitting
    event.preventDefault();
    // get book title
    const title = document.getElementById('title').value;
    // get book author
    const author = document.getElementById('author').value;
    // get book pages
    const pages = document.getElementById('pages').value;
    // add the new book to the library
    addBookToLibrary(title, author, pages);
    // reset form to clear all input fields
    form.reset();
    // hide the form
    hideForm();
    // display the book shelves
    displayBookShelves();
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
  if (pages == 1) bookPages.innerText = `${pages} page`;
  if (pages > 1) bookPages.innerText = `${pages} pages`;

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
  if (btn.classList.value === 'not-read read') {
    btn.innerText = 'READ';
  } else if (btn.classList.value === 'not-read') {
    btn.innerText = 'Mark as read';
  }
}