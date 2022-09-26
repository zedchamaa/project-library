<h1>Introduction</h1>

<p>Let’s extend the ‘Book’ example from the previous lesson and turn it into a small Library app.</p>

<p>Click <a href="https://www.theodinproject.com/lessons/node-path-javascript-library" target="_blank"> to view the full assignment on The Odin Project's website.</p>

<h1>Assignment</h1>

<p>1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.</p>

<p>2. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:</p>

<p>let myLibrary = [];

function Book() {
// the constructor...
}

function addBookToLibrary() {
// do stuff here
}</p>

<p>3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.</p>

<p>4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.</p>

<p>5. Add a button on each book’s display to remove the book from the library.</p>

<p>You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.</p>

<p>6. Add a button on each book’s display to change its read status.</p>

<p>To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.</p>

<p>NOTE: You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.</p>
