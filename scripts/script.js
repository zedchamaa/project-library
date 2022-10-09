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
  const bookId = newBook.id;
  displayBook(title, author, pages, bookId);
  saveToLocalStorage(myLibrary);
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
  // then push book author to it
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-pages');
  bookCard.appendChild(bookPages);
  bookPages.innerText = pages;

  // Add a button with a class not-read and text Mark as read under buttons
  const notReadButton = document.createElement('button');
  notReadButton.classList.add('not-read');
  bookCard.appendChild(notReadButton);
  notReadButton.innerText = 'Mark as read';








  
}