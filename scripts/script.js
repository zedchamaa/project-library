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
