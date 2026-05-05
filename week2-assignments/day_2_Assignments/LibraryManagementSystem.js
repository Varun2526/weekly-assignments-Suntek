/**
 * @file LibraryManagementSystem.js
 * @description Library Management System using ES6 Classes — demonstrates
 *              OOP concepts with Book objects that can be borrowed and returned.
 * @concepts Classes, constructor, methods, encapsulation, for...in loop
 */

/**
 * Represents a book in the library system.
 * Each book tracks its title, author, page count, and availability status.
 */
class Book {
    // Instance properties
    title;
    author;
    pages;
    isAvailable = true; // Books start as available by default

    /**
     * Creates a new Book instance.
     * @param {string} title - The title of the book
     * @param {string} author - The author's name
     * @param {number} pages - Number of pages
     */
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    /**
     * Mark the book as borrowed (unavailable).
     * @returns {boolean} Updated availability status (false)
     */
    borrow() {
        this.isAvailable = false;
        return this.isAvailable;
    }

    /**
     * Mark the book as returned (available).
     * @returns {boolean} Updated availability status (true)
     */
    returnBook() {
        this.isAvailable = true;
        return this.isAvailable;
    }

    /**
     * Get formatted book information string.
     * @returns {string} Book details in "Title by Author (N pages)" format
     */
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    /**
     * Check if the book is considered "long" (over 300 pages).
     * @returns {boolean} True if the book has more than 300 pages
     */
    isLongBook() {
        return this.pages > 300;
    }
}

// --- Create book instances ---
let book1 = new Book("Python", "Reema Thareja", 350);
let book2 = new Book("Java", "Ramesh", 500);
let book3 = new Book("DBMS", "Suresh", 200);
let book4 = new Book("WT", "Raju", 700);
let book5 = new Book("FCA", "Harry", 650);

// Store all books in an array for bulk operations
let books = [book1, book2, book3, book4, book5];

// --- Display info of all books ---
console.log("=== List of all books ===");
books.forEach((book) => console.log(book.getInfo()));

// --- Borrow 2 books and show availability ---
console.log("\nBorrowing Python:", book1.borrow());   // false (now unavailable)
console.log("Borrowing DBMS:", book3.borrow());       // false (now unavailable)

// --- Return a book and print updated status ---
console.log("Returning Python:", book1.returnBook()); // true (available again)

// --- Count books with more than 300 pages ---
let longBookCount = books.filter((book) => book.isLongBook()).length;
console.log("\nNumber of Long Books:", longBookCount);

// --- Display all currently available books ---
console.log("\n=== Available Books ===");
books.filter((book) => book.isAvailable).forEach((book) => console.log(book.getInfo()));