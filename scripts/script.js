/* Strict Mode */
"use strict";

// Store all books objects in an array
let myLibrary = [];

// Get user input
const title = window.prompt('Enter book title');
const author = window.prompt('Enter book author');
const pages = window.prompt('Enter book pages');

// Create a new book
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}